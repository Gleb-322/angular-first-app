import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { FavoritePageComponent } from './pages/favorite-page/favorite-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  { path: 'list', component: ListPageComponent },
  { path: 'add', component: AddPageComponent },
  { path: 'favorite', component: FavoritePageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
