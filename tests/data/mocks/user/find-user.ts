import { IUserEntity } from '../../../../src/domain/entitys/user-entity'
import faker from 'faker'
import { IFindUser } from '../../../../src/domain/use-case/user/find-user'

export class FindUserRepositoryMock implements IFindUser {
  id:Number
  email:String
  name:String 
  password:String 
  address:String 
  city:String 
  
  async find (id:Number):Promise<IUserEntity> {
    this.id = id
    this.email = faker.internet.email()
    this.name = faker.name.firstName()
    this.password = faker.internet.password()
    this.city = faker.address.city()
    this.address = faker.address.streetAddress()
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
