import { ICompare } from '../../../data/contracts/crypt/compare-data'
import { IJwtAdapter } from '../../../data/contracts/crypt/hash-jwt'
import { IFindUserByMailData } from '../../../data/contracts/user/find-user-by-mail'
import { IAuthentication } from '../../contracts/authToken/authentication'

export class AuthenticationData implements IAuthentication {
  constructor (private readonly encrypt :ICompare, private readonly findByMail:IFindUserByMailData, private readonly jwtAdapter :IJwtAdapter) {}

  async auth (authenticationParams: IAuthentication.Params):Promise<IAuthentication.Result> {
    const dbResponse = await this.findByMail.findUserByMail({ email: authenticationParams.email })
    if (!dbResponse) {
      return null
    }

    if (!(await this.encrypt.compare(authenticationParams.password, dbResponse.password))) {
      return null
    }
    const encryptToken = await this.jwtAdapter.hashGenerate(dbResponse.id, dbResponse.email)
    return {
      accessToken: encryptToken,
      name: dbResponse.name
    }
  }
}
