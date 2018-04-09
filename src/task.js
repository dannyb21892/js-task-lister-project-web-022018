class Task {
  constructor(list, description, priority) {
    this.description = description
    this.priority = priority
    list.addTask(this)
  }
}
