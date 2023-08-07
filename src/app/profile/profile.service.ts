import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProfileService {

  constructor() { }

  profiles: any[] = [
    {
      id: 1,
      name: 'mony'
    }
  ];

  addProfile(item: any) {
    this.profiles.push(item);
  }

  getProfile() {
    return this.profiles;
  }
}
