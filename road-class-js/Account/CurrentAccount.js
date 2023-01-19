import Account from "./Account";

class CurrentAccount extends Account{
  static numberAccounts = 0

  constructor(client, number, agency){
    super(client, 0, number, agency)
    CurrentAccount.numberAccounts ++;
  }

  withdrawFromAccount(value){
    super._withdrawFromAccount(value, 5)
  }

}

export default CurrentAccount;
