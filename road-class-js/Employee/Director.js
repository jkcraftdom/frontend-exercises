import Employee from "./Employee";

class Director extends Employee{
  seeBonus(){
    return this._seeBonus(10)
  }
}

export default Director