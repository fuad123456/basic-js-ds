const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
class Queue {
	constructor() {
		this.myList = null;
	}
  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	return this.myList
  }

  enqueue(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	 if(!this.myList){
		this.myList = new ListNode(value);
	 } else {
		let node = this.myList;
		while(node.next){
			node = node.next;
		}
		node.next = new ListNode(value);
	 }
	}
  dequeue() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
	if(!this.myList){
		return null;
	} else {
		let node = this.myList;
		this.myList = node.next;
		return node.value;
	}
  }
}

module.exports = {
  Queue
};
