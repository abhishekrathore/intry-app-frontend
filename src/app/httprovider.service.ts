import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttproviderService {
  url = 'http://138.68.227.241:3000/employment/'
  constructor(private http: HttpClient) { }
  createUserData(result, items) { 
    const req = this.http.post(this.url, result)
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
    return this.http.put( this.url+'rearrange', items)
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
      const req = this.http.get(this.url)
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
    const url = this.url + id;
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
    return this.http.put(this.url + id, items[i])
      .subscribe(
      res => {
      },
      err => {
        console.log("Error occured");
      }
      );
  }
}
