const todoStorage={
    uid:0
}

const vm = new Vue({
    data: () => ({
        inputValue:"",
        todoList:[],
        editItem:"",

    }),
    methods:{
        addTodoItem(){
            const value=this.inputValue&&this.inputValue.trim();
            if(!value){
                return ;
            }
            this.todoList.push({
                id:++todoStorage.uid,
                content:value,
                complete:false
            })
            this.inputValue=""
        },
        deleteItem(todo){
            this.todoList.splice(this.todos.indexOf(todo),1);
        },
        editTodo(todo){
            this.editTodo=todo;
        }
    }
}).$mount('#app')