import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionLoginComponent } from './sections/section-login/section-login.component';
import { SectionHomeComponent } from './sections/section-home/section-home.component';
import { AuthGuard } from "./services/auth-service/guard/auth.guard";
import { SecureInnerPagesGuard } from "./services/auth-service/guard/secure-inner-pages.guard";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'login', component: SectionLoginComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'dashboard', component: SectionHomeComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }