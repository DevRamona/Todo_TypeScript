type Task = {
    id : number,
    title : string,
    completed : boolean,
    createdAt : Date
}

const list = document.getElementById("list");
const form = document.getElementById("new-task-form")
const input = document.getElementById("new-task-title")
const tasks : Task[] = []

if(list instanceof HTMLUListElement && form instanceof HTMLFormElement && input instanceof HTMLInputElement) {
    // console.log(`Elements found : ` , list, form, input)
    form. addEventListener("submit", e => {
        e.preventDefault()
        if(input.value === "" || input.value === null) return
        const newTask : Task = {
            id : 1, 
            title : input.value,
            completed : false,
            createdAt : new Date ()
        }
        tasks.push(newTask)
        addListItem(newTask)
        input.value = ""

    })
    function addListItem(task :Task) {
        const item = document.createElement("li")
        const label = document.createElement("label")
        const checkbox = document.createElement("input")
        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked
            // console.log(tasks)
        
        })
        checkbox.type = "checkbox"
        checkbox.checked = task.completed
        label.append(checkbox, task.title)
        item.append(label)
        list?.append(item)
        
        

    
    }
    

} else {
    // console.log(`Not found`)
}




 