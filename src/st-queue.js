const {NotImplementedError} = require('../extensions/index.js');

let {ListNode} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
    top;
  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    if(!this.top) {
      this.top = new ListNode(value);
      return;
    }
    let currentNode = this.top;
    while(currentNode.next != null) currentNode = currentNode.next;
    currentNode.next = new ListNode(value);
    return this;
  }

  dequeue() {
    const a = this.top.value;
    this.top = this.top.next;
    return a;
  }

}
