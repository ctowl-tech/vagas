import { ICryptData } from '../../../contracts/crypt/crypt-data'
import { IUpdateUser } from '../../../../domain/use-case/user/update-user'
import { IUpdateUserRepository } from '../../../../data/contracts/user/update-user'

export class UpdateUserUser implements IUpdateUser {
  constructor (
    private readonly crypt: ICryptData,
    private readonly userRepository:IUpdateUserRepository
  ) {}

  async update (user:IUpdateUser.Params):Promise<IUpdateUser.Result> {
    if (user.password) {
      const passwordEncrypter = await this.crypt.encrypt(user.password)
      return this.userRepository.update({ ...user, password: passwordEncrypter })
    }
    return this.userRepository.update({ ...user })
  }
}
