class Queue {
  // Array is used to implement queue
  constructor() {
    this.items = [];
  }

  // Queue operations
  // enqueue(item)
  enqueue(item) {
    this.items.push(item);
  }
  // dequeue()
  dequeue() {
    return this.items.length > 0 ? this.items.shift() : "Underflow";
  }
  // front()
  front() {
    return this.items.length > 0 ? this.items[0] : "Empty Queue";
  }
  // isEmpty()
  isEmpty() {
    return this.items.length > 0;
  }
  // size()
  size() {
    return this.items.length;
  }
  toString() {
    return this.items.join(",");
  }
}

var queue = new Queue();

// returns false
console.log(queue.isEmpty());

// returns Underflow
console.log(queue.front());

queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

console.log(queue.front(), queue.size());
queue.dequeue();
console.log(queue.front(), queue.toString());
