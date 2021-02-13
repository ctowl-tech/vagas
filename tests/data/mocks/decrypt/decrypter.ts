import { IDecrypter } from '../../../../src/data/contracts/crypt/decrypt-data'
import faker from 'faker'

export class DecrypterStub implements IDecrypter {
  id:Number
  ciphertext:String
  decrypt (ciphertext: String):any {
    this.id = faker.random.number(99)
    this.ciphertext = ciphertext
    return { id: this.id }
  }
}
