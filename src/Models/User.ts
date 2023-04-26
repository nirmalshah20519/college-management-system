export interface User{
    ID:number,
    UserID:string,
    Password:string,
    Role:number
}

export class UserClass implements User{
    public constructor(
        public ID:number,
        public UserID:string,
        public Password:string,
        public Role:number
    ){}
}