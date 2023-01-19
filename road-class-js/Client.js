class Client{

  constructor(name, dni, rut){
    this.name = name
    this.dni = dni
    this.rut = rut
  }

  authenticatable(valor){
    return false
  }
}

export default Client;