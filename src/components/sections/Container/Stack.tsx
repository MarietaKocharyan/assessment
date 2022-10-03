import Stack from '@mui/material/Stack';

interface ContainerStackProps {
    children: JSX.Element | JSX.Element[];
}

const ContainerStack = ({ children }: ContainerStackProps): JSX.Element => (
    <Stack width="400px" spacing="30px">
        {children}
    </Stack>
);

export default ContainerStack;
