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
    if (this.length === 0) {
        return "nothing to remove, empty stack"
    }

    const elementToRemove = this.stack[this.length - 1];
    delete this.stack[this.length - 1];
    this.length--;
    return elementToRemove;
}

Stack.prototype.peek = function () {
    return this.stack[this.length - 1];
}

Stack.prototype.size = function () {
    return this.length;
}

//Queue's can also be thought of as two stacks.
function Queue() {
    this.stack1 = new Stack ();
    this.stack2 = new Stack ();
}

//enqueue serves the same way as a push would, which we defined earlier
Queue.prototype.enqueue = function (value) {
    this.stack1.push(value);
}

//dequeue is interesting, you first need to check if both stacks are empty, if so, then undefined because nothing to dequeue 
Queue.prototype.dequeue = function () {
    if (!this.stack1.length && !this.stack2.length) {
        return undefined;
    }
    //now, while stack1 has length, add all of its elements to stack2
    while (this.stack1.length > 0) {
        const stack2add = this.stack1.pop();
        this.stack2.push(stack2add);
    }
    //and pop off as usual. on every subsequent dequeue call, js will skip everything and go to line 63, because stack1 is now empty.
    return this.stack2.pop();
}


/*
    Algo reflection: need to refactor so we can handle the case in which we do NOT consecutively enqueue or dequeue.
    For the most part, this was a fun one to get back into thes mode of making constructors and prototypes.
    its so important to nail these fundamentals, and I loved this problem for that reason.
*/

module.exports = { Stack, Queue };
