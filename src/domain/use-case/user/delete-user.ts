export interface IDeleteUser{
  delete(user:IDeleteUser.Params):Promise<IDeleteUser.Result>
}

export namespace IDeleteUser{
  export type Params = {
    id:Number
  }
  export type Result = void
}
