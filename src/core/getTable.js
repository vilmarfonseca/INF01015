const i = require('./snmpInitConfig')

const columns = [1, 2, 3, 4, 5 ,6];
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
        i.session.tableColumns(oid, columns, maxRepetitions, function (error, table) {
            if (error) {
                reject(error.toString());
                console.error (error.toString ());
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
                            value: `${table[indexes[i]][columns[j]]}`
                        })
                    }
                    values.push(ins);
                }
                resolve(values);
            }
        });
    })
}

module.exports = {
    getTable
}
