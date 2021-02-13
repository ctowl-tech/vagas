import { IUserEntity } from '../../../src/domain/entitys/user-entity'
import { ICreateUser } from '../../../src/domain/use-case/user/create-user'
import faker from 'faker'

export class CreateUserMock implements ICreateUser {
  id:Number
  email:String
  name:String 
  password:String 
  address:String 
  city:String 
  
  async save (user:ICreateUser.Params):Promise<IUserEntity> {
    this.id = faker.random.number(100)
    this.email = user.email
    this.name = user.name
    this.password = user.password
    this.city = user.city
    this.address = user.address
    return {
      id: this.id,
      email: this.email,
      name: this.name,
      password: this.password,
      city: this.city,
      address: this.address
    }
  }
}
