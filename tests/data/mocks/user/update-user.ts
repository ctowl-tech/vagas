import { IRegisterNewUser } from '../../../../src/data/contracts/user/create-register'
import faker from 'faker'
import { IUpdateUser } from '@domain/use-case/user/update-user'

export class UpdateUserRepositoryStub implements IUpdateUser {
  id:Number
  name: String
  email: String
  password: String
  address: String
  city:String

  async update (user:IUpdateUser.Params): Promise<IUpdateUser.Result> {
    this.id = faker.random.number(50)
    this.name = user.name
    this.password = user.password
    this.address = user.address
    this.city = user.city
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      address: this.address,
      city: this.city
    }
  }
}
