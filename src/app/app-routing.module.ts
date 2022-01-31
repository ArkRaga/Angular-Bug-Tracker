import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { WorkerPageComponent } from './pages/worker-page/worker-page.component';
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'worker', component: WorkerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
