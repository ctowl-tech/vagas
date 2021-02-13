export type IAuthTokenData = {
  createToken:(email:String, id:Number)=>Promise<String>
}
