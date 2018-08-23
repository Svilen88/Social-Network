import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { WallComponent } from './wall/wall.component';

const routes: Route[] = [
    { path: '', pathMatch: 'full', component: WallComponent },
    { path: 'wall', component: WallComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
})
export class ApplicationRoutingModule {}
