import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/core/auth/auth.service";
import { PlatformDetectorService } from "src/app/core/plataform/platform-detector.service";


@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit, AfterViewInit{

    fromUrl!: string
    loginForm!: FormGroup
    @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService,
        private activatedRoute: ActivatedRoute
        ){}

    ngOnInit(): void {

        this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params?.['fromUrl'])

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        })

        
    }

    ngAfterViewInit(): void {
        this.platformDetectorService.isPlatformBrowser() && 
            this.userNameInput.nativeElement.focus()
    }

    login(){
        const userName = this.loginForm.get('userName')?.value
        const password = this.loginForm.get('password')?.value
        this.authService.authenticate(userName, password)
            .subscribe({
                next: ()=> this.fromUrl ? this.router.navigateByUrl(this.fromUrl) : 
                        this.router.navigate(['user', userName])
                ,
                error: (err) =>{
                    console.log(err)
                    this.loginForm.reset()
                    this.platformDetectorService.isPlatformBrowser() && 
                        this.userNameInput.nativeElement.focus()
                }
            })
    }
}