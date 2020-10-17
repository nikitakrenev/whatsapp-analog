import React from "react";
import { styles } from "./styles";
import { Search, AttachFile, MoreVert, InsertEmoticon, Mic } from "@material-ui/icons";
import { ChatWindow } from "../../components/chat-window";
import { TextField } from '@material-ui/core'
import {IChatCard} from "../../entities/chat";

interface Props {
    activeChat: IChatCard;
}

export const Chat : React.FC<Props> = (props) => {
    const classes = styles();
    const {activeChat} = props;

    return (
        <div className={classes.chat}>
            <div className={classes.header}>
                <img className={classes.contactImage} src={activeChat.avatar} alt="Employee" />
                <div className={classes.contactInfo}>
                    <div className={classes.contactName}><span>{activeChat.name}</span></div>
                    <div className={classes.chatDate}><span>был(-а) вчера в 12:43</span></div>
                </div>
                <div className={classes.icons}>
                    <div className={classes.headerIcon}>
                        <Search color={"disabled"} />
                    </div>
                    <div className={classes.headerIcon}>
                        <AttachFile color={"disabled"} className={classes.attachIcon}/>
                    </div>
                    <div className={classes.headerIcon}>
                        <MoreVert color={"disabled"} />
                    </div>
                </div>
            </div>

            <ChatWindow messages={activeChat.messages}/>

            <div className={classes.footer}>
                <InsertEmoticon color={"disabled"} className={classes.footerIconSmile} />
                <TextField
                    classes={{ root: classes.messageField }}
                    variant={"outlined"}
                    placeholder={"Введите сообщение"}
                    multiline={true}
                    rows={1}
                    rowsMax={5}
                    InputProps={{
                        classes: {
                            root: classes.input,
                        },
                    }}
                />
                <Mic color={"disabled"} className={classes.footerIconMic}/>
            </div>
        </div>
    );
}
