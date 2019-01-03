export const SET_ADDRESS = 'SET_CURRENT_ADDRESS'
export const SET_PRIVATE_KEY = 'SET_CURRENT_PRIVATE_KEY'
export const SET_ADDRESS_VALUE = 'SET_CURRENT_ADDRESS_VALUE'
export const SET_QR_SCANNING = 'SET_QR_SCANNING'
export const SET_ZERO_IN_BTC_VALUE = 'SET_ZERO_IN_BTC_VALUE'
export const SET_ZERO_IN_CURRENCY_VALUE = 'SET_ZERO_IN_CURRENCY_VALUE'
export const SET_HAS_INPUT_PIN = 'SET_HAS_INPUT_PIN'

export function setZeroInBtcValue (BTCValue) {
  return {
    type: SET_ZERO_IN_BTC_VALUE,
    BTCValue
  }
}

export function setZeroInCurrencyValue (currencyValue) {
  return {
    type: SET_ZERO_IN_CURRENCY_VALUE,
    currencyValue
  }
}

export function setQrScanning (qrScanning) {
  return {
    type: SET_QR_SCANNING,
    qrScanning
  }
}

export function setAddress (address) {
  return {
    type: SET_ADDRESS,
    address
  }
}

export function setPrivateKey (privateKey) {
  return {
    type: SET_PRIVATE_KEY,
    privateKey
  }
}

export function setAddressValue (value) {
  return {
    type: SET_ADDRESS_VALUE,
    value
  }
}

export function setHasInputPin (value) {
  return {
    type: SET_HAS_INPUT_PIN,
    value
  }
}
