import { usePermissions } from '@/hooks/usePermissions';
import { useAppSelector } from '@/store/hooks';
import { selectUser } from '@/store/userSlice';
import React from 'react';

const UserPage = () => {
	const user = useAppSelector(selectUser);
	const { hasPermission } = usePermissions();
	return (
		<div>
			<h1>
				{user.firstName} {user.lastName} - {user.role}
			</h1>
			{hasPermission('user.delete') && <button>Delete User</button>}
		</div>
	);
};

export default UserPage;
