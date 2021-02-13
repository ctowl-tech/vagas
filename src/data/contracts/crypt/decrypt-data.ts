export interface IDecrypter {
  decrypt(ciphertext: string):Promise<any>
}
