
function process (){

    var student = document.getElementById("namebox").value ;
    var mid = document.getElementById('midBox').value ;
    var final = document.getElementById("finalbox").value ;
    var total= (mid *.40) + (final *.60) ;
    p1.innerText = student + " your total marks: " + total ;
    
    document.getElementById("namebox").value=" ";
    document.getElementById("midBox").value= " ";
    document.getElementById("finalbox").value= " " ;

}