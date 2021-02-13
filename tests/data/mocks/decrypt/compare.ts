import { ICompare } from '../../../../src/data/contracts/crypt/compare-data'

export class CompareStub implements ICompare {
  plaintext:String
  hashEncrypt:String
  async compare (plaintext: String, hashEncrypt: String):Promise<boolean> {
    this.plaintext = plaintext
    this.hashEncrypt = hashEncrypt
    return true 
  } 
}
