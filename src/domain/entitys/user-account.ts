
export interface UserAccount{
  id:Number,
  name:string,
  email:string,
  password:string,
  isAdmin?: boolean,
  createdAt?:Date,
  updatedAt?:Date,
}
