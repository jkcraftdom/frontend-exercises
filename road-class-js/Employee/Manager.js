import Employee from "./Employee";

class Manager extends Employee{
  seeBonus(){
    return this._seeBonus(5)
  }
}

export default Manager