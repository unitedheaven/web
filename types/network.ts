import algosdk from 'algosdk'

export interface AlgoClientConfig {
  /** Base URL of the server e.g. http://localhost, https://testnet-api.algonode.cloud/, etc. */
  server: string
  /** The port to use e.g. 4001, 443, etc. */
  port: string | number
  /** The token to use for API authentication (or undefined if none needed) - can be a string, or an object with the header key => value */
  token: string | algosdk.AlgodTokenHeader | algosdk.CustomTokenHeader | algosdk.BaseHTTPClient
  /** String representing current Algorand Network type (testnet/mainnet and etc) */
  network: string
}

export interface AlgoKMDConfig {
  /** Base URL of the server e.g. http://localhost, https://testnet-api.algonode.cloud/, etc. */
  server: string
  /** The port to use e.g. 4001, 443, etc. */
  port: string | number
  /** The token to use for API authentication (or undefined if none needed) - can be a string, or an object with the header key => value */
  token: string | algosdk.AlgodTokenHeader | algosdk.CustomTokenHeader | algosdk.BaseHTTPClient
  /** KMD wallet name */
  wallet: string
  /** KMD wallet password */
  password: string
}
