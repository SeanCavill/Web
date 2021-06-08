import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-benefactor',
  templateUrl: './board-benefactor.component.html',
  styleUrls: ['./board-benefactor.component.css']
})
export class BoardBenefactorComponent implements OnInit {
  content?: string;
  hasAccess = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getBenefactorBoard().subscribe(
      data => {
        this.content = data;
        this.hasAccess = true;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
