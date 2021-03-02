const arr=['foo','bar'];
const iter=arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


class Counter{
    constructor(limit){
        this.limit=limit;
    }
    [Symbol.iterator](){
        const {limit}=this;
        let count=1;
        return {
            next(){
                if(count<=limit){
                    return {done:false,value:count++};
                }else{
                    return {done:true};
                }
            },
            return(){
                console.log('Exiting early');
                return {done:true}
            }
        }
    }
}

let counter=new Counter(5);
for(let i of counter){
    if(i>2){
        break;
    }
    console.log(i);
}

