const fs = require ('fs')
const read = function (){
    return fs.readFileSync ('data.txt', 'utsf8')
}

module.exports = read