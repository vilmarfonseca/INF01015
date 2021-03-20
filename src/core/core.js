const t = require('./getTable');
const v = require('./getValue');


const oid = ['1.3.6.1.2.1.25.2.3'];
startCore();

async function startCore () {
   const a = await t.getTable(oid)
    console.log(a)
   //  const a = await v.getValue(oid)
   //  console.log(a)
}

module.exports = {
    startCore
}
