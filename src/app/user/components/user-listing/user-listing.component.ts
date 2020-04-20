import { Component, OnInit } from '@angular/core';
import { UserListingService } from '@app/user/service/user.listing.service';
import { User } from '@app/authentication/model/user.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.scss']
})
export class UserListingComponent implements OnInit {

  users: User[] = [];

  cols = [
    { field: 'username', header: 'UserName' },
    { field: 'email', header: 'Email' },
    { field: 'mobile', header: 'Mobile' },
    { field: 'age', header: 'Age' },
    { field: 'name', header: 'Name' }   
];
  
  constructor(private userListingService: UserListingService) { }
  

  ngOnInit() {
      this.userListingService.getAllUsers().subscribe(data => {
        console.log(data[0]);
       
        this.users = data;
        console.log(this.users[0]);
      }, error => {
        alert(error.error.error_description);
      });
  }

}
