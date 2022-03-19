
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

var btn = document.getElementById("btn");
var regex1 = /^([1](\s|\-))?[\d]{3}(\s|\-)*[\d]{3}(\s|\-)*[\d]{4}$/;
var regexParen = /^[(][1]|([1](\s|\-))?[(][\d]{3}[)](\s|\-|)*[\d]{3}(\s|\-)*[\d]{4}[)]?$/;

let eventIs = btn.addEventListener('click',function(){  
    let box = document.getElementById("phone")
    var user_input = box.value;
    // user_input.matchAll(regex1)
    console.log(user_input)
    if(regex1.test(user_input)){
        document.getElementById("demo").textContent= "valid phone number";
        box.setAttribute("style","border-color:green");
        return regexParen;
        }
    else{
     document.getElementById("demo").textContent= "invalid phone number";
     box.setAttribute("style","border-color:red");
        }   
});
