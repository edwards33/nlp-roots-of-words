var natural = require('natural')
var testStr = "Seas said image dry let a make dry also called divided bring, seed seasons she'd rule you them deep."

console.log(natural.PorterStemmer.stem('cupcakes')) //cupcak
console.log(natural.PorterStemmer.stem('wrongly')) //wrongli
console.log(natural.PorterStemmer.stem('awaking')) //awak

console.log(natural.PorterStemmer.tokenizeAndStem(testStr))
