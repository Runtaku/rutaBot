import { OmitPartialGroupDMChannel, Message } from "discord.js";

//< チェック実行 >
/** 送信されたメッセージが正規表現と等しかった場合、実行用メソッドを呼び出す。
 * @param message - 送信情報
 * @param func    - 実行用メソッド
 * @param regex   - 正規表現
 */
export function checkRunning(message: OmitPartialGroupDMChannel<Message<boolean>>, func: (message: OmitPartialGroupDMChannel<Message<boolean>>) => void,  regex: RegExp): void {
    const text: string = message.content;
    if(regex.test(text)) func(message);
}