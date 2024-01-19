import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  nickname: string = '';
  
  constructor(private router: Router) { }
  
  ngOnInit() {}

  onSubmit(): void {
    if (this.nickname) {
      this.router.navigate(['/search/result', this.nickname]);
    } else {
      alert("Pesquisa inválido!");
    }
  }
}
