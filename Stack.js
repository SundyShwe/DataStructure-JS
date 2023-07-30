class Stack {
  // Array is used to implement stack
  constructor() {
    this.items = [];
  }

  // Stack operations
  // push(item)
  push(item) {
    this.items.push(item);
  }

  // pop()
  pop() {
    return this.items.length > 0 ? this.items.pop() : "Stack Underflow";
  }

  // peek()
  peek() {
    return this.items.length > 0
      ? this.items[this.items.length - 1]
      : "Empty Stack";
  }
  // isEmpty()
  isEmpty() {
    return this.items.length > 0;
  }
  // size()
  size() {
    return this.items.length;
  }

  // toString()
  toString() {
    return this.items.join(",");
  }
}

var stack = new Stack();

// returns false
console.log(stack.isEmpty());

// returns Underflow
console.log(stack.pop());

stack.push("a");
stack.push("b");
stack.push("c");

console.log(stack.peek(), stack.size());
stack.pop();
console.log(stack.peek(), stack.size());
