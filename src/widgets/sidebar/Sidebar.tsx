import React, {useState} from "react";
import { styles } from "./styles";
import { InputAdornment, TextField } from "@material-ui/core";
import { Search, MoreVert, Chat, DonutLarge } from "@material-ui/icons";
import { ChatCard } from "../../components/chat-card";
import { ContactAvatar } from "../../components/contact-avatar";
import {IChatCard} from "../../entities/chat";

interface Props {
    setActiveChat: (chat: IChatCard) => void;
}

export const Sidebar: React.FC<Props> = (props) => {
    const classes = styles();
    const { setActiveChat } = props;

    return (
        <div className={classes.sidebar}>
            <div className={classes.header}>
                <div className={classes.avatar}>
                    <ContactAvatar/>
                </div>
                <div className={classes.icons}>
                    <div className={classes.icon}>
                        <DonutLarge color={"disabled"} />
                    </div>
                    <div className={classes.icon}>
                        <Chat color={"disabled"} />
                    </div>
                    <div className={classes.icon}>
                        <MoreVert color={"disabled"} />
                    </div>
                </div>
            </div>
            <TextField
                classes={{ root: classes.searchField }}
                variant={"outlined"}
                placeholder={"Поиск или новый чат"}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search color={"disabled"} className={classes.searchButton} />
                        </InputAdornment>
                    ),
                    classes: {
                        root: classes.input,
                    },
                }}
            />
            <div className={classes.chats}>
                <ChatCard setActiveChat={setActiveChat}/>
            </div>
        </div>
    );
}