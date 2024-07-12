import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard, AuthenticateGuard } from '../core/service/service.index';
import { FeatureModuleComponent } from './feature-module.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: FeatureModuleComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'admin',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'patients',
        canActivate: [AuthenticateGuard],
        loadChildren: () =>
          import('./patients/patients.module').then((m) => m.PatientsModule),
      },
      {
        path: 'doctors',
        canActivate: [AuthenticateGuard],
        loadChildren: () =>
          import('./doctors/doctors.module').then((m) => m.DoctorsModule),
      },
      {
        path: 'pharmacy',
        canActivate: [AuthenticateGuard],
        loadChildren: () =>
          import('./pharmacy/pharmacy.module').then((m) => m.PharmacyModule),
      },
      {
        path: 'pharmacy-admin',
        canActivate: [AuthenticateGuard],
        loadChildren: () =>
          import('./pharmacy-admin/pharmacy-admin.module').then(
            (m) => m.PharmacyAdminModule
          ),
      },
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('./blog/blog.module').then((m) => m.BlogModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureModuleRoutingModule {}
