/*CMD
  command: ➕ Deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

Libs.DevCryptoWalletBot.Deposit({
  currency: cur,
  api_key: api,
  secret_key: secret,
  user: user.id
})
//Or
//Libs.CryptoAdGateWayBot.Deposit({
//  currency: cur,
//  user: user.id
//})

