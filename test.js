
var Web3 = require('web3');

const web3 = new Web3('wss://mainnet.infura.io/v3/50ff582344c542618daf8b257a0f346e');
console.log(web3);
web3.eth.getAccounts()
.then(console.log);