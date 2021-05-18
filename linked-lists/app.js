const LinkedList = require('./linkedList')
const AddLists = require('./addLists')

const Cats = [
  { name: 'Callie', id: '1' },
  { name: 'Carson', id: '2' },
  { name: 'Cooper', id: '3' },
]

const list = LinkedList()
list.insertAtHead(Cats[0])
list.insertAtHead(Cats[1])
list.insertAtHead(Cats[2])
console.log(list.getByIndex(1).value)

list.insertAtIndex(3, { name: 'Tom', id: '4' })
console.log(list.getByIndex(3).value)

list.removeAtIndex(3)
console.log(list.getByIndex(3))

console.log(list.getByIndex(0).value)
list.removeHead()
console.log(list.getByIndex(0).value)


const list1 = LinkedList.fromValues(3, 4, 6)
const list2 = LinkedList.fromValues(4, 7, 3)
console.log(AddLists(list1, list2).print())
