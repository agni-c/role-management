import { PermissionName, ROLE, permissions } from '@/constant/role';
import { useAppSelector } from '@/store/hooks';
import { selectUser } from '@/store/userSlice';

export const usePermissions = () => {
	const userRole = useAppSelector(selectUser).role as ROLE;

	const hasPermission = (permission: PermissionName) => {
		return permissions[permission].includes(userRole);
	};

	return { hasPermission };
};
