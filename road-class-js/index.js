import Account from "./Account.js";
import Client from "./Client.js";

const client = new Client('jheremy', '73265231', '123123123')

const account = new Account(client,0, '123123', '1')

console.log(account)