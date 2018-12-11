import { TestBed, inject } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

import { paris, marseille } from './destination.mock.spec';
import { DestinationService } from './destination.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DestinationService', () => {
	let service: DestinationService;
	let scheduler: TestScheduler;
	let httpCtrl: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
			],
			providers: [
				DestinationService,
			]
		});
		httpCtrl = TestBed.get(HttpTestingController);
	});
	beforeEach(() => {
		// we use the marble synthax for testing our observables
		// https://github.com/ReactiveX/rxjs/blob/master/doc/marble-testing.md
		scheduler = new TestScheduler((actual, expected) => {
			expect(actual).toEqual(expected);
		});
	});
	beforeEach(inject([DestinationService], (_service: DestinationService) => {
		service = _service;
	}));
	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	// describe('searchDestinations', () => {
	// 	it('should call dfs.getall', () => {
	// 		spyOn(dfs, 'getAll').and.callThrough();
	// 		service.searchDestinations();
	// 		expect(dfs.getAll).toHaveBeenCalled();
	// 	});
	// 	it('should return the results when clue=""', () => {
	// 		scheduler.run(helpers => {
	// 			const { cold, expectObservable } = helpers;

	// 			spyOn(dfs, 'getAll').and.returnValue(cold('-a', { a: [paris, marseille] }));
	// 			const search$ = service.searchDestinations();

	// 			expectObservable(search$).toBe('-a', { a: [paris, marseille] });
	// 		});
	// 	});
	// 	it('should filter the results', () => {
	// 		scheduler.run(helpers => {
	// 			const { cold, expectObservable } = helpers;

	// 			spyOn(dfs, 'getAll').and.returnValue(cold('-a', { a: [paris, marseille] }));
	// 			const search$ = service.searchDestinations('par');

	// 			expectObservable(search$).toBe('-p', { p: [paris] });
	// 		});
	// 	});
	// });
	describe('getDestinationById', () => {
		it('should call http.get', () => {
			const id = '12';

			service.getDestinationById(id).subscribe(d => d);

			const req = httpCtrl.expectOne(`/api/destination/${id}`);
			expect(req.request.method).toEqual('GET');
			req.flush(paris);
		});
		it('should return the result unscathed', () => {
			const id = '12';

			service.getDestinationById(id).subscribe(d => {
				expect(d).toBe(paris);
			});

			const req = httpCtrl.expectOne(`/api/destination/${id}`);
			req.flush(paris);
		});
	});
});
