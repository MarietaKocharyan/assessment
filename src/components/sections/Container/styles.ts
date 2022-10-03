import { makeStyles } from '@mui/styles';

type StylesParams = {
    stickyHeader?: boolean;
};

export default makeStyles(() => ({
    paper: ({ stickyHeader }: StylesParams) => ({
        flexGrow: 1,
        padding: stickyHeader ? '0 24px 24px' : '24px',
    }),
    header: ({ stickyHeader }: StylesParams) =>
        stickyHeader && {
            padding: '20px',
            marginBottom: '20px',
            position: 'sticky',
        },
    headerContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 42,
    },
    divider: ({ stickyHeader }: StylesParams) => ({
        margin: stickyHeader ? '24px 0 18px' : '24px 0',
    }),
}));
