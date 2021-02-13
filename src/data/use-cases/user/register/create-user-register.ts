import { ICryptData } from '../../../contracts/crypt/crypt-data'
import { IRegisterNewUser } from '../../../contracts/user/create-register'
import { IUserEntity } from '../../../../domain/entitys/user-entity'
import { ICreateUser } from '../../../../domain/use-case/user/create-user'

export class RegisterUser implements ICreateUser {
  constructor (
    private readonly crypt: ICryptData,
    private readonly userRepository:IRegisterNewUser
  ) {}

  async save (userRow:ICreateUser.Params): Promise<IUserEntity> {
    const passwordEncrypter = await this.crypt.encrypt(userRow.password)
    return this.userRepository.create({ ...userRow, password: passwordEncrypter })
  }
}
