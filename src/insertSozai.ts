import { OmitPartialGroupDMChannel, Message, User } from "discord.js";

//< 惣菜の挿入 >
/**
 * @param message - 送信情報
 */
export function insertSozai(message: OmitPartialGroupDMChannel<Message<boolean>>): void {
    const text: string = message.content.slice(1,-1);
    const user: User = message.author;
    const username: string = user.username;
    const userid: string = user.id;
    const date: string = new Date(message.createdTimestamp).toLocaleString("ja-JP");

    const row: string = `${username},${date},"${text}",${userid}\n`;
    message.reply(row);
}