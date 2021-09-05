import { DevelopersService } from './../../pages/developers/shared/developers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  filter: string = ''

  constructor(private router: Router,
    private developersService: DevelopersService) { }

  ngOnInit(): void {
  }

  routeToCreate() {
    this.router.navigate(['/create'])
  }

  searchDevelopers() {
    console.log(this.filter)
    this.developersService.findDevelopers(this.filter).subscribe(result => {
      console.log('Dados retornados pelo servidor', result)
    })
  }

}
