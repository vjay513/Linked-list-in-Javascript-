class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class linkedlist {
    constructor(){
        this.lead = null
        this.size = 0;
    }
    add(element){
        var node = new Node(element);
        if(!this.lead){
            this.lead = node;
        } else{
            var current = this.lead;
            if(!current.next){
                this.lead.next = node;
            }else{
                while(current.next){
                    current = current.next;
                }
                current.next = node;
            }
        }
    }
}

let list = new linkedlist();
list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);


