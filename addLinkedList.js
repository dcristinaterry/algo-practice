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
        for (let i = tempNum.length-1; i >= 0; i--) {
           this.addToLinkedList(tempNum[i]);
        }
    }
}


function retrieveNumberLL(myLL) {
    // console.log("this is my list",myLL)
    let tempLL = myLL.head
    let num = myLL.head.value.toString();

    console.log("this is the head", tempLL)
    while (tempLL.next !== null) {

        tempLL = tempLL.next;
        console.log(tempLL.value)
        num = tempLL.value.toString() + num;
    }
    return num*1;
}

let myLL1 = new LinkedList();
let num1= 22;
myLL1.convertNumtoLinkedReversed(num1);

let myLL2 = new LinkedList();
let num2= 22;
myLL2.convertNumtoLinkedReversed(num2);




function addLinks(link1, link2){

    let num1 = retrieveNumberLL(link1);
    let num2 = retrieveNumberLL(link2);
    let num3 = num1 + num2;
    
    let totalLink = new LinkedList();
    totalLink.convertNumtoLinkedReversed(num3);
    console.log(totalLink);

    let numfinal = retrieveNumberLL(totalLink);
    console.log(numfinal);
}

addLinks(myLL1, myLL2);