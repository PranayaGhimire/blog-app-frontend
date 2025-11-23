export interface IRegister {
    username:string,
    email:string,
    password:string
}

export interface ILogin {
    email:string,
    password:string
}

export interface IAuthState {
    token:string | undefined | null,
    user:string | null 
}