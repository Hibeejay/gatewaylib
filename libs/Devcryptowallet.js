let libPrefix = "DevCryptoWalletLib"
let lib = {
  cdm:"/ONnotification",
  endpoint:
    "https://api.bots.business/v1",
  panelName: libPrefix + "Options"
}

function setupAdminPanel() {
  var panel = {
    title: "DevCryptoWalletBot options",
    description: "Options for DevCryptoWalletBot Lib",
    icon: "logo-bitcoin",

    fields: [
      {
        name: "APIKey",
        title: "API Key",
        description: "you can get your API key in @DevCryptoWalletBot",
        type: "password",
        placeholder: "API Key",
        icon: "key"
      },
      {
        name: "SecretAPIKey",
        title: "Secret API Key",
        description: "you can get your Secret API key in @DevCryptoWalletBot",
        type: "password",
        placeholder: "Secret API Key",
        icon: "key"
      }
    ]
  }

  AdminPanel.setPanel({
    panel_name: lib.panelName,
    data: panel,
    force: false // default false - save fields values
  })
}
function getOptions() {
  return AdminPanel.getPanelValues(lib.panelName)
}
function setup() {
  setupAdminPanel()
}
//notify
function onNotification() {
  Bot.run({ command:lib.cdm })
}
//withdraw
function Withdraw(options) {
var callback = Libs.Webhooks.getUrlFor({
    command: lib.cdm,
    user_id: options.user
  })
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!apiKey) {
    throw new Error(libPrefix + ": Please Setup ApiKey")
  }
  if (!secretKey) {
    throw new Error(libPrefix + ": Please Setup secretKey")
  }
  if (!options.amount) {
    throw new Error(libPrefix + ": Please Set amount")
  }
  if (!options.currency) {
    throw new Error(libPrefix + ": Please Set currency")
  }
  if (!options.address) {
    throw new Error(libPrefix + ": Please Set Wallet address")
  }
  if (!options.user) {
   throw new Error(libPrefix + ": please Set user")
  }
  HTTP.post({
    url: lib.endpoint+"/bots/723667/new-webhook?&command=connect%26transaction&public_user_token=a6d92fcc8f48480a661183aab06dbf20&user_id=12517367",
    body: {
      api_key: apiKey,
      secret_key: secretKey,
      currency: options.currency,
      amount: options.amount,
      address: options.address,
      user: options.user,
      callback: callback,
      name: "withdraw"
    }
  })
}
//deposit
function Deposit(options) {
var callback = Libs.Webhooks.getUrlFor({
    command: lib.cdm,
    user_id: options.user
  })
  var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!apiKey) {
    throw new Error(libPrefix + ": Please Setup ApiKey")
  }
  if (!secretKey) {
    throw new Error(libPrefix + ": Please Setup secretKey")
  }
  if (!options.currency) {
    throw new Error(libPrefix + ": Please Set currency")
  }
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HTTP.post({
    url: lib.endpoint+"/bots/723667/new-webhook?&command=connect%26transaction&public_user_token=a6d92fcc8f48480a661183aab06dbf20&user_id=12517367",
    body: {
      api_key: apiKey,
      secret_key: secretKey,
      currency: options.currency,
      user: options.user,
      callback: callback,
      name: "deposit"
    }
  })
}
//balance 
function GetBalance(options) {
  var callback = Libs.Webhooks.getUrlFor({
    command: lib.cdm,
    user_id: options.user
  })
var apiKey = options.api_key || getOptions().APIKey
  var secretKey = options.secret_key || getOptions().SecretAPIKey
  if (!apiKey) {
    throw new Error(libPrefix + ": Please Setup ApiKey")
  }
  if (!secretKey) {
    throw new Error(libPrefix + ": Please Setup secretKey")
  }
  if (!options.currency) {
    throw new Error(libPrefix + ": Please Set currency")
  }
  if (!options.user) {
    throw new Error(libPrefix + ": please Set user")
  }
  HTTP.post({
    url: lib.endpoint+"/bots/703862/new-webhook?&command=balance%26api&public_user_token=6872ba6bd14d5d3b03f89c05c2154040&user_id=12517367",
    body: {
      api_key: apiKey,
      secret_key: secretKey,
      currency: options.currency,
      user: options.user,
      callback: callback,
      name: "balance"
    }
  })
}
publish({
  setup: setup,
  Withdraw: Withdraw,
  Deposit: Deposit,
  GetBalance: GetBalance
})
