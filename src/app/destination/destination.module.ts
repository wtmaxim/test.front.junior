import { NgModule } from '@angular/core';
import { DestinationService } from './destination.service';
import { DestinationRoutingModule } from './destination.router';
import { DestinationComponent } from './destination.component';
import { DestinationThumbnailComponent, DestinationGalleryComponent } from './components';
import { DestinationResolver } from './destination.resolver';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { DestinationFirestore } from './destination.firestore';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		DestinationRoutingModule,
		AngularFirestoreModule,
		CommonModule,
	],
	providers: [
		DestinationFirestore,
		DestinationService,
		DestinationResolver,
	],
	declarations: [
		DestinationComponent,
		DestinationThumbnailComponent,
		DestinationGalleryComponent,
	],
	exports: [
		DestinationThumbnailComponent,
	]
})
export class DestinationModule {}
