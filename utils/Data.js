// This is a method that generates the Constants.js file from the Member Pictures.
// Feel free to ignore it.

const fs = require('fs')

let nameToPic = {}
let names = fs.readFileSync('../assets/names.txt').toString().split('\n')
let constPath = '../constants/Constants.js'
let sourceStr = ''

names.forEach(name => {
    let simplified = name.replace(/\s/g, '')
    nameToPic[simplified.toLowerCase()] = name
});

let files = fs.readdirSync('../assets/MemberPictures')
files.forEach(file => {
    if (file.toLowerCase().endsWith('.jpg')) {
        key = file.substring(0, file.length - 4).toLowerCase()
        filePath = '../assets/MemberPictures/' + file.toString()
        sourceStr += `\t ${key}: ["${nameToPic[key]}", require("${filePath}")], \n`
    }
})

sourceStr = 'const nameToPic = { \n' + sourceStr + '} \n'
sourceStr += 'export {nameToPic}'
fs.writeFileSync(constPath, sourceStr, 'utf-8')