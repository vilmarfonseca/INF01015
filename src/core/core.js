const t = require('./getTable');
const v = require('./getValue');
const hash = require('./hashtable');

startCore();

async function startCore () {

    // console.log(hash.getByNameValue.hrMemorySize);
   // const a = await t.getTable(oid)
   //  console.log(a)
   //  console.log(hash.getByNameValue.udpInDatagrams.oid)
    const a = await v.getValue(hash.getByName.udpOutDatagrams.oid)
    console.log(a)
}

module.exports = {
    startCore
}
