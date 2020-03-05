import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule } from '../api';
import { ActivityService } from './activity.service';
import { ActivityThumbnailComponent } from './components/thumbnail/activity-thumbnail.component';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		ApiModule,
	],
	providers: [
		ActivityService,
    ],
    declarations: [
        ActivityThumbnailComponent,
    ],
    exports: [
        ActivityThumbnailComponent,
    ]
})
export class ActivityModule {}
