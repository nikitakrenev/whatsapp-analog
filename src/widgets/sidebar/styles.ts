import { makeStyles } from "@material-ui/core";

export const styles = makeStyles({
    sidebar: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        backgroundColor: '#f8f9fa',
        borderRight: 'solid 1px #e4e5e6',
    },
    header: {
        display: 'flex',
        height: '59px',
        padding: '10px 16px',
        boxSizing: 'border-box',
        backgroundColor: '#ededed',
    },
    searchField: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '49px',
        boxSizing: 'border-box',
        borderBottom: 'solid 1px #ebebeb',
        backgroundColor: '#f6f6f6',
    },
    searchButton: {
        width: 20,
        height: 20,
    },
    input: {
        width: 393,
        height: 35,
        paddingLeft: 20,
        fontSize: 14,
        borderRadius: 50,
        backgroundColor: 'white',
    },
    avatar: {
        width: '100%',
    },
    icons: {
        display: 'flex',
    },
    icon: {
        width: 24,
        height: 24,
        padding: '8px',
        marginLeft: '10px',
    },
    chats: {
        overflow: 'auto',
    },
})