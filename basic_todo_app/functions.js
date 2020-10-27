const selfOwnsTodo = ({ user, todo }) => {
  const userTodoIds = user.todos.map(todo => todo.id)
  if (userTodoIds.contains(todo.id)) {
    return { result: true }
  }
  return { result: false }
}