import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/pages/overview/overview.component';
import { MessagesComponent } from './components/pages/messages/messages.component';
import { SearchComponent } from './components/pages/search/search.component';
import { FilterComponent } from './components/pages/filter/filter.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { AccountComponent } from './components/pages/account/account.component';

const routes: Routes = [
  {path: '', redirectTo: 'overview', pathMatch: 'full'},
  {path: 'overview', component: OverviewComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'search', component: SearchComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'account', component: AccountComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
