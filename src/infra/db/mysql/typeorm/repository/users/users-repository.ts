import { getRepository } from 'typeorm'
import { Users } from '../../entities/users-entities'
import { IRegisterNewUser } from '../../../../../../data/contracts/user/create-register'
import { IDeleteUserRepository } from '../../../../../../data/contracts/user/delete-user'
import { IFindUserRepository } from '../../../../../../data/contracts/user/find-user'
import { IFindUserByMailData } from '../../../../../../data/contracts/user/find-user-by-mail'
import { IUserEntity } from '../../../../../../domain/entitys/user-entity'
import { IUpdateUserRepository } from '../../../../../../data/contracts/user/update-user'

export class UserRepository implements IRegisterNewUser, IFindUserRepository, IDeleteUserRepository, IUpdateUserRepository, IFindUserByMailData {
  async create (payload: IRegisterNewUser.Params): Promise<IUserEntity> {
    return getRepository(Users).create(payload).save()
  }

  async find (id: number): Promise<IUserEntity> {
    return getRepository(Users).findOne(id)
  }

  async findUserByMail ({ email }:IFindUserByMailData.Params): Promise<IUserEntity> {
    return getRepository(Users).findOne({ email })
  }

  async delete (params: IDeleteUserRepository.Params):Promise<IDeleteUserRepository.Result> {
    await getRepository(Users).delete({ id: Number(params.id) })
  }

  async listRows (): Promise<IUserEntity[]> {
    return getRepository(Users).find()
  }

  async update (payload: IUpdateUserRepository.Params):Promise<IUpdateUserRepository.Result> {
    const user = new Users()
    user.id = Number(payload.userId)
    user.address = payload.address
    user.password = payload.password
    user.city = payload.city
    user.name = payload.name
    return getRepository(Users).save(user)
  }
}
