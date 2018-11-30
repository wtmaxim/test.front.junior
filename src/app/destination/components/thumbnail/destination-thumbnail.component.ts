import { Component, Input } from '@angular/core';
import { IDestination } from '../../destination.model';

@Component({
	selector: 'app-destination-thumbnail',
	templateUrl: './destination-thumbnail.component.html',
	styleUrls: []
})
export class DestinationThumbnailComponent {
	@Input() destination: IDestination;
}
