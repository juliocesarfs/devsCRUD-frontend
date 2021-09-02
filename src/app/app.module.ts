import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ListDevelopersComponent } from './pages/developers/list-developers/list-developers.component';
import { FormDevelopersComponent } from './pages/developers/form-developers/form-developers.component';
import { DetailsDeveloperComponent } from './pages/developers/details-developer/details-developer.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SearchComponent } from './layouts/search/search.component';
import { FormDeveloperComponent } from './developers/form-developer/form-developer.component';
import { SearchbarComponent } from './layouts/searchbar/searchbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    ListDevelopersComponent,
    FormDevelopersComponent,
    DetailsDeveloperComponent,
    FooterComponent,
    HeaderComponent,
    SearchComponent,
    FormDeveloperComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
