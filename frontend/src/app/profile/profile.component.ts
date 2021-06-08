import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  form: any = {
    username: null,  
    email: null,
    newpassword: null,
    password: null
  }
  isEditing = false;
  isLoggedIn = false;
  isUpdateFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if (this.token.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.token.getUser().roles;
    }
  }

  editUser(){

      this.isEditing = true;
      console.log("Editing account");
      this.form.username = this.currentUser.username;
      this.form.email = this.currentUser.email;
      
    
  }

  onSubmit(): void {
    const { username, email, newpassword, password } = this.form;
    console.log(username,email,newpassword,password);
    this.authService.update(username, email, newpassword, password).subscribe(
      data => {
        this.token.saveToken(data.accessToken);
        this.token.saveUser(data);
        this.isUpdateFailed = false;

        this.reloadPage();
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isUpdateFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}
