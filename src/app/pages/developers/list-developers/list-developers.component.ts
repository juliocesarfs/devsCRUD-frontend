import { DevelopersService } from './../shared/developers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Developer } from 'src/app/shared/models/developer';


@Component({
  selector: 'app-list-developers',
  templateUrl: './list-developers.component.html',
  styleUrls: ['./list-developers.component.css']
})
export class ListDevelopersComponent implements OnInit {
  developers: Developer[] = []

  constructor(
    private developersService: DevelopersService,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.searchDevelopers()
  }

  searchDevelopers() {
    this.developersService.getDevelopers().subscribe(result => {
      this.developers = result.response
      console.log('Dados retornados pelo servidor', result.response)
    },
      erro => {
        console.error(erro)
      }
    )
  }

  routeToEdit(idDeveloper: string) {
    this.router.navigate([idDeveloper+'/edit'])
  }

  routeToDetails(idDeveloper: string) {
    this.router.navigate([idDeveloper+'/details'])
  }

  removeDeveloper(idDeveloper: string) {
    if (window.confirm('Confirmar remoção?')) {
      this.developersService.deleteDeveloper(idDeveloper).subscribe((data) => {
        this.searchDevelopers()
        window.alert('Developer Removido!')
      })
    }
  }

}
