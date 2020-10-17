import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import BG from "./bg-chat.png";
import {IMessage} from "../../entities/chat";
import { DoneAll } from "@material-ui/icons";
import cn from "classnames";

interface Props {
    messages: IMessage[]
}

const useStyles  = makeStyles(() => ({
    wrapper: {
        display: 'flex',
        flexDirection: 'column-reverse',
        height: '100%',
        paddingBottom: 6,
        overflow: 'hidden',
        backgroundImage: `url(${BG})`,
    },
    message: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 2,
        padding: '0 9%',
    },
    chip: {
        maxWidth: '65%',
        display: 'flex',
        borderRadius: '7.5px',
        color: '#303030',
        fontSize: '14.2px',
        lineHeight: '19px',
    },
    messageText: {
        padding: '6px 30px 8px 9px',
        whiteSpace: 'pre-wrap',
    },
    messageTime: {
        display: 'flex',
        alignItems: 'flex-end',
        padding: '0  7px 4px 0',

        fontSize: 11,
        lineHeight: '15px',
        color: '#00000073',
    },
    doneItem: {
        marginLeft: 3,
        height: 16,
        width: 16,
        color: '#6fcdec',
    },
    messageFrom: {
        alignItems: 'flex-start',
    },
    messageTo: {
        alignItems: 'flex-end',
    },
    newMessage: {
        marginBottom: 12,
    },
    chipFrom: {
        backgroundColor: '#ffffff',
    },
    chipTo: {
        backgroundColor: '#dcf8c6',
    },
}));

export const ChatWindow : React.FC<Props> = (props) => {
    const styles = useStyles();
    const { messages } = props;
    const [newMessage, setNewMessage] = useState();

    const setMessageSpace = (messageTag: string) => {

    }

    return (
        <div className={styles.wrapper}>
            {messages?.map((item, key) => (
                <div className={cn(styles.message, item.messageTag === 'From' ? styles.messageFrom : styles.messageTo)} key={key}>
                    <div className={cn(styles.chip, item.messageTag === 'From' ? styles.chipFrom : styles.chipTo)}>
                        <div className={styles.messageText}>
                            <span>{item.messageText}</span>
                        </div>
                        <div className={styles.messageTime}>
                            <span>{new Date(item.messageDate).getHours()}:{new Date(item.messageDate).getMinutes()}</span>
                            <DoneAll className={styles.doneItem} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
