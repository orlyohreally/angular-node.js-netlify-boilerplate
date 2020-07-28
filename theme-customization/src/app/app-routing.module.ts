import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: 'palettes',
        component: ColorPaletteComponent,
        data: { title: 'Palettes' }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: { title: 'Typography' }
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/palettes'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
