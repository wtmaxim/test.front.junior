import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDestination } from './destination.model';
import { DestinationFirestore } from './destination.firestore';

@Injectable()
export class DestinationService {
	constructor(protected fs: DestinationFirestore) {}
	searchDestinations(clue: string = ''): Observable<IDestination[]> {
		return this.fs.search(clue);
	}
	getDestinationByName(name: string): Observable<IDestination> {
		return this.fs.getByName(name);
	}
}