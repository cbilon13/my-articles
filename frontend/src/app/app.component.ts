import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'frontend';

  ngOnInit(): void {
    // fetch('http://localhost:3000/articles')
    //   .then(res => res.json())
    //   .then(res => console.log(res));

    // fetch('http://localhost:3000/users')
    //   .then(res => res.json())
    //   .then(res => console.log(res));
  }
}
