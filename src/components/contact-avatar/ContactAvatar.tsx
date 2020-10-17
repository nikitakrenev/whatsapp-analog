import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import IMAGE from "./image.png";

const useStyles = makeStyles((theme) => ({
    contactImage : {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
}));

export const ContactAvatar = () => {
    const styles = useStyles();

    return (
        <img className={styles.contactImage} src={IMAGE} alt="Employee" />
    );
}