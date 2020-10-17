import React, {useState} from "react";
import { styles } from "./styles";
import {useChatsList} from "../../hooks/chats";
import cn from "classnames";
import {IChatCard} from "../../entities/chat";

interface Props {
    setActiveChat: (chat: IChatCard) => void;
}

export const ChatCard : React.FC<Props> = (props) => {
    const classes = styles();
    const [activeTab, setActiveTab] = useState();
    const { chatCards } = useChatsList(15);
    const { setActiveChat } = props;

    if (chatCards === undefined) {
        return null;
    }

    const lastMessageText = (text: string) => {
        return (text.trim().length <= 40) ? text : `${text.slice(0, 40).trim()}...`;
    };

    const lastMessageDate = (date: Date) => {
        const today = new Date().getDate();
        const thisMonth = new Date(date).getMinutes()
        const day = new Date(date).getDate();
        const month = new Date(date).getMonth();
        const year  = new Date(date).getFullYear();

        if (today === day) {
            return `${new Date(date).getHours()}:${new Date(date).getMinutes()}`
        } else if (today - day === 1 && thisMonth === month) {
            return "вчера"
        } else {
            return (day < 10) ? ((month < 10) ? `0${day}.0${month}.${year}` : `0${day}.${month}.${year}`) : ((month < 10) ? `${day}.0${month}.${year}` : `${day}.${month}.${year}`);
        }
    };

    return (
        <div>
            {chatCards?.map((item, key) => (
                <div className={cn(classes.chip, activeTab === item.id && classes.activeChip)} key={key} onClick={() => {
                    setActiveTab(item.id);
                    setActiveChat(item)
                }}>
                    <div className={classes.avatar}>
                        <img className={classes.image} src={item.avatar} alt="Employee" />
                    </div>
                    <div className={classes.chatInfo}>
                        <div className={classes.contactInfo}>
                            <div className={classes.contactName}>{item.name}</div>
                            <div className={classes.chatDate}>
                                {lastMessageDate(item.messages[item.messages.length - 1].messageDate)}
                            </div>
                        </div>
                        <div className={classes.lastMessage}>
                            {lastMessageText(item.messages[item.messages.length - 1].messageText)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};