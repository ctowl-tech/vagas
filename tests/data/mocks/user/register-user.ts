import { IRegisterNewUser } from '../../../../src/data/contracts/user/create-register'
import { IUserEntity } from '../../../../src/domain/entitys/user-entity'
import faker from 'faker'

export class RegisterNewUserRepositoryStub implements IRegisterNewUser {
  id:Number
  name: String
  email: String
  password: String
  address: String
  city:String

  async create (user:IUserEntity): Promise<IUserEntity> {
    this.id = faker.random.number(50)
    this.name = user.name
    this.email = user.email
    this.password = user.password
    this.address = user.address
    this.city = user.city
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      address: this.address,
      city: this.city
    }
  }
}
