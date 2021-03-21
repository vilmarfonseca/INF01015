const t = require('./getTable');
const v = require('./getValue');
const hash = require('./hashtable');

startCore();

async function startCore() {
    Object.entries(hash.table).forEach(([key, val]) => {
        if (val.type === 'object') {
            v.getValue(val.oid)
            hash.table[key].interval = async () => { await v.getValue(val.oid) }

        } 
        else if (val.type === 'table') {
            t.getTable(val.oid);
            hash.table[key].interaval = async () => { await t.getTable(val.oid) }
        }
    });
}

process.on('message', (message) => {
    if (message == 'START') {
        console.log('Requesting Values to Snmp');
        let slowResult = startCore();
        process.send(hash.table);
    }
});

module.exports = {
    startCore,
    hash
}
