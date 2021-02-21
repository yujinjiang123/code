const str="{{text}}{{obj.name}}"

var reg = /[^{}]+(?=})/g;

const arr=str.match(reg)
arr.forEach(e=>{
    console.log(e)
})
