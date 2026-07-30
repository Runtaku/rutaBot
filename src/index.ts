// discord.jsのメソッド読み込み
import { Client, Events, GatewayIntentBits, EmbedBuilder, OmitPartialGroupDMChannel, Message } from "discord.js";
// .env読み取り
import dotenv from "dotenv"; dotenv.config();
// clientの作成
export const client = new Client({ intents: Object.values(GatewayIntentBits).filter((v): v is GatewayIntentBits => typeof v === "number") });

//< bot起動時の処理 >==================================================<50>
client.on(Events.ClientReady, async () => console.log("rutaBot running!!"));

//< メッセージ受信時の処理 >========================================<40>
client.on(Events.MessageCreate, async (msg) => {
    if (msg.author.bot) return;
    checkRunning(msg, insertSozai, /^\[.+\]$/);
    checkRunning(msg, selectSozai, /^好きな総菜発表ドラゴンが～♪$/);
});

//< インポート >==================================================<50>
import { checkRunning } from "./checkRunning"; //< チェック実行 >
import { insertSozai } from "./insertSozai";   //< 惣菜の挿入 >
import { selectSozai } from "./selectSozai";   //< 惣菜の選択 >
//============================================================<60>

//< ログイン >
(async () => {
    await client.login(process.env.DISCORD_TOKEN); // Discord Botログイン
})();