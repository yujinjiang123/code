class Node{
    constructor(key,val){
        this.key=key;
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class DoubleList{
    constructor(){
        const head=new Node(0,0);
        const tail=new Node(0,0);
        head.next=tail;
        tail.prev=head;
        this.head=head;
        this.tail=tail;
        this.size=0;
    }

    addLast(x){
        const {tail}=this;
        x.prev=tail.prev;
        x.next=tail;
        tail.prev.next=x;
        tail.prev=x;
        this.size++;
    }

    remove(x){
        x.prev.next=x.next;
        x.next.prev=x.prev;
        this.size--;
    }

    removeFirst(){
        const {head,tail}=this;
        if(head.next===tail){
            return null;
        }
        const first=head.next;
        this.remove(first);
        return first;
    }
}

class LRUCatch{
    constructor(capacity){
        this.cap=capacity;
        this.map=new Map();
        this.catch=new DoubleList();
    }

    get(key){
        if(!this.map.has(key)){
            return -1;
        }
        this.makeRecently(key);
        return this.map.get(key).val;
    }

    put(key,val){
        if(this.map.has(key)){
            this.deleteKey(key);
            this.addRecently(key,val);
            return;
        }
        if(this.cap===this.catch.size){
            this.removeLastRecently();
        }
        this.addRecently(key,val);
    }

    makeRecently(key){
        const x=this.map.get(key);
        this.catch.remove(x);
        this.catch.addLast(x);
    }

    addRecently(key,val){
        const node=new Node(key,val);
        this.catch.addLast(node);
        this.map.set(key,node);
    }

    deleteKey(key){
        const x=this.map.get(key);
        this.catch.remove(x);
        this.map.delete(key);
    }

    removeLastRecently(){
        const deleteNode=this.catch.removeFirst();
        const key=deleteNode.key;
        this.map.delete(key);
    }
}

const cache=new LRUCatch(2);
cache.put(1,1);
cache.put(2,2);
cache.get(1);
cache.put(3,3);
cache.get(2);
cache.put(1,4);