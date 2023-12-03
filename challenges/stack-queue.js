/**
 * 
 * First, create a Stack which contains the following methods:
 * - push: add value to top (end) of stack
 * - pop: remove value from top (end) of stack
 * 
 * Second, create a Queue which consists of two stacks: stack1 and stack2
 * and contains the following methods:
 * - enqueue: add value to queue
 * - dequeue: remove value from queue
 * Queue methods should follow First In, First Out rule.
 * 
 * DO NOT USE NATIVE JS METHODS
 * 
 */

//stacks are objects, that can follow 0=indexed array format
function Stack() {
    this.storage = {};
    this.index = 0;
}

//pushing an element involves adding a property to the storage object
Stack.prototype.push = (value) => {
    this.storage[this.index++] = value;
}

//popping involves removing a property from the storage object
Stack.prototype.pop = () => {
    if (index <= 0) {
        return "nothing to remove"
    }
    const elToRemove = this.storage[this.index - 1];
    delete this.storage[this.index - 1]
    return `${elToRemove} was removed from the stack`;
}

//Queue's can also be thought of as two stacks.
function Queue() {
    this.stackOne = new Stack();
    this.stackTwo = new Stack();
}

Queue.prototype.enqueue = (value) => {
    this.stackOne.storage[this.stackOne.index++] = value;
}

Queue.prototype.dequeue = () => {
    while (this.stackOne) {
        this.stackTwo.push(this.stackOne.pop());
    }
    const itemToDq = this.stackTwo.pop();
    delete this.stackTwo.pop()
    return itemToDq;
}


module.exports = { Stack, Queue };
