import React, { FC } from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#d9dbd6',
        "&:after": {
            top: 0,
            left: 0,
            position: 'absolute',
            width: '100%',
            height: '127px',
            content: `''`,
            backgroundColor: '#159587',
        },
    },
}));

export const PageContainer: FC = (props) => {
    const classes = useStyles();

    return <div className={classes.root}>{props.children}</div>;
};