import { FormDeveloperComponent } from './pages/developers/form-developer/form-developer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { ListDevelopersComponent } from './pages/developers/list-developers/list-developers.component';
import { DetailsDeveloperComponent } from './pages/developers/details-developer/details-developer.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HeaderComponent } from './layouts/header/header.component';
import { SearchbarComponent } from './layouts/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    ListDevelopersComponent,
    DetailsDeveloperComponent,
    FooterComponent,
    HeaderComponent,
    FormDeveloperComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
