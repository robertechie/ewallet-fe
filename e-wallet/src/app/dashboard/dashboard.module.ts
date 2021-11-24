import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { TransferComponent } from './transfer/transfer.component';
import { TranasctionComponent } from './tranasction/tranasction.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { WalletComponent } from './wallet/wallet.component';


@NgModule({
  declarations: [
    HomeComponent,
    TransferComponent,
    TranasctionComponent,
    ProfileComponent,
    SettingsComponent,
    WalletComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
