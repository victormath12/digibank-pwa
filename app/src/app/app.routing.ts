import { LoginModule } from './pages/login/login.module';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
   path: '',
   redirectTo: 'login',
   pathMatch: 'full'
  },
  {
   path: 'login',
   component: LoginModule,
  },
  {
   path: 'home',
   loadChildren: './pages/home/home.module#HomeModule',
  },
  {
   path: 'camera-capture',
   loadChildren: './pages/camera-capture/camera-capture.module#CameraCaptureModule',
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
