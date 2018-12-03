import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { IDestination } from './destination.model';
import { map, take } from 'rxjs/operators';

@Injectable()
export class DestinationFirestore {
	constructor(protected db: AngularFirestore) {}
	getAll() {
		return this.db.collection<IDestination>('/destinations').valueChanges().pipe(take(1));
	}
	search(clue = '') {
		return this.db.collection<IDestination>('/destinations', ref => ref.orderBy('name')
		).valueChanges().pipe(
			// cant filter properly from the firebbase part, so we have to load all and filter client side
			map(destinations => destinations.filter(d => d.name.toLowerCase().startsWith(clue.toLowerCase()))),
			take(1),
		);

	}
	getById(id: string) {
		return this.db.collection<IDestination>('/destinations', ref => ref.where('id', '==', id).limit(1)).valueChanges().pipe(
			map(results => results[0]),
			take(1),
		);
	}
}