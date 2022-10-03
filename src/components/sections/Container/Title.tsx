import Typography, { TypographyProps } from '@mui/material/Typography';

interface ContainerTitleProps {
    children: string;
}

const ContainerTitle = ({ sx, children, ...props }: ContainerTitleProps & TypographyProps): JSX.Element => {
    return (
        <Typography
            sx={{
                color: '#B4BCC1',
                fontSize: 24,
                marginRight: '32px',
                fontWeight: 'bold',
                ...sx,
            }}
            {...props}
        >
            {children}
        </Typography>
    );
};

ContainerTitle.defaultProps = {
    component: 'h3',
};

export default ContainerTitle;
