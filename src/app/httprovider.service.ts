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
        var data: any = res;
        items.unshift(data.data);
      },
      err => {
        console.log(err);
      }
      );
  }
  
  rearrangedata(items) { 
    return this.http.put( this.url+'rearrange', items)
      .subscribe(
      res => {
      },
      err => {
        console.log(err);
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
        console.log(err);
      }
      );
  }
  updateuserData(i,items) {
    var id = items[i]._id;
    return this.http.put(this.url + id, items[i])
      .subscribe(
      res => {
      },
      err => {
        console.log(err);
      }
      );
  }
}
