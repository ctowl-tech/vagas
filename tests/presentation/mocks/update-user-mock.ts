import { IUpdateUser } from '../../../src/domain/use-case/user/update-user'

export class UpdateUserMock implements IUpdateUser {
  id:Number
  name:String 
  password:String 
  address:String 
  city:String 
  
  async update (user:IUpdateUser.Params):Promise<IUpdateUser.Result> {
    this.id = user.userId
    this.name = user.name
    this.password = user.password
    this.city = user.city
    this.address = user.address
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      city: this.city,
      address: this.address
    }
  }
}
