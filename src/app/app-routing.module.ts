import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { CardsComponent } from './cards/cards.component';
import { BlocksComponent } from './blocks/blocks.component';
import { PricingComponent } from './pricing/pricing.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'forms',
        component: FormsComponent
    },
    {
        path: 'cards',
        component: CardsComponent
    },
    {
        path: 'blocks',
        component: BlocksComponent
    },
    {
        path: 'pricing',
        component: PricingComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }