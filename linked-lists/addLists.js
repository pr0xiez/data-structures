const LinkedList = require('./LinkedList')

/**
 * Problem
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807
*/

const AddLists = (list1, list2) => {
  let sumList = LinkedList()
  while (list1 != null || list2 != null) {
    let carryOver = 0
    let v1 = 0
    let v2 = 0
    if (list1 != null) v1 = list1.value
    if (list2 != null) v2 = list2.value

    let sum = v1 + v2 + carryOver
    carryOver = Math.floor(sum / 10)
    sum = sum % 10
    sumList.insertAtHead(sum)

    if (list1 != null) list1 = list1.next
    if (list2 != null) list2 = list2.next
  }

  return sumList
}

module.exports = AddLists