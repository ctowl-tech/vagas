import { ICompare } from '../../../data/contracts/crypt/compare-data'
import { ICryptData } from '../../../data/contracts/crypt/crypt-data'
import bcrypt from 'bcrypt'

export class BcrypAdapter implements ICryptData, ICompare {
  constructor (private readonly saltHash:number) {}

  encrypt (valuToEncode: string):Promise<string> {
    return bcrypt.hash(valuToEncode, this.saltHash)
  }

  compare (plaintext: String, hashEncrypt: string): Promise<boolean> {
    return bcrypt.compare(plaintext, hashEncrypt)
  }
}
