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

var reverseBetween = function (head, left, right) {
  if (!head || left === right) return head;
  const dummy = new ListNode(0);
  dummy.next = head;
  let prev = dummy;
  for (let i = 0; i < left - 1; ++i) {
    prev = prev.next;
  }
  let current = prev.next;
  for (let i = 0; i < right - left; ++i) {
    const nextNode = current.next;
    current.next = nextNode.next;
    nextNode.next = prev.next;
    prev.next = nextNode;
  }
  return dummy.next;
};

// Example usage
let inputList = createListFromArray([1, 2, 3, 4, 5, 6, 7]);
// printList(inputList);
let result = reverseBetween(inputList, 2, 4);
printList(result);
