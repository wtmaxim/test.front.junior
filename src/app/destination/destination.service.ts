import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDestination } from './destination.model';
import { DestinationFirestore } from './destination.firestore';
import { map } from 'rxjs/operators';

@Injectable()
export class DestinationService {
	constructor(protected fs: DestinationFirestore) {}
	searchDestinations(clue: string = ''): Observable<IDestination[]> {
		return this.fs.getAll().pipe(
			map(destinations => destinations.filter(d => d.name.toLowerCase().startsWith(clue.toLowerCase()))),
		);

	}
	getDestinationById(id: string): Observable<IDestination> {
		return this.fs.getById(id);
	}
}
