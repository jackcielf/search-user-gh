import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/shared/interfaces/GitHubUser';
import { GithubService } from 'src/app/shared/services/github.service';

@Component({
  selector: 'app-result-search',
  templateUrl: './result-search.component.html',
  styleUrls: ['./result-search.component.scss']
})
export class ResultSearchComponent implements OnInit {
  loading: boolean = false;
  userdata: UserData = {
    id: 0,
    name: "",
    nickname: "",
    bio: "",
    login: "",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    company: "",
    location: "",
    avatar_url: "",
    created_at: "",
    updated_at: "",
  };

  constructor(
    private gitHubService: GithubService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loading = true; 
    const loginID = this.route.snapshot.paramMap.get("nick");

    this.gitHubService.searchUser(loginID).subscribe(
      (userResponse: UserData) => {
        this.userdata = userResponse;
        this.loading = false;
      },
      (errorResponse) => {
        console.error("Error fetching user data!");
        this.loading = false;
      }
    );
  }
}
