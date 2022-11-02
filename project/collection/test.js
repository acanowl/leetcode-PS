// const { DoubleLinkedList } = require("./doubleLinked")
// const { DoubleLinkedList } = require('data-structure')
import { DoubleLinkedList } from '@ao/data-structure'

let dbLinkedList = new DoubleLinkedList()

dbLinkedList.append(10)
dbLinkedList.append(15)
dbLinkedList.append(20)
dbLinkedList.append(25)
console.log(dbLinkedList.join("<->")) // 10<->15<->20<->25

console.log(dbLinkedList.getElementAt(0).val) // 10
console.log(dbLinkedList.getElementAt(1).val) // 15
console.log(dbLinkedList.getElementAt(5)) // null

console.log(dbLinkedList.join("<->")) // 10<->15<->20<->25
console.log(dbLinkedList.indexOf(10)) // 0
console.log(dbLinkedList.indexOf(25)) // 3
console.log(dbLinkedList.indexOf(50)) // -1

dbLinkedList.insert(0, 5)
dbLinkedList.insert(3, 18)
dbLinkedList.insert(6, 30)
console.log(dbLinkedList.join("<->")) // 5<->10<->15<->18<->20<->25<->30

console.log(dbLinkedList.find(10).val) // 10
console.log(dbLinkedList.removeAt(0)) // 5
console.log(dbLinkedList.removeAt(1)) // 15
console.log(dbLinkedList.removeAt(5)) // null
console.log(dbLinkedList.remove(10)) // 10
console.log(dbLinkedList.remove(100)) // null

console.log(dbLinkedList.join("<->")) // 18<->20<->25<->30
