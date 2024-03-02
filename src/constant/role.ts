export enum ROLE {
	ADMIN = 'admin',
	MAINTAINER = 'maintainer',
	USER = 'user'
}

export const permissions = {
	'user.edit': [ROLE.ADMIN, ROLE.MAINTAINER],
	'user.delete': [ROLE.ADMIN],
	'user.create': [ROLE.ADMIN],
	'user.read': Object.values(ROLE)
};

export const routes = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	USERS: '/users',
	EDIT_USER: '/edit-user'
};

export type PermissionName = keyof typeof permissions;
