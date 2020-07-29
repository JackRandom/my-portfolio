

function mysubmitFunction() {
   var name=document.getElementById("name")
   var mail=document.getElementById("mail")
   var msg=document.getElementById("msg")
    alert(name.value+"\n"+mail.value+"\n"+msg.value);
}
function clearFunction() {
            document.getElementById("clearButton").reset();
}
document.getElementById("clearButton").addEventListener("click", function(clearFunction)){

});


    