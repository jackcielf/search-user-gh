import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '../interfaces/GitHubUser';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  urlAPI = environment.urlApi;

  constructor(private http: HttpClient) {}

  searchUser(loginID: string): Observable<UserData> {
    const url = `${this.urlAPI}/${loginID}`;
    return this.http.get<UserData>(url);
  }
}
