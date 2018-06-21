// User defined class
// to store element and its priority
class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

// PriorityQueue class
class PriorityQueue {
    // An array is used to implement priority
    constructor() {
        this.items = [];
    }

    // functions to be implemented
    // enqueue(item, priority)
    // dequeue()
    // front()
    // isEmpty()
    // printPQueue()

    // enqueue function to add element
    // to the queue as per priority
    static enqueue(element, priority) {
        // creating object from queue element
        var qElement = new QElement(element, priority);
        var contain = false;

        // iterating through the entire
        // item array to add element at the
        // correct location of the Queue
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                // Once the correct location is found it is
                // enqueued
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }

        // if the element have the highest priority
        // it is added at the end of the queue
        if (!contain) {
            this.items.push(qElement);
        }
    }

    // dequeue method to remove
    // element from the queue
    static dequeue() {
        // return the dequeued element
        // and remove it.
        // if the queue is empty
        // returns Underflow
        if (this.isEmpty()) return "Underflow";
        return this.items.shift();
    }

    //This function removes an element from the front of a queue as the highest priority element is stored at the front of the priority queue. We have used shift method of an array to remove an element from the queue.
    // front function
    static front() {
        // returns the highest priority element
        // in the Priority queue without removing it.
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[0];
    }

    //rear() – returns the last element of the Priority queue
    // rear function
    static rear() {
        // returns the lowest priorty
        // element of the queue
        if (this.isEmpty()) return "No elements in Queue";
        return this.items[this.items.length - 1];
    }

    //isEmpty() – Returns true if the Priority queue is empty
    // isEmpty function
    static isEmpty() {
        // return true if the queue is empty.
        return this.items.length == 0;
    }

    // printQueue function
    // prints all the element of the queue
    static printPQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i].element + " ";
        return str;
    }
}
