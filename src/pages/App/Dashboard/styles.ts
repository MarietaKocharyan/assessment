import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    commercials: {
        position: 'relative',
        marginBottom: '40px',
    },
    commercialsActions: {
        position: 'absolute',
        top: -60,
        right: 0,
        marginBottom: '30px',
    },
    commercialsActionButton: {
        '&.MuiButtonBase-root': {
            color: '#082032',
            marginLeft: 8,
            borderRadius: 0,
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 0px 22px #CED2D680',
        },
    },
    commercialsItem: {
        flex: 1,
        width: 193,
        padding: '0 16px',
        height: '100%',
        '& > *': {
            height: '100%',
        },
    },
    listTitle: {
        font: 'normal normal bold 20px/38px Roboto !important',
    },
}));
