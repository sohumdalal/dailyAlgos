function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = length;
}

function Node(value) {
    this.value = value;
    this.next = null;
}

LinkedList.prototype.add = function (value) {
    const newNode = new Node(value);
    if (this.head === null) {
        this.head = newNode;
        this.tail = this.head;
    }
    else {
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.tail = newNode;
    }
    this.length++;
}
LinkedList.prototype.delete = function (value) {
    //you want to reassign the pointers of previous node to next node
    if (this.head.value === value) {
        this.head.next = this.head;
    }

    else {
        let current = this.head;
        let previousNode;

        while (current.value !== value) {
            previousNode = current;
            current = current.next;
        }

        previousNode.next = current.next;
    }


    this.length--;

}

LinkedList.prototype.indexOf = function (value) {
    let index = -1;

    let current = this.head;
    while (current) {
        index++;
        if (current.value === value) {
            return index;
        }
        current = current.next;
    }
    return index;

}
LinkedList.prototype.elementAt = function (index) {
    let current = this.head
    let count = 0;
    while (count < index) {
        count++;
        current = current.next;
    }
    return current.value;
}
LinkedList.prototype.reverse = function () {

}
LinkedList.prototype.isEmpty = function () {
    return this.length === 0;
}
LinkedList.prototype.addAt = function (index, value) {
    const newNode = new Node();
    if (index > length) {
        return false;
    }
    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
    }

    let current = this.head;
    let previousNode;
    let currentIndex = 0;

    while (currentIndex < index) {
        currentIndex++;
        previousNode = current;
        current = current.next;
    }

    previousNode.next = newNode;
    newNode.next = currentNode;
    this.length++;

}
LinkedList.prototype.removeAt = function (index) {
    if (index > length) {
        return false;
    }
    if (index === 0) {
        this.head = this.head.next;
    }
    let current = this.head;
    let currentIndex = 0;
    let previousNode;

    while(currentIndex < index) {
        index++
        previousNode = current;
        current = current.next;
    }

    previousNode.next = current.next;
    this.length--;

}