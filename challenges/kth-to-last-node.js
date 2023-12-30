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
//my first thought was to brute force the whole thing, so thats what I did
function kthToLastNode(k, head) {
  let totalCount = 0;
  //I first wrote a quick helper to grab the length of the list itself
  function getLength() {
    let curr = head;
    while (curr) {
      totalCount++;
      curr = curr.next;
    }
  }
  getLength();

  //I use to vars to first get the target distance to traverse, and another to keep track of where we are in the iterations
  const trav = totalCount - k;
  let travCount = 0;
  let curr = head;

  while (curr) {
    //once we reach our target node, we return the value
    if(travCount === trav) {
      return curr.value;
    }
    //if we don't, then move toward the target, 
    travCount++;
    curr = curr.next;
  }

  return "Target not found in the list"



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