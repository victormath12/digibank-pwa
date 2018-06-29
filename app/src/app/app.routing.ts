import { LoginModule } from './pages/login/login.module';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginModule },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfileModule' },
  { path: 'send-money', loadChildren: './pages/send-money/send-money.module#SendMoneyModule' },
  { path: 'receive-money', loadChildren: './pages/receive-money/receive-money.module#ReceiveMoneyModule' },
  { path: 'pay-bill', loadChildren: './pages/pay-bill/pay-bill.module#PayBillModule' },
  { path: 'near-branches', loadChildren: './pages/near-branches/near-branches.module#NearBranchesModule' }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
