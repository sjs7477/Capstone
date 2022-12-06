import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import { LoginComponent } from './components/login/login.component'
import { RegisterComponent } from './components/register/register.component'
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component'
import {AuthguardGuard} from "./auth/authguard.guard";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {OrderDetailsComponent} from "./components/order-details/order-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'shop', component: ShoppingCartComponent, canActivate:[AuthguardGuard] },
  {path: 'cart', component:CartComponent, canActivate:[AuthguardGuard]},
  {path: 'checkout', component:CheckoutComponent,canActivate:[AuthguardGuard]},
  {path:'orders', component:OrderDetailsComponent, canActivate:[AuthguardGuard]},
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
