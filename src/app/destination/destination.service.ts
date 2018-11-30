import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { IDestination } from './destination.model';
import { DestinationFirestore } from './destination.firestore';
import { tap } from 'rxjs/operators';

@Injectable()
export class DestinationService {
	constructor(protected fs: DestinationFirestore) {}
	searchDestinations(clue: string = ''): Observable<IDestination[]> {
		return this.fs.getAll();
	}
	getDestinationByName(name: string): Observable<IDestination> {
		return this.fs.getByName(name);
	}
}