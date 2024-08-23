const inputEle=document.getElementById("inputfield");
const list=document.querySelector(".list-container");
const addbtn=document.querySelector(".add");

addbtn.addEventListener("click",()=>{
    addTask();
});

list.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("checked");
    }
    if(e.target.tagName=="BUTTON"){
        e.target.parentElement.remove();
    }
});

inputEle.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {  // Check if the Enter key was pressed
        addTask();
    }
});

function addTask(){
    console.log("btn clicked");
    if(inputEle.value===''){
        alert("Add the tasks");
    }else{
        let li=document.createElement("li");
        li.innerHTML=inputEle.value;
        console.log(li);
        list.appendChild(li);
        inputEle.value='';

        let delBtn=document.createElement("button");
        delBtn.innerHTML="Delete";
        li.appendChild(delBtn);
    }
}
