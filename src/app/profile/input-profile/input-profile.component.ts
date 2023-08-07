import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-input-profile',
  templateUrl: './input-profile.component.html',
  styleUrls: ['./input-profile.component.css']
})
export class InputProfileComponent {
  
  constructor (private profileService : ProfileService){}

  addNewProfile(data : any) : void{
    this.profileService.addProfile(data);
  }
}
