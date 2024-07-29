import{Ca as r,M as t}from"./chunk-MPMPWTO5.js";var n=[{name:"Linked list",questions:[{id:"Push",statement:`
        Implement the push method for the LinkedList class.

<br/>Your push method should take an integer as an input, create a new Node object with that input as its value, and add it to the end of the linked list.
<br/>
<br/>Your push method should perform the following tasks:
<br/>
<br/>Accept an integer value as an argument.
<br/>
<br/>Create a new Node object newNode with the given value.
<br/>
<br/>If the list is empty (head is null), set both the head and tail pointers of the list to the newNode.
<br/>
<br/>If the list is not empty, set the next attribute of the current tail node to point to the newNode, then update the tail pointer to point to newNode.
<br/>
<br/>Increase the length attribute by one.
      `,solution:`
      class Node {
      <br/>>    constructor(value){
      <br/>        this.value = value;
      <br/>        this.next = null;
      <br/>    }
      <br/>}
      <br/> 
      <br/>class LinkedList {
      <br/>    constructor(value) {
      <br/>        const newNode = new Node(value);
      <br/>        this.head = newNode;
      <br/>        this.tail = this.head;
      <br/>        this.length = 1;
      <br/>    }
      <br/>
      <br/>    printList() {
      <br/>        let temp = this.head;
      <br/>        while (temp !== null) {
      <br/>            console.log(temp.value);
      <br/>            temp = temp.next;
      <br/>        }
      <br/>    }
      <br/>
      <br/>    getHead() {
      <br/>        if (this.head === null) {
      <br/>            console.log("Head: null");
      <br/>        } else {
      <br/>            console.log("Head: " + this.head.value);
      <br/>        }
      <br/>    }
      <br/>
      <br/>    getTail() {
      <br/>        if (this.tail === null) {
      <br/>            console.log("Tail: null");
      <br/>        } else {
      <br/>            console.log("Tail: " + this.tail.value);
      <br/>        }
      <br/>    }
      <br/>
      <br/>    getLength() {
      <br/>        console.log("Length: " + this.length);
      <br/>    }
      <br/>
      <br/>    makeEmpty() {
      <br/>        this.head = null;
      <br/>        this.tail = null;
      <br/>        this.length = 0;
      <br/>    }
      <br/> 
      <br/>  /// WRITE PUSH METHOD HERE ///
      <br/>    push(value) {
      <br/>        const newNode = new Node(value);
      <br/>        if (!this.head) {
      <br/>            this.head = newNode;
      <br/>            this.tail = this.head;
      <br/>        } else {
      <br/>            this.tail.next = newNode;
      <br/>            this.tail = newNode;
      <br/>        }
      <br/>        this.length++;
      <br/>        return this;
      <br/>    }
      <br/>
      <br/>}
      `},{id:"Pop",statement:`
        Implement the pop method for the LinkedList class in JavaScript.
        <br/>
        <br/>Your pop method should not accept any inputs.
        <br/>
        <br/>The pop method should perform the following tasks:
        <br/>
        <br/>
        <br/>
        <br/>If the list is empty (i.e., the length attribute is 0), return undefined.
        <br/>
        <br/>Traverse the list to find the second last node. Use two pointers temp and pre to keep track of the current node and the previous node while traversing.
        <br/>
        <br/>Set the tail attribute of the list to the second last node (i.e., the pre pointer).
        <br/>
        <br/>Set the next attribute of the new tail node to null, effectively removing the last node from the list.
        <br/>
        <br/>Decrease the length attribute by one.
        <br/>
        <br/>If the list becomes empty after the pop operation (i.e., the length attribute becomes 0), set both head and tail pointers to null.
        <br/>
        <br/>>Return the removed node
        `,solution:`
      <br/>>  class Node {
      <br/>    constructor(value){
      <br/>        this.value = value;
      <br/>        this.next = null;
      <br/>    }
      <br/>}
      <br/> 
      <br/>class LinkedList {
      <br/>    constructor(value) {
      <br/>        const newNode = new Node(value);
      <br/>        this.head = newNode;
      <br/>        this.tail = this.head;
      <br/>        this.length = 1;
      <br/>    }
      <br/>
      <br/>    printList() {
      <br/>        let temp = this.head;
      <br/>        while (temp !== null) {
      <br/>            console.log(temp.value);
      <br/>            temp = temp.next;
      <br/>        }
      <br/>    }
      <br/>
      <br/>    getHead() {
      <br/>        if (this.head === null) {
      <br/>            console.log("Head: null");
      <br/>        } else {
      <br/>            console.log("Head: " + this.head.value);
      <br/>        }
      <br/>    }
      <br/>
      <br/>    getTail() {
      <br/>        if (this.tail === null) {
      <br/>            console.log("Tail: null");
      <br/>        } else {
      <br/>            console.log("Tail: " + this.tail.value);
      <br/>        }
      <br/>    }
      <br/>
      <br/>    getLength() {
      <br/>        console.log("Length: " + this.length);
      <br/>    }
      <br/>
      <br/>    makeEmpty() {
      <br/>        this.head = null;
      <br/>        this.tail = null;
      <br/>        this.length = 0;
      <br/>    }
      <br/> 
      <br/>    push(value) {
      <br/>        const newNode = new Node(value);
      <br/>        if (!this.head) {
      <br/>            this.head = newNode;
      <br/>            this.tail = newNode;
      <br/>        } else {
      <br/>            this.tail.next = newNode;
      <br/>            this.tail = newNode;
      <br/>        }
      <br/>        this.length++;
      <br/>        return this;
      <br/>    }
      <br/> 
      <br/>  /// WRITE POP METHOD HERE ///
      <br/>    pop() {
      <br/>        let lastNode = this.head;
      <br/>        if (this.head) {
      <br/>            if (this.length === 1) {
      <br/>                this.head = null;
      <br/>                this.tail = null;
      <br/>            } else {
      <br/>                let node = this.head;
      <br/>                while (node.next.next !== null) {
      <br/>                    node = node.next;
      <br/>                }
      <br/>                lastNode = node.next;
      <br/>                node.next = null;
      <br/>                this.tail = node;
      <br/>            }
      <br/>            this.length--;
      <br/>        }
      <br/>        return lastNode;
      <br/>    }
      <br/>
      <br/>}
      `}]},{name:"Doubly linked list",questions:[{id:"2",statement:"???",solution:`12312312
    12312312
    12312312312`},{id:"2",statement:"???",solution:`12312312
    12312312
    12312312312`}]}];var d=(()=>{class e{currentQuestion=r(n[0].questions[0]);static \u0275fac=function(b){return new(b||e)};static \u0275prov=t({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();export{n as a,d as b};
