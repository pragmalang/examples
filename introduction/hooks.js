const validateUser = user => {
  if(user.age < 18) {
    throw new Error("Age must be over 18")
  }
  return user
}

const setFullName = user => 
  ({...user, fullName: user.firstName + " " + user.lastName})

module.exports = { validateUser, setFullName }