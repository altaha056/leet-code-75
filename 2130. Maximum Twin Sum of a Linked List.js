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

var pairSum = function (head) {
  let ans = 0;
  let arr = [];
  while (head != null) {
    arr.push(head.val);
    head = head.next;
  }

  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    ans = Math.max(ans, arr[i] + arr[j]);
    i++;
    j--;
  }
  return ans;
};

// Example usage
let inputList = createListFromArray([
  7, 57, 13, 31, 17, 65, 32, 3, 97, 22, 7, 20, 69, 35, 69, 75, 13, 33, 50, 80,
  64, 71, 15, 28, 2, 27, 39, 48, 13, 22, 84, 5, 51, 46, 26, 78, 56, 63,
]);
console.log("Original Linked List:");
printList(inputList);
let result = pairSum(inputList);
console.log(result);
