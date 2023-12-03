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

function Stack() {
    this.storage = {};
    this.index = 0;
}

Stack.prototype.push = (value) => {
    this.storage[this.index++] = value;
}

Stack.prototype.pop = () => {
    if(index <=0) {
        return "nothing to remove"
    }
    const elToRemove = this.storage[this.index - 1];
    delete this.storage[this.index - 1] 
    return `${elToRemove} was removed from the stack`;
}

function Queue() {

}

module.exports = { Stack, Queue };
