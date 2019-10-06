import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const httpOptions = {
  'Content-Type':  'application/json',
  'Authorization': 'Basic OnppNmVzZXVjNHk1YXh1aW9ta3psZ2lleG9tajR2emxuaXFyZXhweDJjYnpwZnpqa2lucXE='
};

@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }

  apiUrl = 'https://dev.azure.com/estevammrodrigues/Teste/_apis';
  apiUrlRelease = 'https://vsrm.dev.azure.com/estevammrodrigues/Teste/_apis';
  
  getBuilds() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + '/build/builds?maxBuildsPerDefinition=10&api-version=5.1', {
        headers: httpOptions
      }).subscribe(data => {
        resolve(data);}, 
      err => {
        console.log(err);
      });
    });
  }

  getReleases() {
    return new Promise(resolve => {
      this.http.get(this.apiUrlRelease + '/release/releases?maxBuildsPerDefinition=10&api-version=5.1', {
        headers: httpOptions
      }).subscribe(data => {
        resolve(data);}, 
      err => {
        console.log(err);
      });
    });
  } 
}
