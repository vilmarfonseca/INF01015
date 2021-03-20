const t = require('./getTable');
const v = require('./getValue');
const hash = require('./hashtable');

startCore();

async function startCore () {

    console.log(hash.getByNameValue.hrMemorySize);
   // const a = await t.getTable(oid)
   //  console.log(a)
   //  const a = await v.getValue(oid)
   //  console.log(a)
}

module.exports = {
    startCore
}
