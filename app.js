function save(data){
    return new Promise((resolve,reject)=>{
        let time=Math.floor(Math.random()*10)+1;
        if(time>5){
            reject("error");
        }else{
            resolve("data saved");
        }
    })
}
let p=save("mydata")
p.then(()=>{
    console.log("first data saved");
    return save("second");
}).then(()=>{
    console.log("second data saved");
    return save("third");
}).then(()=>{
    console.log("third data saved");
})
.catch(()=>{
    console.log("error");
});