/*
  * Below, you are provided the construtors for a doubly linked list as well as a constructor for the nodes it's composed of
  * Construct a doubly linked list & modify it's prototype to contain methods named 'add' and 'remove'
  * The 'add' method should add an additional node to the end of the doubly linked list
  * The 'remove' method should remove the first instance of a node containing a specific value from the doubly linked list
  
  Example doubly linked list
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> null

  Example after using 'add' method to add 6
  null <-> 4 <-> 9 <-> 2 <-> 1 <-> 6 <-> null

  Example after using 'remove' method to remove 2
  null <-> 4 <-> 9 <-> 1 <-> 6 <-> null

  NOTE: must use non-arrow functions for object constructors and prototype methods
  @see: https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/
*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
This method should add a node to the end of the doubly linked list
 */
DoublyLinkedList.prototype.add = function (val) {

  //the first thing you want to do is always add the node
  const newNode = new ListNode(val);

  //check if the head is null, if it is, then it doesnt have a tail, so the node is both
  if(this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  }
  //ok so the head is not null, and also the tail isnt either
  //to the tails next is now the new node, and the nodes prev prop is the old tail
  //then we reasssign the tail to the newNode
  //keep in mind WHEN to reassign the tail, because you want to keep things in memory
  else {
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }
  
};

/*
This method should remove the first instance of a node with the inputted value from the doubly linked list
 */
DoublyLinkedList.prototype.remove = function (val) {

if(this.head.val === val) {
  this.head = this.head.next;
  this.head.prev = null;
  return;
}

if(this.tail.val === val) {
  this.tail = this.tail.prev;
  this.tail.next = null;
  return;
}

let nodeToCheck = this.head;

while(nodeToCheck.next !== null) {
  if(nodeToCheck.next.val === val) {
    valToRemove = nodeToCheck.next;
    nodeToCheck.next = nodeToCheck.next.next;
    nodeToCheck.next.prev = valToRemove.prev;
    return;
  }
  nodeToCheck = nodeToCheck.next;
}


};

module.exports = { DoublyLinkedList };