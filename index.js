// Meilleures ventes
const bestS1 = 'Le petit Prince'
const bestS2 = 'Le mariage de Figaro'
console.log('Meilleures ventes : ' + bestS1.toUpperCase())
console.log('Meilleures ventes : ' + bestS2.toUpperCase())

// Livres de la série Narnia
const serie1 = 'Le neuveu du magicien'
const serie2 = 'Le prince Caspian'
console.log('Narnia'.concat(' : ', serie1, ', ', serie2))
// Titres sans apostrophe
let error1 = 'Le songe dune nuit dété'
let error2 = 'Le lion, la sorcière blanche et larmoire magique'
/** JavaScript */
error1 = 'Le songe d\'une nuit d\'été'
console.log(error1)
error2 = 'Le lion, la sorcière blanche et l\'armoire magique'
console.log(error2)

// Titres les uns à la suite des autres
const title = 'PhèdreAndromaqueBritannicus'
/** JavaScript */
const title1 = title.substring(0, 6)
console.log(title1)
const title2 = title.substring(6, 16)
console.log(title2)
const title3 = title.substring(16, 27)
console.log(title3)
