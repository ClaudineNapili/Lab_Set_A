const read = require ('./read')
const write = require ('./write')
const add = require ('./add')
const employee = require ('./employee')
const present = require ('./present')
const department = require ('./department')
const role = require ('./role')
const data = process.argv
if (data[2]== 'add'){

    //build an object
    note = {
        employee: data [3],
        role: data [4],
        department: data [5]
    }
    //get oldNote value
    var oldNote =read()
    //add note to note.txt
    add (note,oldNote)
    //present input in the terminal
    present(read())

}

if (data[2] == 'read'){
    const present = require ('./present')
    present(read())
}
if (data[2] == 'employee'){
employee(read())
}

if (data[2] == 'department'){
    department(read())

}

if (data[2] == 'role'){
    role(read())
}

