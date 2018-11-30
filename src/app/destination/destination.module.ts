import { NgModule } from '@angular/core';
import { DestinationService } from './destination.service';
import { DestinationRoutingModule } from './destination.router';
import { DestinationComponent } from './destination.component';
import { DestinationThumbnailComponent } from './components';

@NgModule({
	imports: [
		DestinationRoutingModule,
	],
	providers: [
		DestinationService,
	],
	declarations: [
		DestinationComponent,
		DestinationThumbnailComponent,
	],
	exports: [
		DestinationThumbnailComponent,
	]
})
export class DestinationModule {}
