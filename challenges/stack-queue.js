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

const { off } = require("process");

//stacks are objects, that can follow 0=indexed array format
function Stack() {
    this.stack = {};
    this.length = 0;
}

//pushing an element involves adding a property to the storage object
Stack.prototype.push = function (value) {
    this.stack[this.length] = value;
    this.length++;
}

//popping involves removing a property from the storage object
Stack.prototype.pop = function () {
    if (this.length <= 0) {
        return "nothing to remove"
    }
    const elToRemove = this.stack[this.length - 1];
    delete this.stack[this.length - 1]
    this.length--
    return elToRemove;
}

//Queue's can also be thought of as two stacks.
function Queue() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
}

Queue.prototype.enqueue = function (value) {
    this.stack1.push(value);
}

Queue.prototype.dequeue = function () {
    if (!this.stack1.length && !this.stack2.length) {
        return undefined;
    }
    while (this.stack1.length > 0) {
        const stack2add = this.stack1.pop();
        this.stack2.push(stack2add);
    }

    return this.stack2.pop();
}

// const myQueue = new Queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());

module.exports = { Stack, Queue };
