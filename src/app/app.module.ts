import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    HeaderComponent,
    FooterComponent,
    ListPageComponent,
    AddPageComponent,
    FavoritePageComponent,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
