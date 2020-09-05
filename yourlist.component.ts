import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { consoleTestResultHandler } from 'tslint/lib/test';



@Component({
  selector: 'app-yourlist',
  templateUrl: './yourlist.component.html',
  styleUrls: ['./yourlist.component.css']
})
export class YourlistComponent implements OnInit {
  public title = 'GroceryList App';
  public list: any = [];

  constructor(private http: HttpClient) { }

  public ngOnInit() {
    console.log('ON.INIT.');
    this.makeAjaxCall();
  }

  async makeAjaxCall() {

    const url = 'https://jsonplaceholder.typicode.com/users/1/todos'
    const results = await this.http.get(url).toPromise();
    this.list = results;
  }

  async makePostApiCall() {
    const userJson =
    {
      id: '01',
      grocery: 'Oil'
    }



    const url = 'http://localhost:3000/grocerylist';
    const output = await this.http.post(url, userJson).toPromise();
    console.log(output);
  }
}


