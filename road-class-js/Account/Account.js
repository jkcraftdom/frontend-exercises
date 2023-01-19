import Client from "../Client.js";

export default class Account{
  #balance;
  #client;

  constructor(client, balance, number, agency) {
    this.client = client 
    this.#balance = balance;
    this.number = number;
    this.agency = agency;
  }

  get client(){
    return this.#client;
  }

  set client(value){
    if(value instanceof Client){
      this.#client = value
    }
  }
  depositIntoAccount(value) {
    this.#balance += value;
  }

  withdrawFromAccount(value){
    throw new Error('do not execute this function')
  }

  _withdrawFromAccount(value, commission) {
    value = value * (1 + commission/100) 
    if (value <= this.#balance) this.#balance -= value;
  }

  viewBalance(){
    return this.#balance;
  }

  transferToAccount(value, account){
    this.withdrawFromAccount(value)
    account.depositIntoAccount(value)
  }
}