import {useCallback, useEffect, useMemo} from 'react';
import { useForm } from 'react-hook-form';
import {useHistory, useParams} from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

import Input from 'components/common/Input';
import Container from 'components/sections/Container';

import { userSchema } from 'config/resolvers';
import { UserType } from 'store/identity/user';

import SuggestionsSlider from './suggestedUser';

const ManageUser = (): JSX.Element => {
    const history = useHistory();
    const { id }: { id: string } = useParams();
    const userData = JSON.parse(localStorage.getItem('user'))

    const {
        reset,
        control,
        handleSubmit,
    } = useForm<UserType>({
        resolver: userSchema,
    });


    useEffect(() => {
        if (id) {
            reset(userData)
        }
    }, [id]);

    const onSubmit = useCallback(() => {
        // If api willing to possibility, we can change, or create new instance
        // For CRUD operations
    }, [id])

    const buttons = useMemo((): Record<string, unknown>[] => {
        return [
            {
                children: 'Close',
                variant: 'bordered',
                onClick: () => history.push('/'),
            },
            {
                children: 'Create',
                variant: 'contained',
                onClick: handleSubmit(onSubmit),
            }
        ];
    }, [id,  handleSubmit, history]);

    return (
        <Container title="User Details" actions={buttons}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Stack direction="column" spacing="30px" width="400px">
                    <Divider  />
                    <Input
                        required
                        control={control}
                        name="first_name"
                        label="Fist Name"
                    />
                    <Input
                        required
                        control={control}
                        name="last_name"
                        label="Last Name"
                    />
                    <Input
                        required
                        control={control}
                        name="email"
                        label="Email"
                    />

                    <Input
                        required
                        control={control}
                        name="gender"
                        label="Gender"
                    />
                </Stack>
                <Stack ml={2} direction="column" spacing="30px" width="400px">
                    <Divider  />
                    <Input
                        required
                        control={control}
                        name="username"
                        label="User Name"
                    />
                    <Input
                        required
                        control={control}
                        name="social_insurance_number"
                        label="Social Insurance Number"
                    />
                    <Input
                        required
                        control={control}
                        name="date_of_birth"
                        label="Birth date"
                    />
                    <Input
                        required
                        control={control}
                        name="phone_number"
                        label="Phone Number"
                    />
                </Stack>
                <Avatar src={userData.avatar} sx={{ width: 400, height: 400 }}/>
            </Box>
            <Divider sx={{m: 2}} />
            <SuggestionsSlider />
        </Container>
    );
};

export default ManageUser;