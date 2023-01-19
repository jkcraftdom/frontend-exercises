/**
 * @params
 * @param salary
 */
class Employee {
  #name;
  #dni;
  #salary;
  #password;

  constructor(name, dni, salary){
    this.#name = name;
    this.#dni = dni;
    this.#salary = salary;
    this.#password = '';
  }

  _seeBonus(bono){
    return this.#salary + this.#salary *  (bono/100)
  }

  seeBonus(){
    return this.#salary;
  }

  assignPassword(value){
    this.#password = value
  }

  get password(){
    return this.#password;
  }

  authenticatable(valor){
    return this.#password === valor
  }
}

export default Employee