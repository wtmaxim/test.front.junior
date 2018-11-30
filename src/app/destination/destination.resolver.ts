import { Injectable } from '@angular/core';
import { DestinationService } from './destination.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { IDestination } from './destination.model';

@Injectable()
export class DestinationResolver implements Resolve<IDestination> {
	constructor(
		protected destinationService: DestinationService,
	) {}
	resolve(route: ActivatedRouteSnapshot) {
		const destinationId = parseInt(route.paramMap.get('destinationId'), 10);
		return this.destinationService.getDestination(destinationId);
	}
}
