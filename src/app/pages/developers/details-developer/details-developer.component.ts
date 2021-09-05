import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DevelopersService } from '../shared/developers.service';

@Component({
  selector: 'app-details-developer',
  templateUrl: './details-developer.component.html',
  styleUrls: ['./details-developer.component.css']
})
export class DetailsDeveloperComponent implements OnInit {
  developer: any = {}

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private developersService: DevelopersService
  ) { }

  ngOnInit(): void {
    const idDeveloper = this.activatedRoute.snapshot.params['idDeveloper']
    if (idDeveloper) {
      this.developersService.getDeveloper(idDeveloper).subscribe((data) => {
        this.developer = data.response
        console.log(this.developer)
      })
    }
  }
}
