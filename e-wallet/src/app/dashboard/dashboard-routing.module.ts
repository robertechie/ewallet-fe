import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { TranasctionComponent } from './tranasction/tranasction.component';
import { TransferComponent } from './transfer/transfer.component';
import { WalletComponent } from './wallet/wallet.component';
const routes: Routes = [
  {
  path:'',
    component:HomeComponent
  },
  {path:'transactiont',
  component:TranasctionComponent,},
  {path:'transfer',
  component:TransferComponent,},
  {path:'profile',
  component:ProfileComponent,},
  {path:'wallet',
  component:WalletComponent,},
  {path:'settings',
  component:SettingsComponent,}
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
