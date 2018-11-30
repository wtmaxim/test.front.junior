import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { marseille, paris, all, dictionary } from './destination.bogus';
import { IDestination } from './destination.model';

@Injectable()
export class DestinationService {
	searchDestinations(clue: string = ''): Observable<IDestination[]> {
		return of(all);
	}
	getDestination(destinationId: number): Observable<IDestination> {
		return of(dictionary[destinationId]);
	}
}