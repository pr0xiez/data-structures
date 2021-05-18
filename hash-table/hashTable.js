const hashStringToInt = (key, tableSize) => {
  let hash = 17

  for (let i = 0; i < key.length; i++) {
    hash = (13 * hash * key.charCodeAt(i)) % tableSize
  }

  return hash
}

const HashTable = (size) => {
  const table = new Array(size)
  return {
    setItem: function(key, value) {
      const id = hashStringToInt(key, table.length)
      if (table[id]) {
        table[id].push([key, value])
        return
      }
      table[id] = [[key, value]]
    },
    getItem: function(key) {
      const id = hashStringToInt(key, table.length)
      if (!table[id]) return null
      return table[id].find(x => x[0] === key)[1]
    }
  }
}

const table = HashTable(17)
table.setItem('Foo', 'Bar')
table.setItem('a', 'b')
table.setItem('fieldName', 'value')
console.log(
  table.getItem('Foo'),
  table.getItem('fieldName')
)

console.log('hash: ', hashStringToInt('tables', 3000))
