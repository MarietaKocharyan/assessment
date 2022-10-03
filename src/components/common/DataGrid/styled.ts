import { styled } from '@mui/system';

import { DataGrid } from '@mui/x-data-grid';

const StyledDataGrid: any = styled(DataGrid)({
    border: 0,
    borderRadius: 0,
    '& .MuiDataGrid-main': {
        border: '1px solid #D9DDE0',
        borderRadius: 4,
        '.MuiDataGrid-columnHeader:focus-within, .MuiDataGrid-cell:focus-within': {
            outline: 'none',
        },
        '& .MuiDataGrid-cell': {
            padding: '0 16px',
            cursor: 'pointer',
            '& .MuiTypography-root': {
                color: '#000000DE',
                font: 'normal normal normal 14px/20px Roboto',
            },
        },
        '& .MuiDataGrid-row': {
            '&:last-child .MuiDataGrid-cell': {
                borderBottom: 0,
            },
            '&:hover': {
                backgroundColor: '#f7f8f9',
            },
        },
        '& .MuiDataGrid-columnHeader .MuiDataGrid-columnSeparator': {
            display: 'none',
        },
    },
    '& .MuiDataGrid-footerContainer': {
        marginTop: 16,
    },
});

export { StyledDataGrid };
