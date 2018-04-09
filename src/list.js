let listStore = []
class List {
  constructor(title) {
    this.title = title
    this.tasks = []
    listStore.push(this)
  }

  addTask(task) {
    this.tasks.push(task)
  }
}
