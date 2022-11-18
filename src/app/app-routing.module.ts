import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UnloggedUsersOnlyGuard } from './services/unlogged-users-only.guard';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { LoggedUsersOnlyGuard } from './services/logged-users-only.guard';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [UnloggedUsersOnlyGuard],
  },
  {
    path: 'favorites',
    component: FavoritesPageComponent,
    canActivate: [LoggedUsersOnlyGuard],
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [LoggedUsersOnlyGuard],
  },
  { path: '', component: HomePageComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
