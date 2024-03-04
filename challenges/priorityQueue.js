function Queue() {
    this.collection = [];
}

Queue.prototype.enqueue = function (val) {
    this.collection.push(val);
}

Queue.prototype.dequeue = function () {
    return this.collection.shift();
}

Queue.prototype.front = function () {
    return this.collection[0];
}

Queue.prototype.size = function () {
    return this.collection.length;
}

Queue.prototype.isEmpty = function () {
    return (this.collection.length === 0);
}

const pQueue = new Queue();
pQueue.enqueue = function (name) {
    // name = [name, priority];
    if (pQueue.isEmpty()) {
        pQueue.collection.push(name);
    }
    else {
        let added = false;
        for (let i = 0; i < pQueue.collection.length; i++) {
            if (name[1] < pQueue.collection[i][1]) {
                pQueue.collection.splice(i, 0, name);
                added = true;
                break;
            }
        }
        if (!added) {
            pQueue.collection.push(name);
        }
    }
}

pQueue.enqueue(["Sohum", 1])
pQueue.enqueue(["Ridhi", 2])
pQueue.enqueue(["Chris", 4])
pQueue.enqueue(["Molly", 3])
pQueue.enqueue(["Molly", 2])
console.log(pQueue.collection);