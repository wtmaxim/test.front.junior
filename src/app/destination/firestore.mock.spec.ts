import { TestBed, inject } from '@angular/core/testing';
import { NgModule, Injectable } from '@angular/core';
import { of } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';

export class MockFsCollection {
	constructor(protected _valueChangesObs = of([])) {}
	valueChanges() {
		return this._valueChangesObs;
	}
}
@Injectable()
export class MockFsDb {
	collection(path: string, fn) {
		return new MockFsCollection();
	}
}
@NgModule({
	providers: [
		{ provide: AngularFirestore, useClass: MockFsDb },
	]
})
export class MockFirestoreModule {}

describe('mock firestore module', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MockFirestoreModule,
			],
			providers: []
		});
	});

	it('should provide an angular firestore', inject([AngularFirestore], (fs: AngularFirestore) => {
		expect(fs).toBeTruthy();
	}));
});
