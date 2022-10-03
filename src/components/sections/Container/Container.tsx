import { ReactChild } from 'react';
import clsx from 'clsx';

import { SxProps } from '@mui/system';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

import useStyles from './styles';
import ContainerTitle from './Title';

interface ContainerProps {
    sx?: SxProps;
    title?: string;
    className?: string;
    titleRole?: string;
    withDivider?: boolean;
    stickyHeader?: boolean;
    actions?: Record<string, unknown>[];
    children?: JSX.Element | JSX.Element[] | ReactChild | ReactChild[];
}

const Container = ({
    sx,
    title,
    actions,
    children,
    className,
    titleRole,
    withDivider,
    stickyHeader,
}: ContainerProps): JSX.Element => {
    const classes = useStyles({ stickyHeader });

    return (
        <Paper elevation={0} className={clsx(classes.paper, className)} sx={sx}>
            <Box className={classes.header} sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box className={classes.headerContent}>
                    <ContainerTitle role={titleRole}>{title}</ContainerTitle>
                    <Stack spacing="12px" direction="row" alignItems="center">
                        {actions?.length > 0 &&
                            actions.map((action, index) => (
                                <Button key={index} {...action}>
                                    {action.children}
                                </Button>
                            ))}
                    </Stack>
                </Box>
                {withDivider && (
                    <Box className={classes.divider} sx={{ flexDirection: 'column' }}>
                        <Divider />
                    </Box>
                )}
            </Box>
            {children}
        </Paper>
    );
};

Container.defaultProps = {
    withDivider: false,
};

export default Container;
