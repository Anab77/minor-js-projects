let btn = document.querySelectorAll(".del");
Array.from(btn).forEach(function(btn){
    btn.addEventListener('click',function(){
        btn.parentElement.remove();
    });

});

let my_form = document.forms["my_form"];
let addBtn = my_form.querySelector('#add');
addBtn.addEventListener('click',addBook)
function addBook(event){
    event.preventDefault();

    let bName = my_form.querySelector("#bName").value;
    let auth = my_form.querySelector("#auth").value; 

    if(bName.length === 0 && auth.length === 0){
        alert("add a book.")
        return false;
    }
    let ulList = document.querySelector('ul');
    let li = document.createElement('li');
    let para = document.createElement('p')
    let author = document.createElement('h5')
    let btn = document.createElement('button')    
    para.textContent = bName;
    author.textContent = auth;
    btn.textContent = "delete"
    btn.classList.add("del")
    li.appendChild(para);
    li.appendChild(author); 
    li.appendChild(btn)
    ulList.appendChild(li);
    btn.addEventListener('click',function(event){
        event.preventDefault();
        let remove_it = ulList.removeChild(li);
    });
    
   my_form.reset()

}
 








