"use strict";
const list = document.getElementById("list");
const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-title");
if (list instanceof HTMLUListElement && form instanceof HTMLFormElement && input instanceof HTMLInputElement) {
    // console.log(`Elements found : ` , list, form, input)
    form.addEventListener("submit", e => {
        e.preventDefault();
        if (input.value === "" || input.value === null)
            return;
        const newTask = {
            id: 1,
            title: input.value,
            completed: false,
            createdAt: new Date()
        };
        addListItem(newTask);
    });
    function addListItem(task) {
        const item = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        label.append(checkbox, task.title);
        item.append(label);
        list === null || list === void 0 ? void 0 : list.append(item);
    }
}
else {
    // console.log(`Not found`)
}
