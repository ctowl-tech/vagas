import jwt from 'jsonwebtoken'
import { ENUM } from './enum/jwt-enum'
import { IJwtAdapter } from '../../../data/contracts/crypt/hash-jwt'
import { IDecrypter } from '../../../data/contracts/crypt/decrypt-data'

export class JsonWebTokenAdapter implements IJwtAdapter, IDecrypter {
  async hashGenerate (id:Number, email:String):Promise<String> {
    return jwt.sign({ email, id }, ENUM.secret, { expiresIn: ENUM.expiresIn })
  }

  async decrypt (ciphertext: string): Promise<string> {
    const plaintext: any = await jwt.verify(ciphertext, ENUM.secret)
    return plaintext
  }
}
