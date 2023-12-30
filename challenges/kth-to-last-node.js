/**
 * Writa function that takes two parameters (an integer, and the head oa
 * singly linked list) and returns the VALUE on the kth to last node in the list.
 *
 consa = new Node('A');
 const b = new Node('B');
 const c = new Node('C');
 const d = new Node('D');
 const e = new Node('E');
 *
 a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2a); -> returns 'D' (the value on the second to last node)
 * 
 * Additional Information:
 *  - invalid inputs should return undefined
 *  - should find the last node by passing in 1
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let totalCount = 0;
  function getLength() {
    let curr = head;
    while (curr) {
      totalCount++;
      curr = curr.next;
    }
  }
  getLength();

  const trav = totalCount - k;
  let travCount = 0;
  let curr = head;

  while (curr) {
    if(travCount === trav) {
      return curr.value;
    }
    travCount++;
    curr = curr.next;
  }



}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(2, a));


//Do not delete! 
module.exports = { Node, kthToLastNode };