import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientDetailComponent } from './screens/client-detail/client-detail.component';
import { ClientDetailWithIdComponent } from './screens/client-detail-with-id/client-detail-with-id.component';
import { ClientDetailSecretComponent } from './screens/client-detail-secret/client-detail-secret.component';
import { AboutusComponent } from './screens/aboutus/aboutus.component';

const routes: Routes = [
  { path: "", component: ClientDetailComponent },
  { path: "ClientDetailWithId", component: ClientDetailWithIdComponent },
  { path: "ClientDetailSecret", component: ClientDetailSecretComponent },
  { path: "AboutAuthor", component: AboutusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
