import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.router';
import { environment } from '../environments/environment';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AngularFireModule.initializeApp(environment.firebase),
		AppRoutingModule,
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [
		AppComponent,
	],
})
export class AppModule {}
