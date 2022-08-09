const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
command:'add',
describe:'Adding note',
builder: {
    title: {
       describe:'Note title',
       demandOption: true,
       type:'string'
    },
    body: {
        describe:'Note body',
        demandOption:true,
        type:'string'
    }
},
handler: function(argv) {
   // console.log('adding')
   // console.log(`Title: ${argv.title}`  ),
   // console.log(`Body: ${argv.body}`)
    notes.addNote(argv.title,argv.body)
}
})

yargs.command({
command:'remove',
describe:'removing note',
handler: function(argv) {
    console.log('removing')
}
})
yargs.parse()
//console.log(yargs.argv)
//const command = process.argv[2]
//console.log(process.argv)

//if (command === 'add') {
//    console.log('Adding note');
//} else if (command==='remove') {
 //   console.log('Removing note');
//}