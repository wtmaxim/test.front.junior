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
		const name = route.paramMap.get('name');
		return this.destinationService.getDestinationByName(name);
	}
}
