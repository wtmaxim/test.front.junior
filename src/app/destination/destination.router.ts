import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DestinationComponent } from './destination.component';

const routes = [
	{ path: ':id', component: DestinationComponent },
] as Routes;

@NgModule({
	imports: [
		RouterModule.forChild(routes),
	],
	exports: [
		RouterModule,
	],
})
export class DestinationRoutingModule {}
