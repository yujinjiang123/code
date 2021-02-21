class VNode{
    tag;
    props;
    children;
    constructor(tag,props,children=[]){
        this.tag=tag;
        this.props=props;
        this.children=children;
    }

    render(){
        const el=document.createElement(this.tag);
        const props=this.props;
        for(let prop in props){
            el.setAttribute(prop,props[prop]);
        }
        const children=this.children;
        children.forEach(child=>{
            const childEl=(child instanceof VNode)?child.render():document.createTextNode(child);
            el.appendChild(childEl);
        })
        return el;
    }
}



module.exports=VNode;