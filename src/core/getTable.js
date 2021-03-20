const s = require('./snmpInitConfig')

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

function responseCb (error, table) {
    if (error) {
        console.error (error.toString ());
    } else {
        // This code is purely used to print rows out in index order,
        // ifIndex's are integers so we'll sort them numerically using
        // the sortInt() function above

        var indexes = [];
        for (let index in table)
            indexes.push (parseInt (index));
        indexes.sort (sortInt);

        // Use the sorted indexes we've calculated to walk through each
        // row in order
        const values = []
        for (var i = 0; i < indexes.length; i++) {
            // Like indexes we sort by column, so use the same trick here,
            // some rows may not have the same columns as other rows, so
            // we calculate this per row
            var columns = [];
            for (let column in table[indexes[i]])
                columns.push (parseInt (column));
            columns.sort (sortInt);

            // Print index, then each column indented under the index
            // console.log ("row for index = " + indexes[i]);
            const ins = []
            for (var j = 0; j < columns.length; j++) {
                // console.log ("   column " + columns[j] + " = "
                //     + table[indexes[i]][columns[j]]);
                ins.push({
                    columns: columns[j],
                    value: `${table[indexes[i]][columns[j]]}`
                })
            }
            values.push(ins);
        }
        return values;
    }
}

function finalCb (data) {
    console.log(data)
}

async function getTable(oid) {
    return  s.session.tableColumns(oid, columns, maxRepetitions, responseCb, finalCb);
}

module.exports = {
    getTable
}
