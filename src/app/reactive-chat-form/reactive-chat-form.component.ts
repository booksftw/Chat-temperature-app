import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-chat-form',
  templateUrl: './reactive-chat-form.component.html',
  styleUrls: ['./reactive-chat-form.component.scss']
})
export class ReactiveChatFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('http://localhost:3000/test')
      .subscribe( (res) => {
        console.log('res', res);
      });
  }

}
