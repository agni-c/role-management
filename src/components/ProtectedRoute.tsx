import { ROLE, routes } from '@/constant/role';
import { usePermissions } from '@/hooks/usePermissions';
import React from 'react';
import type { PermissionName } from '@/constant/role';
import { useRouter } from 'next/navigation';

type ProtectedRouteProps = {
	permission: PermissionName;
	children: React.ReactNode;
};
const ProtectedRoute = ({
	permission,
	children
}: ProtectedRouteProps) => {
	const router = useRouter();
	const { hasPermission } = usePermissions();
	if (!hasPermission(permission)) {
		router.push(routes.HOME);
		return null;
	}
	return <>{children}</>;
};

export default ProtectedRoute;
