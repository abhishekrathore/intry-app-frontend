import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttproviderService {
  url = 'http://192.168.0.135:3000/employment/'
  constructor(private http: HttpClient) { }
  createUserData(result, items) { 
    const req = this.http.post('http://192.168.0.135:3000/employment/', result)
      .subscribe(
      res => {
        console.log(res);
        var data: any = res;
        items.unshift(data.data);
      },
      err => {
        console.log("Error occured");
      }
      );
  }
  
  rearrangedata(items) { 
    console.log(items);
    return this.http.put('http://192.168.0.135:3000/employment/rearrange', items)
      .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log("Error occured");
      }
      );
  }
  getUserData() {
    return new Promise((resolve,reject) => {
      const req = this.http.get('http://192.168.0.135:3000/employment/')
        .subscribe(
        res => {
          resolve(res);
        },
        err => {
          reject();
        }
        );
    });
  }
  deleteUserData(id) { 
    const url = 'http://192.168.0.135:3000/employment/' + id;
    return this.http.delete(url)
      .subscribe(
      res => {
      },
      err => {
        console.log("Error occured");
      }
      );
  }
  updateuserData(i,items) {
    console.log(i);
    console.log(items[i]);
    var id = items[i]._id;
    return this.http.put('http://192.168.0.135:3000/employment/' + id, items[i])
      .subscribe(
      res => {
      },
      err => {
        console.log("Error occured");
      }
      );
  }
}
