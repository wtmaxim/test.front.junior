import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDestination } from './destination.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class DestinationService {
	constructor(protected http: HttpClient) {}
	searchDestinations(clue: string = ''): Observable<IDestination[]> {
		return this.http.get<IDestination[]>(`${environment.serverUrl}/api/destinations?name=like,${clue}`);
	}
	getDestinationById(id: string): Observable<IDestination> {
		return this.http.get<IDestination>(`${environment.serverUrl}/api/destinations/${id}`);
	}
}
