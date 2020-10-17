import { makeStyles } from "@material-ui/core";

export const styles = makeStyles({
    chip: {
        height: 72,
        display: 'flex',
        alignItems: 'center',
        borderBottom: 'solid 1px #f2f2f2',
        backgroundColor: '#ffffff',
        "&:hover": {
            cursor: "pointer",
            backgroundColor: '#f5f5f5'
        }
    },
    activeChip: {
        backgroundColor: '#ebebeb',
        "&:hover": {
            backgroundColor: '#ebebeb'
        }
    },
    avatar: {
        padding: '0 15px 0 13px',
    },
    image : {
        width: 49,
        height: 49,
        borderRadius: 50,
    },
    chatInfo: {
        width: '100%',
        paddingRight: 15,
    },
    contactInfo: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'left',
    },
    lastMessage: {
        marginTop: 2,
        height: '20px',
        overflow: 'hidden',
        color: '#00000099',
        fontSize: 14,
        lineHeight: '20px',
    },
    contactName: {
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
        color: '',
        fontWeight: 400,
        lineHeight: '21px',
        textAlign: 'left',
        fontSize: 16,
    },
    chatDate: {
        margin: '3px 0 0 6px',
        lineHeight: '14px',
        maxWidth: '100%',
        overflow: 'hidden',
        color: '#00000073',
        fontSize: 12,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
})