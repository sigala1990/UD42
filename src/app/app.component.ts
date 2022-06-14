import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto019';

  logout(){
    sessionStorage.setItem('role','');
    this.refresh();
  }
  refresh(): void {
    window.location.reload();
}
}
