// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.a = new Stack();
    this.b = new Stack();
  }
  add(item) {
    this.a.push(item);
  }
  remove() {
    let n = null;
    while (this.a.peek()) {
      this.b.push(this.a.pop());
    }
    n = this.b.pop();
    while (this.b.peek()) {
      this.a.push(this.b.pop());
    }
    return n;
  }
  peek() {
    let n = null;
    while (this.a.peek()) {
      this.b.push(this.a.pop());
    }
    n = this.b.peek();
    while (this.b.peek()) {
      this.a.push(this.b.pop());
    }
    return n;
  }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
q.add(4);
q.add(5);
q.add(6);
q.peek(); // returns 1
console.log(q.remove()); // returns 1
console.log(q.remove()); // returns 2
console.log(q.remove()); // returns 3
console.log(q.remove()); // returns 4
console.log(q.remove()); // returns 5
console.log(q.remove()); // returns 6

module.exports = Queue;
