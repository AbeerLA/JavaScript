let add_task = document.getElementById("add__task")
let add_account = document.getElementById("add__account")
let researchh = document.getElementById("research")

let btn_create = document.getElementById("btn_create")
let title_id = document.getElementById("title_id")
let description_id = document.getElementById("description_id")

let todo = document.getElementById("selection")

add_task.addEventListener('click', () => {
    window.location.href = 'index.html'; 
});

add_account.addEventListener('click', () => {
    window.location.href = 'page.html'; 
  });
  
researchh.addEventListener('click', () => {
    window.location.href = 'page2.html'; 
});
btn_create.addEventListener( 'click',()=>{
    const headerValue = title_id.value
    const descValue = description_id.value
    const selectedValue = Selection.value
    console.log(headerValue)
})
    // let kanbanTasksContainer = document.querySelector('.kanban__tasks');
    // let numberOfTasks = kanbanTasksContainer.querySelectorAll('.kanban__task').length;
    // let countDisplay = document.getElementById('num__count');
    // countDisplay.textContent = numberOfTasks;
    
    // document.addEventListener('DOMContentLoaded', ()=>{
    //     // احصل على كل الأعمدة (kanban__column)
    //     const columns = document.querySelectorAll('.kanban__column');
        
    //     // loop عبر كل عمود
    //     columns.forEach((column) => {
    //       // احصل على المهام داخل العمود الحالي
    //       const tasksContainer = column.querySelector('.kanban__tasks');
          
    //       // إذا وُجدت المهام داخل العمود
    //       if (tasksContainer) {
    //         const numberOfTasks = tasksContainer.querySelectorAll('.kanban__task').length;
        
    //         // ضع العدد داخل الـ <span class="num__count">
    //         const countDisplay = column.querySelector('.num__count');
    //         if (countDisplay) {
    //           countDisplay.textContent = numberOfTasks;
    //         }
    //       }
    //     });
    
    // });
    
    
    