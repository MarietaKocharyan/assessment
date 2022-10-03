import {useEffect, useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import { Typography } from '@mui/material';

import Container from 'components/sections/Container';
import DataGrid, { GridRowParams } from 'components/common/DataGrid';

import { useUsersPaged } from "store/identity/user";

const columns: Record<string, string> = {
    first_name: 'Fist Name',
    last_name: 'Last Name',
    date_of_birth: 'Date of Birth',
    email: 'Email',
    gender: 'Gender',
    phone_number: 'Phone Number',
    avatar: 'Image'
};

const Dashboard = (): JSX.Element => {
    const [usersData, usersActions] = useUsersPaged();
    const history = useHistory();

    useEffect(() => {
        usersActions.read(100);
    }, [])

    const handleRowClick = useCallback(
        (user: GridRowParams) => {
            history.push(`/user/${user.id}`);
            localStorage.setItem('user', JSON.stringify(user.row))
        },
        [history]
    );

    return (
        <Container title="ZOOM GRAPHICS test assignment" stickyHeader >
            <Typography variant="h3" m={2}>All Employees List</Typography>
            <DataGrid columns={columns}
                      rows={usersData?.data} onRowClick={handleRowClick} />
        </Container>
    );
};

export default Dashboard;
