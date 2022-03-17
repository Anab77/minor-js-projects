document.addEventListener("DOMContentLoaded",function(){

    const form = document.querySelector("#my_form")
    console.log(form)
    let h1 = document.getElementsByTagName("h1");
    
    
    const btn = form.querySelector("#myBtn");
    btn.addEventListener('click',function(){
      
        const x  = parseFloat(form.querySelector("#num1").value);
        const y = parseFloat(form.querySelector("#num2").value);
    
        if(!x || !y){
            alert("enter values");
        }
        
       
        let per = (x/100)*y
        document.getElementById("demo").innerHTML = per;
        form.reset();
    });
})















// let form = document.querySelector("#my_form");
// let  calcBtn = my_form.querySelector("#mybtn");
// calcBtn.addEventListener('click',function(){
//     let num1 = my_form.querySelector("#num1");
//     let num2 = my_form.querySelector("#num2");  
//     const res = document.getElementById("result");
//     result.innerHTML ="jingle";
//     if (!num1.value || !num2.value){
//          alert("enter input");
//      }else{
//           num1 = parseInt(num1.value);
//           num2 = parseInt(num2.value);
//           res.innerHTML = "(x /100) *y";  
//      }
    
// });

