interface IDsaQuestions {
  name: string;
  questions: IDsaQuestion[];
}

export interface IDsaQuestion {
  id: string;
  shell?: string,
  statement: string;
  solution: string;
  hint?: string;
  test?: string;
}

export const dsaQuestions: IDsaQuestions[] = [
  {
    name: 'Daily coding problems',
    questions: [
      {
        id: '1',
        statement: `This problem was recently asked by Google.

Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

Bonus: Can you do this in one pass?`,
        solution: `{
    const arr = [10, 15, 3, 7];
    const k = 17;
    let result = false;
    const complement = new Set();
    arr.forEach(item => {
        if (complement.has(k - item)) {
            result = true;
            return;
        }
        complement.add(item)
    })
    console.log(result);
}`,
      },
      {
        id: '2',
        statement: `This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

Follow-up: what if you can't use division?`,
        solution: `{
    const arr = [1, 2, 3, 4, 5];
    const result = [];
    let left = 1;
    for (let i = 0; i < arr.length; i++) {
        result.push(left);
        left *= arr[i];
    }
    let right = 1;
    for (let j = arr.length - 1; j > -1; j--) {
        result[j] *= right;
        right *= arr[j];
    }
    console.log(result);
}`,
      },
      {
        id: '3',
        statement: `This problem was asked by Stripe.

Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
You can modify the input array in-place.`,
        solution: `{

  function firstMissingPositive(nums: number[]) {
    const n = nums.length;

    // Move all positive integers to the beginning of the array
    let j = 0;
    for (let i = 0; i < n; ++i) {
      if (nums[i] > 0) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j++;
      }
    }

    // Mark the presence of positive integers by flipping the sign of the corresponding index
    for (let i = 0; i < j; i++) {
      const index = Math.abs(nums[i]) - 1;
      if (index < j) {
        nums[index] = -Math.abs(nums[index]);
      }
    }

    // Find the first positive index whose value is not negative
    for (let i = 0; i < j; i++) {
      if (nums[i] > 0) {
        return i + 1;
      }
    }

    return j + 1;
  }

  // Test cases
  console.log(firstMissingPositive([3, 4, -1, 1])); // Output: 2
  console.log(firstMissingPositive([1, 2, 0]));      // Output: 3
  console.log(firstMissingPositive([5, 6, 8]));      // Output: 1
}`,
      },
      {
        id: '4',
        statement: `This problem was asked by Jane Street.

cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
Given this implementation of cons:
def cons(a, b):
    def pair(f):
        return f(a, b)
    return pair
Implement car and cdr.`,
        solution: `{
    const cons = (a: unknown, b: unknown) => {
        return [a, b];
    }
    const car = (pair: unknown[]) => {
        return pair[0];
    }
    const cdr = (pair: unknown[]) => {
        return pair[1];
    }

    console.log(car(cons('first', 'second')));
    console.log(cdr(cons('first', 'second')));

}`,
      },
      {
        id: '5',
        statement: `This problem was asked by Facebook.

Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.
For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.
You can assume that the messages are decodable. For example, '001' is not allowed.`,
        solution: `{
        function numDecodings(message: string) {
    // Handle empty or invalid messages
    if (!message || message[0] === "0") {
        return 0;
    }

    const n = message.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Empty string has 1 way to decode

    // Fill dp table based on DP relation
    for (let i = 1; i <= n; i++) {
        const currentDigit = parseInt(message[i - 1]);
        const prevDigit = parseInt(message[i - 2] || '0');

        // Single digit decoding
        if (currentDigit >= 1 && currentDigit <= 9) {
            dp[i] = dp[i - 1];
        }

        // Double digit decoding (handle leading zero)
        if (prevDigit >= 1 && prevDigit <= 2 && currentDigit <= 6) {
            dp[i] += dp[i - 2];
        }
    }

    return dp[n]; // Number of decodings for entire message
}

// Example usage
const message1 = "111";
const message2 = "001";
const message3 = "12";
const message4 = "1111";

console.log(numDecodings(message1)); // Output: 3 aaa,ak,ka
console.log(numDecodings(message2)); // Output: 0 (invalid message)
console.log(numDecodings(message3)); // Output: 2
console.log(numDecodings(message4)); // Output: 5 aaaa,aak,aka,kaa,kk
}`,
      },
    ],
  },
  {
    name: 'Linked list',
    questions: [
      {
        id: 'Push',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

/// WRITE PUSH METHOD HERE ///

}`,
        statement: `Implement the push method for the LinkedList class.
Your push method should take an integer as an input, create a new Node object with that input as its value, and add it to the end of the linked list.

Your push method should perform the following tasks:
Accept an integer value as an argument.
Create a new Node object newNode with the given value.
If the list is empty (head is null), set both the head and tail pointers of the list to the newNode.
If the list is not empty, set the next attribute of the current tail node to point to the newNode, then update the tail pointer to point to newNode.
Increase the length attribute by one.`,
        solution: `push(value) {
    const newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
        this.tail = this.head;
    } else {
        this.tail.next = newNode;
        this.tail = newNode;
    }
    this.length++;
    return this;
}`,
      },
      {
        id: 'Pop',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
	/// WRITE POP METHOD HERE ///


}`,
        statement: `Implement the pop method for the LinkedList class in JavaScript.
Your pop method should not accept any inputs.

The pop method should perform the following tasks:
If the list is empty (i.e., the length attribute is 0), return undefined.
Traverse the list to find the second last node. Use two pointers temp and pre to keep track of the current node and the previous node while traversing.
Set the tail attribute of the list to the second last node (i.e., the pre pointer).
Set the next attribute of the new tail node to null, effectively removing the last node from the list.
Decrease the length attribute by one.
If the list becomes empty after the pop operation (i.e., the length attribute becomes 0), set both head and tail pointers to null.
Return the removed node`,
        solution: `pop() {
    let lastNode = this.head;
    if (this.head) {
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let node = this.head;
            while (node.next.next !== null) {
                node = node.next;
            }
            lastNode = node.next;
            node.next = null;
            this.tail = node;
        }
        this.length--;
    }
    return lastNode;
}`,
      },
      {
        id: 'Unshift',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
	/// WRITE UNSHIFT METHOD HERE ///


}`,
        statement: `Implement the unshift method for the LinkedList class in JavaScript.
Your unshift method should take an integer as an input, create a new Node object with that input as its value, and add it to the beginning of the linked list.

The unshift method should perform the following tasks:
Accept an integer value as an argument.
Create a new Node object newNode with the given value.
If the list is empty (head is null), set both the head and tail pointers of the list to the newNode.
If the list is not empty, set the next attribute of newNode to the current head node, then update the head pointer to point to newNode.
Increase the length attribute by one.`,
        solution: `unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
    this.length++;
    return this;
}`,
      },
      {
        id: 'Shift',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
 
	/// WRITE SHIFT METHOD HERE ///

}`,
        statement: `Implement the shift method for the LinkedList class in JavaScript.
Your shift method should not accept any inputs.

The shift method should perform the following tasks:
If the list is empty (head is null), return null.
Store the current head node in a temporary variable temp.
Update the head pointer to the second node in the list (the next node of the current head).
Decrease the length attribute by one.
If the list becomes empty after the shift operation (i.e., the length attribute becomes 0), set the tail pointer to null.
Set the next attribute of the removed node (temp) to null.
Return the removed node.`,
        solution: `shift() {
    if (!this.head) {
        return this.head
    }
    let firstNode = this.head;
    if (this.length === 1) {
        this.head = null;
        this.tail = null;
    } else {
        this.head = this.head.next;
    }
    firstNode.next = null;
    this.length--;
    return firstNode;
}`,
      },
      {
        id: 'Get',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
 
    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }
 
	/// WRITE GET METHOD HERE ///

}`,
        statement: `Implement the get method for the LinkedList class in JavaScript.
Your get method should accept an index (an integer) as its input.

The get method should perform the following tasks:
If the index is less than 0 or greater than or equal to the length attribute of the list, return undefined.
Initialize a temporary variable temp to the head node.
Loop through the list index number of times, each time moving the temp variable to the next node.
Return the node at which temp is pointing after the loop ends.`,
        solution: `get(index) {
    if (index < 0 || index >= this.length) {
        return undefined
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
        node = node.next;
    }
    return node;
}`,
      },
      {
        id: 'Set',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
 
    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }
 
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
 
	/// WRITE SET METHOD HERE ///
  
      }`,
        statement: `Implement the set method for the LinkedList class in JavaScript.
Your set method should accept two arguments: an index (an integer) and a value.

The set method should perform the following tasks:
Use the get method to get the node at the given index. If the get method returns null (which means the index is invalid), the set method should also return false.
If the get method returns a valid node, set the value of the node to the new value.
Return true if the value has been successfully set.`,
        solution: `set(index, value) {
    const node = this.get(index);
    if (node) {
        node.value = value;
        return true;
    }
    return false;
}`,
      },
      {
        id: 'Insert',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return true;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return true;
    }
 
    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }
 
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
 
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
 
	/// WRITE INSERT METHOD HERE ///
  
      }`,
        statement: `Implement the insert method for the LinkedList class in JavaScript.
Your insert method should accept two arguments: an index (an integer) and a value.

The insert method should perform the following tasks:
If the index is less than zero or greater than the length of the list, return false (indicating the index is invalid).
If the index is equal to the length of the list, add the new node to the end of the list using the push method.
If the index is 0, add the new node to the start of the list using the unshift method.

Otherwise, create a new node and place it at the correct index in the list. Update any references to ensure the list remains correctly linked.
Increment the length of the list by one.
Return true to indicate the node was successfully inserted.`,
        solution: `insert(index, value) {
    if (index === 0) {
        return this.unshift(value);
    }
    if (index === this.length) {
        return this.push(value);
    }
    if(index<0||index>this.length) return false
    const newNode = new Node(value);
    const node = this.get(index - 1);
    if (node) {
        newNode.next = node.next;
        node.next = newNode;
        this.length++;
    }
    return true;
}`,
      },
      {
        id: 'Remove',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
 
    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }
 
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
 
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
 
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
 
	/// WRITE REMOVE METHOD HERE ///
  
  }`,
        statement: `Implement the remove method for the LinkedList class in JavaScript.
Your remove method should accept one argument: an index (an integer).

The remove method should perform the following tasks:
If the index is less than zero or greater or equal to the length of the list, return null (indicating the index is invalid).
If the index is equal to 0, remove the first node from the list using the shift method.
If the index is equal to the length of the list minus 1, remove the last node from the list using the pop method.
Otherwise, find the node at the given index and remove it from the list. Update any references to ensure the list remains correctly linked.
Decrement the length of the list by one.
Return the removed node.`,
        solution: `remove(index) {
    if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        if (!this.head) {
            return this.head;
        }
        if (index < 0 || index >= this.length) return undefined
        const node = this.get(index - 1);
        const removedNode = node.next;
        node.next = removedNode.next;
    removedNode.next=null;
    this.length--
    return removedNode;
}`,
      },
      {
        id: 'Reverse',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
 
    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }
 
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
 
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
 
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
 
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const before = this.get(index - 1);
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

	/// WRITE REVERSE METHOD HERE ///
  
  }`,
        statement: `Write method to reverse a LinkedList in place (no other LinkedList methods can be used within this method).
Your reverse method should not accept any arguments.

The reverse method should perform the following tasks:
Swap the head and tail pointers.
Iterate through the list, and for each node, set its next pointer to its previous node.
To correctly iterate through the list, you should keep a reference to the next node before changing the next pointer.
After you have iterated through all the nodes and reversed their next pointers, your reverse method is done.`,
        solution: `reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
    }
    return this;
}`,
      },
      {
        id: 'Find Middle Node',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
 
    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }
 
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
 
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
 
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
 
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const before = this.get(index - 1);
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

	/// WRITE FIND MIDDLE NODE METHOD HERE ///
  
  }`,
        statement: `Implement a member function called findMiddleNode() that finds and returns the middle node of the linked list.
Note: this LinkedList implementation does not have a length member variable.

Output:
Return the middle node of the linked list.
If the list has an even number of nodes, return the second middle node (the one closer to the end).

Constraints:
You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
You can only traverse the linked list once.

Example 1:
Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

After calling the findMiddleNode() function:
let middle = list.findMiddleNode();
The middle node should have the value 3.

Example 2:
Now suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the findMiddleNode() function:
let middle = list.findMiddleNode();
The middle node should have the value 4.`,
        solution: `findMiddleNode(){
    if(!this.head) return null;
    if(!this.head.next) return this.head;
    if(!this.head.next.next) return this.head.next;
    let pointer1=this.head;
    let pointer2=this.head.next;
    while(pointer2.next && pointer2.next.next){
        pointer1=pointer1.next;
        pointer2=pointer2.next.next;
    }
    return pointer1.next;
}`,
      },
      {
        id: 'Has Loop',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
 
    shift() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }
 
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
 
    set(index, value) {
        let temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }
 
    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === this.length) return this.push(value);
        if (index === 0) return this.unshift(value);
        
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode;
        this.length++;
        return true;
    }
 
    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const before = this.get(index - 1);
        const temp = before.next;

        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

	/// WRITE HAS LOOP METHOD HERE ///
  
  }`,
        statement: `Write a method called hasLoop that is part of the linked list class.
The method should be able to detect if there is a cycle or loop present in the linked list.
You are required to use Floyd's cycle-finding algorithm (also known as the "tortoise and the hare" algorithm) to detect the loop.
This algorithm uses two pointers: a slow pointer and a fast pointer. The slow pointer moves one step at a time, while the fast pointer moves two steps at a time. If there is a loop in the linked list, the two pointers will eventually meet at some point. If there is no loop, the fast pointer will reach the end of the list.

The method should follow these guidelines:
Create two pointers, slow and fast, both initially pointing to the head of the linked list.
Traverse the list with the slow pointer moving one step at a time, while the fast pointer moves two steps at a time.
If there is a loop in the list, the fast pointer will eventually meet the slow pointer. If this occurs, the method should return true.
If the fast pointer reaches the end of the list or encounters a null value, it means there is no loop in the list. In this case, the method should return false.

Output:
Return true if the linked list has a loop.
Return false if the linked list does not have a loop.

Constraints:
You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
You can only traverse the linked list once.
`,
        solution: `hasLoop(){
    if(!this.head) return false;
    if(!this.head.next) return false;
    let pointer1=this.head;
    let pointer2=this.head.next;
    while(pointer2.next && pointer2.next.next){
        if(pointer1===pointer2) return true;
        pointer1=pointer1.next;
        pointer2=pointer2.next.next;
    }
    return false;
}`,
      },
      {
        id: 'Find Kth Node From End',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
    
    // WRITE THE FINDKTFROMEND METHOD HERE // 
    
}`,
        statement: `Implement a member function called findKthFromEnd(k) that finds and returns the kth node from the end of the linked list.
Note: this LinkedList implementation does not have a length member variable.

Output:
Return the kth node from the end of the linked list.
If the value of k is greater than or equal to the number of nodes in the list, return null.

Constraints:
You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
You can only traverse the linked list once.

Example 1:
Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

After calling the findKthFromEnd(2) function:
let kthNode = list.findKthFromEnd(2);
The kthNode should have the value 4.

Example 2:
Now suppose you have a LinkedList object, list, with the following values: 1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the findKthFromEnd(4) function:
let kthNode = list.findKthFromEnd(4);
The kthNode should have the value 3.`,
        solution: `findKthFromEnd(k){
    if (!this.head || k<=0) return null;
    if(!this.head.next) {
        if(k===1){
            return this.head;
        }
        return null;
    }
    let pointer1=this.head;
    let pointer2=this.head;
    for (let i=0; i<(k-1);i++){
        if(pointer2.next){
            pointer2=pointer2.next;
        }else{
            return null;
        }
    }
    while(pointer2.next){
        pointer1=pointer1.next;
        pointer2=pointer2.next;
    }
    return pointer1;
}`,
      },
      {
        id: 'Partition List',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}

  // WRITE THE Partition List METHOD HERE //

}`,
        statement: `Implement a member function called partitionList(x) that partitions the linked list such that all nodes with values less than x come before nodes with values greater than or equal to x. 
Note: this linked list class does not have a tail which will make this method easier to implement.
The original relative order of the nodes should be preserved.

Input:
An integer x, the partition value.

Output:
The function should modify the linked list in-place, such that all nodes with values less than x come before nodes with values greater than or equal to x. 

Constraints:
You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
You can only traverse the linked list once.
You can create temporary nodes to make the implementation simpler.

Example 1:
Input:
Linked List: 3 -> 8 -> 5 -> 10 -> 2 -> 1 x: 5
Process:
Values less than 5: 3, 2, 1
Values greater than or equal to 5: 8, 5, 10

Output:
Linked List: 3 -> 2 -> 1 -> 8 -> 5 -> 10

Example 2:
Input:
Linked List: 1 -> 4 -> 3 -> 2 -> 5 -> 2 x: 3
Process:
Values less than 3: 1, 2, 2
Values greater than or equal to 3: 4, 3, 5

Output:
Linked List: 1 -> 2 -> 2 -> 4 -> 3 -> 5

Tips:
While traversing the linked list, maintain two separate chains: one for values less than x and one for values greater than or equal to x.
Use dummy nodes to simplify the handling of the heads of these chains.
After processing the entire list, connect the two chains to get the desired arrangement.

Note:
The solution must maintain the relative order of nodes. For instance, in the first example, even though 8 appears before 5 in the original list, the partitioned list must still have 8 before 5 as their relative order remains unchanged.

Note:
You must solve the problem WITHOUT MODIFYING THE VALUES in the list's nodes (i.e., only the nodes' next pointers may be changed.)
`,
        solution: `partitionList(x){
    if(!this.head) return null;
    if(!this.head.next) return this;
    let dummy1=new Node(0);
    let dummy2=new Node(0);
    let node=this.head;
    let lesser=dummy1;
    let greater=dummy2;
    while(node){
        if(node.value<x){
            lesser.next=node;
            lesser=lesser.next;
        }else{
            greater.next=node;
            greater=greater.next;
        }
        node=node.next;
    }
    greater.next=null;
    lesser.next=dummy2.next;
    this.head=dummy1.next;
    return this;
}`,
      },
      {
        id: 'Remove Duplicates',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
	// WRITE THE REMOVEDUPLICATES METHOD HERE //
  
  }`,
        statement: `Implement a member function called removeDuplicates() that removes all duplicate nodes from the linked list based on their values.
Note: this linked list class does NOT have a tail which will make this method easier to implement.

Output:
The function should modify the linked list in-place, removing all nodes with duplicate values.

Constraints:
You are allowed to use the JavaScript Set data structure to keep track of unique node values.

Example 1:
Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 2 -> 1 -> 4

After calling the removeDuplicates() function:
list.removeDuplicates();
The linked list should now have the following values: 1 -> 2 -> 3 -> 4

Example 2:
Now suppose you have a LinkedList object, list, with the following values:
3 -> 3 -> 3

After calling the removeDuplicates() function:
list.removeDuplicates();
The linked list should now have the following value: 3
Remember to update the length.`,
        solution: `removeDuplicates(){
    if(!this.head || !this.head.next) return this.head;
    let uniqueValues=new Set();
    let node = this.head;
    uniqueValues.add(node.value);
    let nextNode;
    while(node.next!==null){
        nextNode=node.next;
        if(uniqueValues.has(nextNode.value)){
            node.next=nextNode.next;
            this.length-=1;
        }else{
            node=node.next;
            uniqueValues.add(node.value);
        }
    }
}`,
      },
      {
        id: 'Binary to Decimal',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
	// WRITE THE BINARYTODECIMAL METHOD HERE //
  
  }`,
        statement: `Objective:
You have a linked list where each node represents a binary digit (0 or 1). The goal of the binaryToDecimal function is to convert this binary number, represented by the linked list, into its decimal equivalent.

How Binary to Decimal Conversion Works:
In binary-to-decimal conversion, each position of a binary number corresponds to a specific power of 2, starting from the rightmost digit.
The rightmost digit is multiplied by 2^0 (which equals 1).
The next digit to the left is multiplied by 2^1 (which equals 2).
The digit after that is multiplied by 2^2 (which equals 4). ... and so on.

To find the decimal representation:
Multiply each binary digit by its corresponding power of 2 value.
Sum up all these products.

Example Execution with Binary 101:
Start with num = 0.
Process 1 (from the head of the linked list): num = 0 * 2 + 1 = 1
Process 0: num = 1 * 2 + 0 = 2
Process 1: num = 2 * 2 + 1 = 5
Return num, which is 5.

Steps Involved in the Function:
A variable num is initialized to 0, which will store our computed decimal number.
Starting from the head of the linked list (the leftmost binary digit), iterate through each node until the end.
For every node, double the current value of num (this is analogous to shifting in binary representation). Then, add the binary digit of the current node.
Move to the next node and repeat until you've visited all nodes.
Return the value in num, which now represents the decimal value of the binary number in the linked list.`,
        solution: `binaryToDecimal(){
    if (!this.head) return 0;
    let node=this.head;
    let i=this.length-1;
    let num=0;
    while(node !== null){
        num = num + (Math.pow(2,i)*(node.value));
        node=node.next;
        i--;
    }
    return num;
}`,
      },
      {
        id: 'Reverse Between',
        shell: `class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        let output = "";
        if (temp === null) {
            console.log("empty");
            return;
        }
        while (temp !== null) {
            output += String(temp.value);
            temp = temp.next;
            if (temp !== null) {
                output += " -> ";
            }
        }
        console.log(output);
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.length = 0;
    }
 
	push(value) {
		const newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			let current = this.head;
			while (current.next !== null) {
				current = current.next;
			}
			current.next = newNode;
		}
		this.length++;
	}
	
	// WRITE THE REVERSEBETWEEN METHOD HERE // 
  
}`,
        statement: `Implement a member function called reverseBetween(m, n) that reverses the nodes between indexes (using 0-based indexing)  m and n (inclusive) in the linked list.
Note: this linked list class does NOT have a tail which will make this method easier to implement.
Assumption: You can assume that m and n are not out of bounds.

Output:
The function should reverse the nodes between the indexes m and n in the linked list. The reversal should be done in-place.

Constraints:
You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.
You can only traverse the linked list once.

Example 1:
Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5

After calling the reverseBetween(1, 3) function:
list.reverseBetween(1, 3);
The linked list should now have the following values:
1 -> 4 -> 3 -> 2 -> 5

Example 2:
Now suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5 -> 6

After calling the reverseBetween(3, 5) function:
list.reverseBetween(3, 5);
The linked list should now have the following values:
1 -> 2 -> 3 -> 6 -> 5 -> 4`,
        solution: `reverseBetween(m,n){
    if (!this.head || !this.head.next) return;
    let mNode = this.head;
    let prevNode = null;
    for (let i = 0; i < m; ++i) {
        prevNode = mNode;
        mNode = mNode.next;
    }
    let node = mNode;
    let prev = null;
    let next;
    for (let i = 0; i <= n-m; ++i) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    mNode.next = node;
    if (m === 0) {
        this.head = prev;
    } else {
        prevNode.next = prev;
    }
}`,
      },
    ],
  },
  {
    name: 'Doubly linked list',
    questions: [
      {
        id: 'Push',
        shell:`class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
	/// WRITE PUSH METHOD HERE ///
  
      }`,
        statement: `Implement the push method for the DoublyLinkedList class.

Your push method should accept the following argument:
value (any data type): the value to add to the end of the list.

The push method should perform the following tasks:
Create a new node with the given value.
Check if there is any node in the list:
If there are no nodes, set the head and tail to be the new node.
If there is at least one node, set the next property on the tail to be the new node, set the prev property on the new node to be the tail, and update the tail to be the new node.
Increment the length of the list by 1.
Return the list (this step is optional).`,
        solution: `push(value) {
    const newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
    this.length++;
    return this;
}`,
      },
      {
        id: 'Pop',
        shell:`class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value){
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

	/// WRITE POP METHOD HERE ///
  
}`,
        statement: `Implement the pop method for the DoublyLinkedList class.

The pop method should not accept any arguments. It should perform the following tasks:
Check if there is any node in the list. If there are no nodes, the function should return undefined.
Create a temporary variable and set it to the current tail node.
Check if there is more than one node in the list:
If there is only one node, set the head and tail to null.
If there is more than one node, update the tail to be the previous node and set the new tail's next to null.
Disconnect the previous tail from the list by setting its prev property to null.
Decrease the length of the list by 1.
Return the value of the removed node.`,
        solution: `pop() {
    if (!this.head)
        return undefined;
    const removed = this.tail;
    this.tail = this.tail.prev;
    if (!this.head.next) {
        this.head = this.tail;
    } else {
        this.tail.next = null;
        removed.prev = null;
    }
    this.length--;
    return removed;
}`,
      },
    ],
  },
] as const;
