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
	getByName(name: string) {
		return this.db.collection<IDestination>('/destinations', ref => ref.where('name', '==', name).limit(1)).valueChanges().pipe(
			map(results => results[0]),
			take(1),
		);
	}
}