import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/autho-guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { WorkerPageComponent } from './pages/worker-page/worker-page.component';
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'worker', canActivate: [AuthGuard], component: WorkerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
