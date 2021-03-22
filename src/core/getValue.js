const snmp = require("net-snmp");
const i = require('./snmpInitConfig');
const hash = require('./hashtable');

async function getValue(oids) {
    return new Promise((resolve, reject) => {
        i.session.get(oids, function (error, varbinds) {
            if (error) {
                console.error (error.toString ());
                reject(error.toString());
            } else {
                const values = [];
                for (var i = 0; i < varbinds.length; i++) {
                    hash.table[varbinds[i].oid].storage.push(varbinds[i].value);
                    hash.table[varbinds[i].oid].lastUpdatedAt = new Date();

                    values.push({
                        oid: varbinds[i].oid,
                        value: varbinds[i].value
                    })

                    if (snmp.isVarbindError (varbinds[i])){
                        console.error (snmp.varbindError (varbinds[i]));
                    }
                    
                }
                resolve(values);
            }
        });
    });
}

module.exports = {
    getValue
}
