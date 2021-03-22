const i = require('./snmpInitConfig')
const hash = require('./hashtable');

const maxRepetitions = 20;

function sortInt (a, b) {
    if (a > b)
        return 1;
    else if (b > a)
        return -1;
    else
        return 0;
}

async function getTable(oid) {
    return new Promise((resolve, reject) => {
        i.session.tableColumns(oid, hash.table[oid[0]].columns, maxRepetitions, function (error, table) {
            if (error) {
                console.error (error.toString ());
                reject(error.toString());
            } else {
                var indexes = [];
                for (let index in table)
                    indexes.push (parseInt (index));
                indexes.sort (sortInt);

                const values = []
                for (var i = 0; i < indexes.length; i++) {
                    var columns = [];
                    for (let column in table[indexes[i]])
                        columns.push (parseInt (column));
                    columns.sort (sortInt);

                    const ins = []
                    for (var j = 0; j < columns.length; j++) {
                        ins.push({
                            columns: columns[j],
                            value: `${table[indexes[i]][columns[j]]}`,
                            timestamp: new Date()
                        })
                    }
                    values.push(ins);
                }

                hash.table[oid[0]].storage.push(values);
                hash.table[oid[0]].lastUpdatedAt = new Date();
                resolve(values);
            }
        });
    })
}

module.exports = {
    getTable
}
