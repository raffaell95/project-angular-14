import { Injectable } from "@angular/core";

const KEY = 'authToken'

@Injectable({providedIn: 'root'})
export class TokenService{

    hasToken(){
        return !!this.getToken()
    }

    setToken(token: any){
        window.localStorage.setItem(KEY, token)
    }

    getToken(){
        return window.localStorage.getItem(KEY) as string
    }

    removeToken(){
        window.localStorage.removeItem(KEY)
    }
}