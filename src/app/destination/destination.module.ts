import { NgModule } from '@angular/core';
import { DestinationService } from './destination.service';
import { DestinationRoutingModule } from './destination.router';
import { DestinationComponent } from './destination.component';
import { DestinationThumbnailComponent } from './components';
import { DestinationResolver } from './destination.resolver';

@NgModule({
	imports: [
		DestinationRoutingModule,
	],
	providers: [
		DestinationService,
		DestinationResolver,
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
