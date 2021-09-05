import { MessageResponse } from 'src/app/shared/interfaces/MessageResponse';
import { Developer } from './../../../shared/models/developer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevelopersService } from '../shared/developers.service';


@Component({
  selector: 'app-form-developer',
  templateUrl: './form-developer.component.html',
  styleUrls: ['./form-developer.component.css']
})
export class FormDeveloperComponent implements OnInit {
  developer: any = {}
  create: Boolean = true

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private developersService: DevelopersService
  ) { }

  ngOnInit(): void {
    const idDeveloper = this.activatedRoute.snapshot.params['idDeveloper']
    if (idDeveloper) {
      this.developersService.getDeveloper(idDeveloper).subscribe((data: MessageResponse) => {
        this.developer = data.response
        this.create = false
        console.log(this.developer)
      })
    }
  }

  saveDeveloper(){
    let confirmData = this.confirmData(this.developer)
    if(confirmData) {
      this.developersService.saveDeveloper(this.developer).subscribe ( data => {
        window.alert('Developer incluido com sucesso!')
        this.router.navigate(['/'])
      }, erro => {
          console.log('erro salvarSurvivor', erro);
          window.alert(erro);
      })
    }
    else {
      window.alert('Por favor preencha todos os campos!')
    }
  }

  confirmData(developer: Developer): Boolean {
    if (developer.name == null ||
      developer.imageUrl == null ||
      developer.about == null) {
        return false
      }

    return true
  }
}
