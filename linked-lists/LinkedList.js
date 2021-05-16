const LinkedListNode = (value, next) => {
  return {
    value,
    next,
  }
}

const LinkedList = () => {
  return {
    head: null,
    length: 0,
    insertAtHead: function(value) {
      const node = LinkedListNode(value, this.head)
      this.head = node
      this.length++
    },
    getByIndex: function(index) {
      if (index < 0 || index >= this.length) return null

      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    },
    insertAtIndex: function(index, value) {
      if (index === 0) return this.insertAtHead(value)

      const prevNode = this.getByIndex(index - 1)
      if (prevNode === null) return null
      prevNode.next = LinkedListNode(value, prevNode.next)
      this.length++
    },
    removeAtIndex: function(index) {
      if (index === 0) return this.removeHead()
      if (index > this.length - 1 || index < 0) return null

      const beforeNode = this.getByIndex(index - 1)
      const afterNode = this.getByIndex(index + 1)
      beforeNode.next = afterNode
      this.length--
    },
    removeHead: function() {
      if (this.head === null) return null
      const next = this.head.next
      this.head = next
      this.length--
    }
  }
}

LinkedList.fromValues = (...values) => {
  const list = LinkedList()
  for (let i = values.length - 1; i >= 0; i--) {
    list.insertAtHead(values[i])
  }
  return list
}

module.exports = LinkedList