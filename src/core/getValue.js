const snmp = require("net-snmp");
const i = require('./snmpInitConfig');

async function getValue(oids) {
    return new Promise((resolve, reject) => {
        i.session.get(oids, function (error, varbinds) {
            if (error) {
                console.error (error.toString ());
                reject(error.toString());
            } else {
                const values = [];
                for (var i = 0; i < varbinds.length; i++) {
                    // for version 1 we can assume all OIDs were successful
                    console.log (varbinds[i].oid + "|" + varbinds[i].value);

                    values.push({
                        oid: varbinds[i].oid,
                        value: varbinds[i].value
                    })

                    // for version 2c we must check each OID for an error condition
                    if (snmp.isVarbindError (varbinds[i]))
                        console.error (snmp.varbindError (varbinds[i]));
                    else
                        console.log (varbinds[i].oid + "|" + varbinds[i].value);
                }
                resolve(values);
            }
        });
    });
}

module.exports = {
    getValue
}
