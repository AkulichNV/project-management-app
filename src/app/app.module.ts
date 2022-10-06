import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BoardsComponent } from './boards/boards.component';
import { FooterComponent } from './footer/footer.component';
import { BoardDetailsComponent } from './board-details/board-details.component';
import { BoardCardComponent } from './boards/board-card/board-card.component';
import { AddNewBoardComponent } from './boards/add-new-board/add-new-board.component';
import { AddNewBoardDialogComponent } from './boards/add-new-board-dialog/add-new-board-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { DemoMaterialModule } from '../material-module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AllBoardsMenuComponent } from './board-details/all-boards-menu/all-boards-menu.component';
import { BoardColumnComponent } from './board-details/board-column/board-column.component';
import { BoardTaskComponent } from './board-details/board-column/board-task/board-task.component';
import { AppRoutingModule } from './app-routing.module';
import { AddNewColumnComponent } from './board-details/add-new-column/add-new-column.component';
import { AddNewColumnDialogComponent } from './board-details/add-new-column-dialog/add-new-column-dialog.component';
import { AddNewTaskComponent } from './board-details/board-column/add-new-task/add-new-task.component';
import { AddNewTaskDialogComponent } from './board-details/board-column/add-new-task-dialog/add-new-task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BoardsComponent,
    FooterComponent,
    BoardDetailsComponent,
    BoardCardComponent,
    AddNewBoardComponent,
    AddNewBoardDialogComponent,
    AllBoardsMenuComponent,
    BoardColumnComponent,
    BoardTaskComponent,
    AddNewColumnComponent,
    AddNewColumnDialogComponent,
    AddNewTaskComponent,
    AddNewTaskDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    DemoMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
