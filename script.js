let num="";

function entry(e){
    


    let ans= document.getElementById("screen")
    let btn=document.getElementsByClassName("cal")[e-1]
    console.log(btn.innerText)
    num+=btn.innerText
    ans.value=num


}

function clr(){
    let ans= document.getElementById("screen")

    num=""
    ans.value=num;
    
}
function calculate(){
    if(num==""){
        ans.value=""
    }

    let ans= document.getElementById("screen")

   ans.value= eval(ans.value)


}

