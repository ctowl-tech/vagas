import { IUserEntity } from '../../../../src/domain/entitys/user-entity'
import faker from 'faker'
import { IFindUserByMail } from '../../../../src/domain/use-case/user/find-user-by-mail'

export class FindUserPerMailRepositoryMock implements IFindUserByMail {
  id:Number
  email:String
  name:String 
  password:String 
  address:String 
  city:String 
  
  async findUserByMail (payload:IFindUserByMail.Params):Promise<IFindUserByMail.Result> {
    this.id = faker.random.number(99)
    this.email = payload.email
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
