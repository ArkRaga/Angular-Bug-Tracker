import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BugReportComponent } from './components/bug-report/bug-report.component';
import { BugCardComponent } from './components/bug-card/bug-card.component';
import { WorkerPageComponent } from './pages/worker-page/worker-page.component';

@NgModule({
  declarations: [AppComponent, MainPageComponent, BugReportComponent, BugCardComponent, WorkerPageComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
