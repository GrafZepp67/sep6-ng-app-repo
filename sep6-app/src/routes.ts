import { Routes } from '@angular/router';
import { SectionDummyComponent } from './app/sections/section-dummy/section-dummy.component';

export const appRoutes: Routes = [
    { path: 'dummy', component: SectionDummyComponent },

    { path: '', redirectTo: '/dummy', pathMatch: 'full'}
];