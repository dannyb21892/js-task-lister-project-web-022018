class TaskLister {
  // your solution here
  constructor () {
    var submitListButton = document.getElementById("submitList")
    var newListTitle = document.getElementById("new-list-title")
    var lists = document.getElementById("lists")
    var submitListButton = document.getElementById("submitList")
    var submitTaskButton = document.getElementById("submitTask")
    var listDropdown = document.getElementById("parent-list");
    window.that = this
    window.listCount = 0
    submitListButton.addEventListener("click", this.createList, true)
    submitTaskButton.addEventListener("click", this.createTask, true)
  }

  createList() {
    var newListTitle = document.getElementById("new-list-title")
    if (newListTitle.value != "") {
      let _list = new List(newListTitle.value)
      let list_el = document.createElement("div")
      let listTitle = document.createElement("h2")
      let listDelete = document.createElement("button")
      let listTasks = document.createElement("ul")
      let listDropdown = document.getElementById("parent-list")
      let listOption = document.createElement("option")
      let taskDiv = document.getElementById("app-content")

      taskDiv.style = ""

      list_el.id = `list number ${listStore.length}`
      listTitle.innerText = _list.title
      listDelete.id = `list delete ${listStore.length}`
      listDelete.innerText = "X"
      listTasks.id = `task list ${listStore.length}`

      listTitle.append(listDelete)
      list_el.append(listTitle)
      list_el.append(listTasks)

      lists.append(list_el)

      listOption.id = `list option ${listStore.length}`
      listOption.innerText = _list.title

      listDropdown.append(listOption)

      listDelete.addEventListener("click", window.that.deleteList)

      newListTitle.value = ""
    }

  }

  createTask() {
    let newTaskDescription = document.getElementById("new-task-description")
    let newTaskPriority = document.getElementById("new-task-priority")
    let listDropdown = document.getElementById("parent-list")

    if (listDropdown.value != "" && newTaskPriority.value != "" && newTaskDescription.value != "") {
      let list = listStore[listDropdown.selectedIndex]
      let _task = new Task(list, newTaskDescription.value, newTaskPriority.value)
      let task_list = document.getElementById(`task list ${listDropdown.selectedIndex + 1}`)
      let newTask_el = document.createElement("li")
      newTask_el.id = `task number ${listDropdown.selectedIndex + 1}-${list.tasks.length}`

      newTask_el.innerHTML = `Task: ${_task.description}
        <button id="task delete ${listDropdown.selectedIndex + 1}-${list.tasks.length}">
          X
        </button>
        <br>
        Priority: ${_task.priority}`

        task_list.append(newTask_el)
        let taskDelete = document.getElementById(`task delete ${listDropdown.selectedIndex + 1}-${list.tasks.length}`)
        taskDelete.addEventListener("click", window.that.deleteTask)

        newTaskPriority.value = ""
        newTaskDescription.value = ""
    }
  }

  deleteList() {
    let listNumber = event.target.id.slice(12)
    let listToDelete = document.getElementById(`list number ${listNumber}`)
    let listOptionToHide = document.getElementById(`list option ${listNumber}`)
    listToDelete.remove()
    listOptionToHide.style = "display: none"
    listStore = [...listStore.slice(0, listNumber-1), 0, ...listStore.slice(listNumber)]
    let lists = document.getElementById("lists")
    if (!lists.hasChildNodes()) {
      console.log("inside if")
      let taskDiv = document.getElementById("app-content")
      taskDiv.style = "visibility: hidden"
    }
  }

  deleteTask() {
    let taskNumber = event.target.id.slice(12)
    let taskToDelete = document.getElementById(`task number ${taskNumber}`)
    taskToDelete.remove()
  }

  render() {
    return (`<h1>Welcome to Flavortown</h1>`);
  }
}
