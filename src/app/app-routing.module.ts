import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from "./pages/page-one/page-one.component";
import {PageTwoComponent} from "./pages/page-two/page-two.component";

const routes: Routes = [
  {path: '', redirectTo: 'one', pathMatch: 'full'},
  {path: 'one', title: 'one', component: PageOneComponent},
  {path: 'two', title: 'two', component: PageTwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
