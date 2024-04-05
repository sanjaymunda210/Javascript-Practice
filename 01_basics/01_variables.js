const accountId = 144553
let accountEmail = "sanjay@google.com"
var accountPassword = "12345"
accountCity = "Jamshedpur"
let accountState;

// accountId = 2 // value of constant cant be changed
console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
console.table({"accountId": accountId, "accountEmail": accountEmail, "accountPassword": accountPassword, "accountCity": accountCity, "accountState": accountState});