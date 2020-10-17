import { IChatCard, IMessage } from "../../entities/chat";
import {useCallback, useEffect, useState} from "react";

export const useChatsList = (chatsNumber: number) => {
    const [chatCards, setChatCards] = useState<IChatCard[]>();
    const faker = require('faker');
    faker.locale = "ru";

    const fetch = useCallback(() => {
        return setChatCards(getChats(chatsNumber))
    },[])

    useEffect(() => {
        fetch();
    }, [fetch]);

    const getMessagesNumber = (min:number, max:number) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const getMessages = () => {
        const message:IMessage[] = [];
        const directions = ['To', 'From'];

        for (let i = 0; i < getMessagesNumber(0, 20); i += 1) {
            message[i] = {
                messageTag: directions[Math.floor(Math.random() * 2)],
                messageText: faker.lorem.sentence(),
                messageDate: new Date(),
            };
        }

        return message;
    };

    const getChats = (chatsNumber: number) => {
        const chats:IChatCard[] = [];

        if (localStorage.length !== 0) {
            for (let i = 0; i < localStorage.length; i += 1) {
                // @ts-ignore
                chats[i] = JSON.parse(localStorage.getItem(localStorage.key(i)));
            }
        } else {
            for (let i = 0; i < chatsNumber; i+= 1) {
                chats[i] = {
                    id: i,
                    name: faker.name.findName(),
                    number: faker.phone.phoneNumber(),
                    avatar: faker.image.avatar(),
                    messages: getMessages(),
                };
                localStorage.setItem(`${chats[i].name}`, JSON.stringify(chats[i]));
            }
        }

        return chats;
    };

    return { chatCards }
}