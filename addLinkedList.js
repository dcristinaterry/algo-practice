class Node {

    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToLinkedList(num) {

        if (this.head === null && this.tail === null) {
            this.head = new Node(num);
        } else {
            if (this.tail !== null) {
                let myNewNode = new Node(num);
                this.tail.next = myNewNode;
                this.tail = myNewNode;
            } else {
                this.tail = new Node(num);
                this.head.next = this.tail;
            }
        }
    }

    convertNumtoLinkedReversed(num) {
        let tempNum = num.toString();
        console.log("reversing:", tempNum)
        for (let i = tempNum.length - 1; i >= 0; i--) {
            console.log("whyyy", i, tempNum[i]);
            this.addToLinkedList(parseFloat(tempNum[i]));
        }
    }
}


function retrieveNumberLL(myLL) {
    // console.log("this is my list",myLL)
    let tempLL = myLL.head
    let num = myLL.head.value.toString();

    // console.log("this is the head", tempLL)
    while (tempLL.next !== null) {

        tempLL = tempLL.next;
        // console.log(tempLL.value)
        num = tempLL.value.toString() + num;
    }
    return num;
}

let myLL1 = new LinkedList();
let num1 = 9;
myLL1.convertNumtoLinkedReversed(num1);

let myLL2 = new LinkedList();
let num2 = 29;
myLL2.convertNumtoLinkedReversed(num2);




function addLinks(myLL1, myLL2) {
    let node1 = myLL1.head;
    let node2 = myLL2.head;
    let carry = 0;
    let totalLink = new LinkedList()
    let run = true;

    while (run) {
        if (node1 !== null && node2 !== null) {
            sum = node1.value + node2.value + carry;
            if (sum >= 10) {
                carry = Math.floor(sum / 10)
                console.log("carry", carry)
                sum = sum % 10;
                console.log("sum", sum)
            }
            totalLink.addToLinkedList(sum);
            node1 = node1.next;
            node2 = node2.next;
        } else if (node1 === null && node2) {
            totalLink.addToLinkedList(node2.value + carry)
            carry = 0
            node2 = node2.next;
        } else if (node1 && node2 === null) {
            totalLink.addToLinkedList(node1.value + carry)
            carry = 0
            node1 = node1.next;
        }

        if (node1 === null && node2 === null) {
            run = false;
        }



    }

}

addLinks(myLL1, myLL2);