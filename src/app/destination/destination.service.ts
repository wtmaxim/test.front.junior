import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { marseille, paris } from './destination.bogus';

@Injectable()
export class DestinationService {
	searchDestinations(clue: string = '') {
		return of([paris, marseille]);
	}
}