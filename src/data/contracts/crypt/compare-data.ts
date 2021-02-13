export interface ICompare {
  compare: (plaintext: String, hashEncrypt: String) => Promise<boolean>
}
