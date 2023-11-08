let str="";
let buttons=document.querySelectorAll(".button");
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="enter" || e.target.innerHTML=="ans"){
            str=eval(str);
            document.getElementById('res').innerHTML=str;
        }
        else if(e.target.innerHTML=="del"){
            str = str.slice(0, -1);
            document.getElementById('exp').innerHTML=str;
            
        }
        else if(e.target.innerHTML=="clear"){
            document.getElementById('exp').innerHTML="0000";
            document.getElementById('res').innerHTML="0000";
            str="";
        }
        else{
            console.log(e.target);
            str=str+e.target.innerHTML;
            document.getElementById('exp').innerHTML=str;
        }
        
    })
})