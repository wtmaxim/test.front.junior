import { TestBed, inject } from '@angular/core/testing';
import { DestinationFirestore } from './destination.firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { MockFirestoreModule, MockFsCollection } from './firestore.mock.spec';
import { TestScheduler } from 'rxjs/testing';

import { paris } from './destination.mock.spec';

describe('DestinationFirestore', () => {
	let dfs: DestinationFirestore;
	let fs: AngularFirestore;
	let scheduler: TestScheduler;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MockFirestoreModule,
			],
			providers: [
				DestinationFirestore,
			]
		});
	});
	beforeEach(() => {
		// we use the marble synthax for testing our observables
		// https://github.com/ReactiveX/rxjs/blob/master/doc/marble-testing.md
		scheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	})
	beforeEach(inject([AngularFirestore, DestinationFirestore], (_fs: AngularFirestore, _dfs: DestinationFirestore) => {
		dfs = _dfs;
		fs = _fs;
	}));
	it('should be created', inject([DestinationFirestore], (_dfs: DestinationFirestore) => {
		expect(_dfs).toBeTruthy();
	}));
	
	describe('getAll', () => {
		it('should call db.collection', () => {
			spyOn(fs, 'collection').and.callThrough();
			dfs.getAll();
			expect(fs.collection).toHaveBeenCalled();
		});
		it('should only return the first value emited', () => {
			scheduler.run(helpers => {
				const { cold, expectObservable, expectSubscriptions } = helpers;
				
				const collection$ = cold('-p-e--p|', {e: [], p: [paris]});
				spyOn(fs, 'collection').and.returnValue(new MockFsCollection(collection$));
				const all$ = dfs.getAll();
				expectObservable(all$).toBe('-(p|)', {e: [], p: [paris]});
			});
		});
		
	});
	describe('search', () => {
		
	});
	describe('getById', () => {
		
	});
});
