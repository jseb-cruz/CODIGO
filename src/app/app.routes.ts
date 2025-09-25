import { Routes } from '@angular/router';
import { Shell } from './ui/layout/shell/shell';
export const routes: Routes = [
    {
        path: '',
        component: Shell,
        children: [
            {
                path: 'equipment',
                loadComponent: () => import('./ui/features/equipment/pages/equipment-list/equipment-list.page').then(m => m.EquipmentListPage),
            },
            { path: '', pathMatch: 'full', redirectTo: 'equipment' },
            { path: '**', redirectTo: 'equipment' },
        ],
    },
];
