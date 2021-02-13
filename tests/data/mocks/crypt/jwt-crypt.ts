import { ICryptData } from '../../../../src/data/contracts/crypt/crypt-data'
import faker from 'faker'
import { IJwtAdapter } from '@data/contracts/crypt/hash-jwt'

export class JWTAdapterStub implements IJwtAdapter {
  hash: String
  id:Number
  email:String
  name:String
  async hashGenerate (id:Number, email:String):Promise<String> {
    this.id = id
    this.email = email
    this.name = faker.name.firstName()
    this.hash = faker.internet.password(50)
    return this.hash
  }
}
