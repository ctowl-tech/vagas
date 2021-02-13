import { IUserEntity } from '@domain/entitys/user-entity'
import { IVerifyAccountToken } from '../../../domain/use-case/auth/load-account-by-token'
import { IDecrypter } from '../../contracts/crypt/decrypt-data'
import { IFindUserRepository } from '../../contracts/user/find-user'

export class VerifyAuthToken implements IVerifyAccountToken {
  constructor (
    private readonly decrypter: IDecrypter,
    private readonly loadAccountByTokenRepository: IFindUserRepository
  ) {}

  async load (accessToken: string, admin?:boolean): Promise<IUserEntity> {
    try {
      const decrypt = await this.decrypter.decrypt(accessToken)
      if (!decrypt) {
        return null
      }
      if (admin && !decrypt.admin) {
        return null
      }
      return this.loadAccountByTokenRepository.find(decrypt.id)
    } catch (error) {
      return null
    }
  }
}
