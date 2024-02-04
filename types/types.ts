export interface newUserRequestBody{
    name:number;
    email:string;
    photo?:object;
    password:string;
    phone:number;
}

export interface userResponseBody{
    name:string;
    email:string;
    password:string,
    phone:number
}