import Account from "./Account";

class SavingsAccount extends Account{
  constructor(client, balance, number , agency){
    super(client, balance, number , agency)
  }

  withdrawFromAccount(value){
    super._withdrawFromAccount(value, 20)
  }
}

export default SavingsAccount