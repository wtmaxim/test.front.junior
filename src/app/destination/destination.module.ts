import { NgModule } from '@angular/core';
import { DestinationService } from './destination.service';
// import { HttpClientModule } from '@angular/common/http';

@NgModule({
	imports: [
		// HttpClientModule,
	],
	providers: [
		DestinationService,
	]
})
export class DestinationModule {}
