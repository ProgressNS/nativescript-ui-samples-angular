import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaugesAnimationsComponent } from './animations/gauges-animations.component';
import { GaugesCustomizationComponent } from './customization/gauges-customization.component';
import { GaugesGettingStartedComponent } from './getting-started/gauges-getting-started.component';
import { GaugesScalesComponent } from './scales/gauges-scales.component';

export const routes: Routes = [
  { path: 'GaugesAnimationsComponent', component: GaugesAnimationsComponent },
  { path: 'GaugesCustomizationComponent', component: GaugesCustomizationComponent },
  { path: 'GaugesGettingStartedComponent', component: GaugesGettingStartedComponent },
  { path: 'GaugesScalesComponent', component: GaugesScalesComponent }
];