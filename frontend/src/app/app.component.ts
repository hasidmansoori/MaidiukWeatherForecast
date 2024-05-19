import { AfterViewInit, Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{ 
  constructor( 
    private readonly router: Router 
  ) { 
    this.router.navigate(['/']);
  } 
}
