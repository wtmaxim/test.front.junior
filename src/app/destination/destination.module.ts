import { NgModule } from '@angular/core';
import { DestinationService } from './destination.service';
import { DestinationRoutingModule } from './destination.router';
import { DestinationComponent } from './destination.component';
import { DestinationThumbnailComponent } from './components';
import { DestinationResolver } from './destination.resolver';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { DestinationFirestore } from './destination.firestore';

@NgModule({
	imports: [
		DestinationRoutingModule,
		AngularFirestoreModule,
	],
	providers: [
		DestinationFirestore,
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
