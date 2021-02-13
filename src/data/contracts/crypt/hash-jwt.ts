export interface IJwtAdapter{
  hashGenerate (id:Number, email:String, isAdmin?:boolean):Promise<String> 
}
