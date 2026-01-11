let i=document.querySelector('#input');
let btn=document.querySelector('button');
let ul=document.querySelector('ul');
btn.addEventListener('click',function(){
    let l=document.createElement('li');
    l.innerText=i.value;
    let bttn=document.createElement('button');
    bttn.innerText="delete";
    l.appendChild(bttn);
    bttn.addEventListener('click',function(){
        l.remove();
    })
    ul.appendChild(l);
    i.value="";
})
