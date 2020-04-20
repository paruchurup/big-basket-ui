import { Ailment } from './ailment';
import { Role } from './role';

export class User {
    name: string;
    username: string;
    email: string;
    mobile: number;
    age: number;
    ailments: Ailment[] = [];
    roles: Role[] = [];
    password: string;
    confirmPassword: string;
    access_token: string;
}