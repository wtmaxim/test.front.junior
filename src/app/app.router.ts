import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeModule } from './home';

const routes = [
	{ path: 'home', loadChildren: () => HomeModule },
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
