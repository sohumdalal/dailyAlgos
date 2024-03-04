/*
Write a function to delete the first instance of a node in a singly linked list.
The function should return the deleted node, or undefined if the value was not found.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
And given a value, 'b', the linked list after calling your function should look like:

('a' -> 'c' -> 'b' -> 'd')

And the evaluated result would be the removed node with the value of 'b'.

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
  this.tail = null 
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

const linkedListRemove = (ll, val) => {
//we first edge out the possibility of not receiving proper inputs from the user
  if (!val || !ll) {
    return "please enter a value or valid linked list"
  }

//now the head itself is a node, therefore it has a val property. if the val
//is equal the head val, then we have a match, and reassign the pointers below. 
  if (ll.head.val === val) {
    const valRemove = ll.head.val;
    ll.head = ll.head.next;
    return valRemove;
  }

  //now the value is not in the head, so lets traverse the linked list. first 
  //create a var nodeTocheck, and assign it the head.
  let nodeToCheck = ll.head;

  //the nodetocheck has a next property, check the next node's val property. if its a match
  //then we reassign the pointers, and then return out of the function, ensuring only the first instance
  //is removed
  while (nodeToCheck.next) {
    if (nodeToCheck.next.val === val) {
      const valRemove = nodeToCheck.next.val;
      nodeToCheck.next = nodeToCheck.next.next;
      return valRemove;
    }
    //this is our reassignment, ensuring our traversal
    nodeToCheck = nodeToCheck.next;
  }

  //we exited the while loop, meaning we found no values
  return "no value found";
};




/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/

const linkedListRemoveMultiple = (ll, val) => {

}

module.exports = { LinkedList, Node, linkedListRemove, linkedListRemoveMultiple };
