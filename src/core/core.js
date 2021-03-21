const t = require('./getTable');
const v = require('./getValue');
const hash = require('./hashtable');

async function startCore () {
    Object.entries(hash.table).forEach(([key, val]) => {
        if(val.type === 'object'){
            v.getValue(val.oid)
            hash.table[key].interaval = setInterval(async () => {await v.getValue(val.oid)}, val.runInterval)
        } else if(val.type === 'table') {
            t.getTable(val.oid);
            hash.table[key].interaval = setInterval(async () => {await t.getTable(val.oid)}, val.runInterval)
        }
    });
}

module.exports = {
    startCore
}
