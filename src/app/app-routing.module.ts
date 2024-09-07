import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContentLayoutComponent } from './layout/components/content-layout/content-layout.component';

const routes: Routes = [
  {
    path:'',
    component: ContentLayoutComponent,
    children: [
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'movie/:id',
        loadChildren: () => import('./detailMovie/detailMovie.module').then(m => m.DetailMovieModule)
      },
      {
        path: 'new-movie',
        loadChildren: () => import('./addMovie/addMovie.module').then(m => m.AddMovieModule)
      },
      {
          path: '**',
          redirectTo: 'home',
          pathMatch: 'full',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
