function Lista() {
    this.head = null;
}

function Nodo(value) {
    this.value = value;
    this.next = null;
}

Lista.prototype.add= function (value){
    if (this.head == null)this.head= new Nodo(value)
    else{
        let refe = this.head
        while (refe.next != null){
            refe = refe.next
        }
        refe.next=new Nodo(value)
    }
} 


let list = new Lista()

list.add(56)
list.add('Hello')
list.add([5,6,7,8,9])

let current = list.head;
while (current != null) {
    console.log(current.value);
    current = current.next;
}