/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Definition for singly-linked list node
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Function to print the linked list
function printList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.val + " -> ");
    current = current.next;
  }
  process.stdout.write("null\n");
}

// Function to create a linked list from an array
function createListFromArray(arr) {
  let dummy = new ListNode();
  let current = dummy;

  for (let value of arr) {
    current.next = new ListNode(value);
    current = current.next;
  }

  return dummy.next;
}

var oddEvenList = function (head) {
  if (head === null || head.next === null) return head;
  let odd = head;
  let even = head.next;
  let evenHead = even;
  while (even != null && even.next != null) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;
  return head;
};

// Example usage
let inputList = createListFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("Original Linked List:");
printList(inputList);
let result = oddEvenList(inputList);
console.log("Linked List after deleting the middle node:");
printList(result);
