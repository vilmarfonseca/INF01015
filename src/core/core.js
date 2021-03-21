const t = require('./getTable');
const v = require('./getValue');
const hash = require('./hashtable');

async function startCore () {

    Object.entries(hash.table).forEach(([key, val]) => {
        if(val.type === 'object'){
            hash.table[key].interaval = setInterval(async () => {await v.getValue(val.oid)}, val.runInterval)
        } else {

        }
    });
}

module.exports = {
    startCore
}
