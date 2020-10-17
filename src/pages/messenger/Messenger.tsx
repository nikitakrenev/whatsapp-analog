import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { PageContainer } from "../../widgets/page-container";
import { Sidebar } from "../../widgets/sidebar";
import { Chat } from "../../widgets/chat";

const useStyles  = makeStyles(() => ({
    chats: {
        display: 'flex',
        width: '1396px',
        height: 'calc(100% - 38px)',
        margin: '0 auto',
        boxShadow: '0 1px 1px 0 rgba(0, 0, 0,.06),0 2px 5px 0 rgba(0, 0, 0,.2)',
        backgroundColor: '#f8f9fa',
        zIndex: 1,
    }
}));

export const Messenger = () => {
    const [activeChat, setActiveChat] = useState();
    const styles = useStyles();

    return (
        <PageContainer>
            <div className={styles.chats}>
                <Sidebar setActiveChat={setActiveChat}/>
                {activeChat && (
                    <Chat activeChat={activeChat}/>
                )}
            </div>
        </PageContainer>
    );
};