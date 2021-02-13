import { ICryptData } from '../../../../src/data/contracts/crypt/crypt-data'
import faker from 'faker'
export class EncryptStub implements ICryptData {
  hash: String
  async encrypt (valuToEncode:string):Promise<String> {
    this.hash = faker.internet.password(50)
    return this.hash
  }
}
