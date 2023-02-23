import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { LoginGuard } from './core/guards/login.guard';
import { UsersResolver } from './core/resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'login',
    resolve: {
      users: UsersResolver
    },
    canActivate: [LoginGuard],
    component: LoginComponent
  },
  {
    path: 'articles',
    canActivate: [AuthGuard],
    loadChildren: () => import('../app/articles/articles.module').then(m => m.ArticlesModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
