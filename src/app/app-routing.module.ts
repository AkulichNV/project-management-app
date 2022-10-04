import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BoardDetailsComponent } from "./board-details/board-details.component";
import { BoardsComponent } from "./boards/boards.component";

import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'boards', children: [
    { path: '', component: BoardsComponent },
    { path: ':id', component: BoardDetailsComponent },
    // { path: 'new', component: RecipeEditComponent },
    // { path: ':id/edit', component: RecipeEditComponent },
  ] },
  // { path: 'boards/:id', component: BoardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
