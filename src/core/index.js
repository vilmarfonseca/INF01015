const s = require('./getTable')


const oid = ['1.3.6.1.2.1.25.2.3'];
doTheMagic ();
async function doTheMagic () {
   const a = await s.getTable(oid)
    console.log(a)
}
