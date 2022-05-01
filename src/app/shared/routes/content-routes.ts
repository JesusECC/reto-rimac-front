import { Routes } from '@angular/router';

export const content: Routes = [
  
  // {
  //   path: 'blog',
  //   loadChildren: './components/blog/blog.module#BlogModule',
  //   data: {
  //     breadcrumb: "Blog"
  //   }
  // },
  {
    path: '',
    loadChildren: () => import('../../components/components.module').then(m => m.componentsModule),
    data: {
      breadcrumb: "Blog Pedido"
    }
  }
];