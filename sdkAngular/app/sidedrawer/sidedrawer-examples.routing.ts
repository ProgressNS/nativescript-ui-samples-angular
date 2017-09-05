import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SideDrawerEventsComponent } from './events/events.component';
import { SideDrawerGettingStartedComponent } from './getting-started/getting-started.component';
import { SideDrawerOverNavigationComponent } from './over-navigation/over-navigation.component';
import { SecondSideDrawerOverNavigationComponent } from './over-navigation/second-page/second-over-navigation.component';
import { SideDrawerPositionComponent } from './position/position.component';
import { SideDrawerTransitionsComponent } from './transitions/transitions.component';

export const routes: Routes = [
  { path: 'SideDrawerEventsComponent', component: SideDrawerEventsComponent },
  { path: 'SideDrawerGettingStartedComponent', component: SideDrawerGettingStartedComponent },
  { path: 'SideDrawerOverNavigationComponent', component: SideDrawerOverNavigationComponent },
  { path: 'SecondSideDrawerOverNavigationComponent', component: SecondSideDrawerOverNavigationComponent },
  { path: 'SideDrawerPositionComponent', component: SideDrawerPositionComponent },
  { path: 'SideDrawerTransitionsComponent', component: SideDrawerTransitionsComponent }
];