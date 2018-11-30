import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home';
import { DestinationModule } from './destination';

const routes = [
	{ path: 'home', loadChildren: () => HomeModule },
	{ path: 'destination', loadChildren: () => DestinationModule },
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
] as Routes;

@NgModule({
	imports: [
		RouterModule.forRoot(routes),
	],
	exports: [
		RouterModule,
	],
})
export class AppRoutingModule {}
