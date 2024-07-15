import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/shared-components/navigation/navigation.component';
import { NotificationComponent } from './components/shared-components/notification/notification.component';
import { HeaderComponent } from './components/shared-components/header/header.component';
import { SidebarComponent } from './components/shared-components/sidebar/sidebar.component';
import { SelectComponent } from './components/shared-components/form-group/select/select.component';
import { OverviewComponent } from './components/pages/overview/overview.component';
import { MessagesComponent } from './components/pages/messages/messages.component';
import { SearchComponent } from './components/pages/search/search.component';
import { FilterComponent } from './components/pages/filter/filter.component';
import { HistoryComponent } from './components/pages/history/history.component';
import { AccountComponent } from './components/pages/account/account.component';
import { MainComponent } from './components/shared-components/main/main.component';
import { CardsComponent } from './components/shared-components/cards/cards.component';
import { CardComponent } from './components/shared-components/cards/card/card.component';
import { CardHeaderComponent } from './components/shared-components/cards/card/card-header/card-header.component';
import { CardMainComponent } from './components/shared-components/cards/card/card-main/card-main.component';
import { CardFooterComponent } from './components/shared-components/cards/card/card-footer/card-footer.component';
import { IconComponent } from './components/shared-components/icon/icon.component';
import { RatingsComponent } from './components/shared-components/ratings/ratings.component';
import { FilterPanelComponent } from './components/shared-components/filter-panel/filter-panel.component';
import { DynamicFormComponent } from './components/shared-components/form-group/dynamic-form/dynamic-form.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { metaReducers, reducers } from './reducer';
import * as fromEmployeeDetail from './reducer/employee-details/reducers/employee-details.reducer';
import { EmployeeDetailEffects } from './reducer/employee-details/effects/employee-details-effects';
import { provideHttpClient } from '@angular/common/http';
import { CloseOutsideClickDirective } from './directives/close-outside-click.directive';
import { ButtonGroupsComponent } from './components/shared-components/button-groups/button-groups.component';
import { ButtonComponent } from './components/shared-components/button-groups/button/button.component';
import { ResultsFilterComponent } from './components/shared-components/results-filter/results-filter.component';
import { ChooseTeamComponent } from './components/shared-components/choose-team/choose-team.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NotificationComponent,
    HeaderComponent,
    SidebarComponent,
    SelectComponent,
    OverviewComponent,
    MessagesComponent,
    SearchComponent,
    FilterComponent,
    HistoryComponent,
    AccountComponent,
    MainComponent,
    CardsComponent,
    CardComponent,
    CardHeaderComponent,
    CardMainComponent,
    CardFooterComponent,
    IconComponent,
    RatingsComponent,
    FilterPanelComponent,
    DynamicFormComponent,
    CloseOutsideClickDirective,
    ButtonGroupsComponent,
    ButtonComponent,
    ResultsFilterComponent,
    ChooseTeamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionSerializability: true,
        strictStateSerializability: true,
      },
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode }),
    StoreModule.forFeature(
      fromEmployeeDetail.employeeDetailsFeatureKey,
      fromEmployeeDetail.employeeDetailReducer
    ),
    EffectsModule.forFeature([EmployeeDetailEffects]),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
