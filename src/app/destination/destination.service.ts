import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDestination } from './destination.model';
import { DestinationFirestore } from './destination.firestore';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DestinationService {
	constructor(protected fs: DestinationFirestore, protected http: HttpClient) {}
	searchDestinations(clue: string = ''): Observable<IDestination[]> {
		// return this.fs.getAll().pipe(
		// 	map(destinations => destinations.filter(d => d.name.toLowerCase().startsWith(clue.toLowerCase()))),
		// );
		return this.http.get<IDestination[]>(`//localhost:3000/api/destinations?name=like,${clue}`);
	}
	getDestinationById(id: string): Observable<IDestination> {
		// return this.fs.getById(id);
		return this.http.get<IDestination>(`//localhost:3000/api/destinations/${id}`);
	}
}
