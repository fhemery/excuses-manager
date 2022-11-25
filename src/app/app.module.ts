import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { ExcusesModule } from './components/excuses/excuses.module';
import { HttpClientModule } from '@angular/common/http';
import { HomePageModule } from './pages/home-page/home-page.module';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { en } from './translations/en';
import { environment } from '../environments/environment';
import { HeaderModule } from './components/header/header.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FooterModule } from './components/footer/footer.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FavoritesPageModule } from './pages/favorites-page/favorites-page.module';
import { ProfilePageModule } from './pages/profile-page/profile-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ExcusesModule,
    HttpClientModule,
    HomePageModule,
    FavoritesPageModule,
    ProfilePageModule,
    HeaderModule,
    TranslateModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FooterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setTranslation('en', en);
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
