class AuthenticationSystem{
  static login(user, password){
      if("authenticatable" in user && user.authenticatable instanceof Function)
        return user.authenticatable(password)
      else 
        return false
  }
}

export default AuthenticationSystem