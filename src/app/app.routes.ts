import { Routes } from '@angular/router';
import { Home } from '../components/home/home';
import { Contacto } from '../components/contacto/contacto';
import { CharacterMultipleRole } from '../components/character-multiple-role/character-multiple-role';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'contacto', component: Contacto},
    {path: 'multiple-role', component: CharacterMultipleRole}
];
