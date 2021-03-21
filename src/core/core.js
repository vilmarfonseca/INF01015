const t = require('./getTable');
const v = require('./getValue');
const hash = require('./hashtable');

startCore();

async function startCore() {
    Object.entries(hash.table).forEach(([key, val]) => {
        if (val.type === 'object') {
            setTimeout(() => { v.getValue(val.oid) }, Math.floor((Math.random() * 200) + 1));
            hash.table[key].interaval = async () => { await v.getValue(val.oid) }
        } else if (val.type === 'table') {
            setTimeout(() => { t.getTable(val.oid) }, Math.floor((Math.random() * 500) + 1));
            hash.table[key].interaval = async () => { await t.getTable(val.oid) }
        }
    });
}

module.exports = {
    startCore,
    hash
}
