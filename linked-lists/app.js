const LinkedList = require('./LinkedList')

const Cats = [
  { name: 'Callie', id: '1' },
  { name: 'Carson', id: '2' },
  { name: 'Cooper', id: '3' },
]

const list = LinkedList()
list.insertAtHead(Cats[0])
list.insertAtHead(Cats[1])
list.insertAtHead(Cats[2])

// console.log(list)

// console.log(list.getByIndex(1).value)

const ll = LinkedList.fromValues(10, 20)
console.log(ll.getByIndex(0))