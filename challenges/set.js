function MySet() {
    this.collection = [];
}

//define has function
//define values function
//define add function
//define remove function
//defiune size function
//define union function
//define intersection function
//define difference function
//define subset function

MySet.prototype.has = function (val) {
    return (this.collection.indexOf(val) !== -1)
}

MySet.prototype.values = function () {
    return this.collection;
}

MySet.prototype.add = function (val) {
    if(!this.has(val)) {
        this.collection.push(val);
    }
}

MySet.prototype.remove = function (val) {
    if (this.has(val)) {
        index = collection.indexOf(val);
        this.collection.splice(index, 1);
        return true;
    }
    return "The collection does not have value -- therefore nothing to delete"
}

MySet.prototype.size = function () {
    return this.collection.length;
}

MySet.prototype.union = function (otherSet) {
    const unionSet = new Set();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((val) => {
        unionSet.add(val);
    });
    secondSet.forEach((val) => {
        unionSet.add(val);
    })
    return unionSet;
}

MySet.prototype.intersection = function (otherSet) {
    const intersectionSet = new Set();
    const firstSet = this.values();
    firstSet.forEach((val) => {
        if(otherSet.has(val)) {
            intersectionSet.add(val);
        }
    });
    return intersectionSet;
}

MySet.prototype.difference = function (otherSet) {
    const diffSet = new Set();
    const firstSet = this.values();
    firstSet.forEach((val) => {
        if(!otherSet.has(val)) {
            diffSet.add(val);
        }
    });
    return diffSet;
}

MySet.prototype.subset = function (otherSet) {
    const firstSet = this.values();
    return firstSet.every((val) => {
        return otherSet.has(val);
    })
}

const setA = new MySet();
const setB = new MySet();


setA.add(3);
setA.add(4);

setB.add(3);
setB.add(4);
setB.add(5);
setB.add(6);

console.log(setA.subset(setB));
