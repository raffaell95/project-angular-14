import { Injectable } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { Subject } from "rxjs";
import { Alert, AlertType } from "./alert";

@Injectable({providedIn: 'root'})
export class AlertService{

    alertSubject: Subject<any> = new Subject<Alert>()
    keepAfterRouteCHange = false

    constructor(router: Router){
        router.events.subscribe(event => {
            if(event instanceof NavigationStart){
                if(this.keepAfterRouteCHange){
                    this.keepAfterRouteCHange = false
                }else{
                    this.clear()
                }
            }
        })
    }

    success(message: string, keepAfterRouteCHange: boolean = false){
        this.alert(AlertType.SUCCESS, message, keepAfterRouteCHange)
    }

    warning(message: string, keepAfterRouteCHange: boolean = false){
        this.alert(AlertType.WARNING, message, keepAfterRouteCHange)
    }

    danger(message: string, keepAfterRouteCHange: boolean = false){
        this.alert(AlertType.DANGER, message, keepAfterRouteCHange)
    }

    info(message: string, keepAfterRouteCHange: boolean = false){
        this.alert(AlertType.INFO, message, keepAfterRouteCHange)
    }

    private alert(alertType: AlertType, message: string, keepAfterRouteCHange: boolean = false){
        this.keepAfterRouteCHange = keepAfterRouteCHange
        this.alertSubject.next(new Alert(alertType, message))
    }

    getAlert(){
        return this.alertSubject.asObservable()
    }

    clear(){
       this.alertSubject.next(null)
    }

}