import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-board-member',
  templateUrl: './board-member.component.html',
  styleUrls: ['./board-member.component.css']
})
export class BoardMemberComponent implements OnInit {
  content?: string;
  hasAccess = false;
  form: any = {
    username: null,  
    email: null,
    newpassword: null,
    password: null
  }
  isListingFailed = false;
  errorMessage = '';


  constructor(private userService: UserService,  private token: TokenStorageService) { }

  ngOnInit(): void {
    this.userService.getMemberBoard().subscribe(
      data => {
        this.content = data;
        this.hasAccess = true;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  onSubmit(){
    
  }
}
