document.addEventListener("DOMContentLoaded",function(){
    const taskInput =document.getElementById("task");
    const addTaskButton =document.getElementById("addTask");
    const taskList =document.getElementById("taskList");

    addTaskButton.addEventListener("click",function(){
            const taskText = taskInput.value.trim()
            if(taskText !=="")
            {
            const listItem = document.createElement("li");
            listItem.innerHTML=`${taskText}
            <button class="delete-button">Delete</button>`;
            listItem.querySelector(".delete-button").addEventListener("click",function(){
              listItem.remove()
            });
            
            taskList.appendChild(listItem);
            taskInput.value="";
            }
    });
   taskInput.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        addTaskButton.click();
    }
   });
});
