import { TestBed, inject } from '@angular/core/testing';
import { DestinationFirestore } from './destination.firestore';
import { AngularFirestore } from 'angularfire2/firestore';
import { MockFirestoreModule } from './firestore.mock.spec';
import { TestScheduler } from 'rxjs/testing';

import { paris, marseille } from './destination.mock.spec';
import { DestinationService } from './destination.service';

describe('DestinationService', () => {
	let service: DestinationService;
	let dfs: DestinationFirestore;
	let scheduler: TestScheduler;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MockFirestoreModule,
			],
			providers: [
				DestinationFirestore,
				DestinationService,
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
	beforeEach(inject([DestinationFirestore, DestinationService], (_dfs: DestinationFirestore, _service: DestinationService) => {
		dfs = _dfs;
		service = _service;
	}));
	it('should be created', () => {
		expect(service).toBeTruthy();
	});
	
	describe('searchDestinations', () => {
		it('should call dfs.getall', () => {
			spyOn(dfs, 'getAll').and.callThrough();
			service.searchDestinations();
			expect(dfs.getAll).toHaveBeenCalled();
		});
		it('should return the results when clue=""', () => {
			scheduler.run(helpers => {
				const { cold, expectObservable } = helpers;

				spyOn(dfs, 'getAll').and.returnValue(cold('-a', { a: [paris, marseille] }));
				const search$ = service.searchDestinations();

				expectObservable(search$).toBe('-a', { a: [paris, marseille] })
			});
		});
		it('should filter the results', () => {
			scheduler.run(helpers => {
				const { cold, expectObservable } = helpers;

				spyOn(dfs, 'getAll').and.returnValue(cold('-a', { a: [paris, marseille] }));
				const search$ = service.searchDestinations('par');

				expectObservable(search$).toBe('-p', { p: [paris] })
			});
		});
	});
	describe('getDestinationById', () => {
		it('should call dfs.getbyid', () => {
			spyOn(dfs, 'getById').and.callThrough();
			service.getDestinationById(paris.id);
			expect(dfs.getById).toHaveBeenCalled();
		});
		it('should call dfs.getbyid and return it unscathed', () => {
			scheduler.run(helpers => {
				const { cold, expectObservable } = helpers;

				spyOn(dfs, 'getById').and.returnValue(cold('-p', { p: paris }));
				const getById$ = service.getDestinationById(paris.id);

				expectObservable(getById$).toBe('-p', { p: paris })
			});
		});
	});
});
