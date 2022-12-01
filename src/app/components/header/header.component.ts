import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  flag = false;

  changeTheme():void{
    var bodyTemplate = document.body;
    bodyTemplate.classList.toggle("dark-mode");
    if(this.flag){
      this.flag = false;
      
    }
     
    else{
    this.flag = true;
    }
  }

}
