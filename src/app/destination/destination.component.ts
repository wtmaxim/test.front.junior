import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDestination } from './destination.model';

@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit {
	destination: IDestination;
	get bgImg() { return `url('assets/img/${this.destination.img || 'placeholder'}/bg.jpg')`; }
	constructor(
		protected route: ActivatedRoute,
	) {}
	ngOnInit() {
		this.route.data
		.subscribe((data: { destination: IDestination }) => {
			this.destination = data.destination;
		});
	}
}
