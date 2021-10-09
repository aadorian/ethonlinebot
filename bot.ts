import { Client, MessageEmbed } from "discord.js";
import { fetchJson } from "fetch-json";
const pocketJS = require("@pokt-network/pocket-js");

import Web3 from "web3";
const utils = require("@0x/protocol-utils");
const { SkynetClient } = require("@nebulous/skynet");
const { ParaSwap, ParaswapFeed } = require("paraswap");

const ytdl = require("ytdl-core");
require("dotenv").config();

const AUTHOR = "@aleadorjan";
const ABOUT_0x =
  "0x is important infrastructure for the emerging crypto economy and enables markets to be created that couldn't have existed before. As more assets become tokenized, public blockchains provide the opportunity to establish a new financial stack that is more efficient, transparent, and equitable than any system in the past.";

const ABOUT_PARASWAP =
  "ParaSwap API allows any developer to retrieve Token prices as well as making swaps between EVM based assets (Ethereum mainnet, Polygon, and others";

const BOT_NAME = "ETHOnline Discord Bot";
const BOT_NAME_FOOTER = "ETHOnline 2021";
const EMBED_COLOR_PRIMARY = 0x285fd0;

const MY_ADDRESS = process.env.PUBLIC_KEY;
const IMAGE_DEFAULT = "https://i.imgur.com/VjqiGjZ.png";
const IMAGE_PARASWAP = 'https://i.imgur.com/AgqUGPY.png'
const IMAGE_0x = "https://i.imgur.com/5UyS7ig.png";
const IMAGE_SKYNET = "https://i.imgur.com/exOd6Ic.png";
const IMAGE_POCKET = 'https://i.imgur.com/m9ThZWC.png'
const URL = "https://github.com/aadorian/ethglobal.git";
const URL_BOT = "https://ethglobal.tv";
const URL_SKYNET = "https://siasky.net";
const URL_PARASWAP = "https://paraswap.io/#/?network=ethereum";
const URL_POCKET = 'https://docs.pokt.network/home/paths/app-developer?cly_id=6ab325d9994465e616e1bd1f824715e109e72146&cly_uid=0d4f6b6e931357150cf036dc530a04bb7b0662925905be87a02fef5b3700627467f4b77ec84cbb299704637adbbdb80d69f98fa80b429c655b83a000afa07cfe'
const URL_POCKET_DISPATCH = "https://node1.mainnet.pokt.network:443"
const URL_GITHUB = 'https://github.com/aadorian/ethonlinebot.git'
const LOGO = "https://i.imgur.com/iyepKNy.png";
const ABOUT = "https://githubmemory.com/@aadorian";
const SENDER_ADDRESS = "0xA9987f5F2bEC0fF2e96797DAf4dAeFaC7a0D44c3";
const TOKEN_NAME = "TOKEN";
const MNEMONIC = process.env.MNEMONIC;

const TOKEN_SOURCE = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"; // ETH
const TOKEN_DESTINATION = "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359"; // DAI
const TOKEN_AMOUNT = "1000000000000000000";

const tokens = [
  {
    decimals: 18,
    symbol: "ETH",
    address: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  },
  {
    decimals: 6,
    symbol: "USDC",
    address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
  },
  {
    decimals: 18,
    symbol: "DAI",
    address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  },
];

console.log(`Starting bot...`);
console.log(`Connecting web3 to ..`);

const client: Client = new Client();
const web3 = new Web3(process.env.RPC_URL);
const PRIVATE_KEY = process.env.PRIVATE_KEY;



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", async (msg) => {
  try {
    if (msg.content === "!0x") {
      const order = await new utils.LimitOrder({
        makerToken: "0x6B175474E89094C44Da98b954EedeAC495271d0F", // DAI
        takerToken: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", // WETH
      });
      const signature = await order.getSignatureWithKey(
        process.env.PRIVATE_KEY
      );

      //Order and signature example in Ox
      console.log(order);
      console.log(signature);

      const contractEmbed = new MessageEmbed()
        .setURL("URL_DISCORD")
        .setAuthor("authors: " + AUTHOR, IMAGE_0x, URL)
        .setDescription(BOT_NAME)
        .setThumbnail(IMAGE_0x)
        .setTitle("0x Protocol API")
        .setURL(URL)
        .addField(`0x`, "The liquidity endpoint for DeFi ", false)
        .addFields(
          {
            name: "maker Token: DAI",
            value: `${order.makerToken}`,
            inline: false,
          },
          {
            name: "taker Token: WETH",
            value: `${order.takerToken}`,
            inline: false,
          },
          {
            name: "verifyingContract",
            value: `${order.verifyingContract}`,
            inline: false,
          },
          { name: "chain ID", value: `${order.chainId}`, inline: false },
          { name: "about 0x", value: ABOUT_0x, inline: true }
        )
        .setTimestamp()
        .setImage(IMAGE_0x)
        .setTimestamp()
        .setFooter(BOT_NAME);
      msg.channel.send(contractEmbed);
    }
    if (msg.content === "!skynet") {
      const portal = URL_SKYNET;
      const client = new SkynetClient(portal);
      // skylinks `sia://`
      const skylink = await client.uploadFile("./images/1.png"); //loading a local
      console.log(`Upload successful, skylink: ${skylink}`);
      //   https://siasky.net/vANMCyuzc3jdfRPWnscdvHkzXtyrnFn9btWEz8sL4EU1mg
      //sia://vANMCyuzc3jdfRPWnscdvHkzXtyrnFn9btWEz8sL4EU1mg
      const result = skylink.replace(/(^\w+:|^)\/\//, "");
      const contractEmbed = new MessageEmbed()
        .setURL("URL_DISCORD")
        .setAuthor("authors: " + AUTHOR, IMAGE_SKYNET, URL)
        .setDescription(BOT_NAME)
        .setThumbnail(IMAGE_SKYNET)
        .setTitle("Skynet API")
        .setURL(`https://siasky.net/${result}`)
        .addField(`SkynetLink of uploaded file`, `${skylink}`, false)
        .addFields({
          name: "View File ",
          value: `https://siasky.net/${result}`,
          inline: true,
        })
        .setTimestamp()
        .setImage(IMAGE_SKYNET)
        .setTimestamp()
        .setFooter(BOT_NAME);
      msg.channel.send(contractEmbed);
    }
    if (msg.content === "!paraswap") {
      const paraSwap = new ParaSwap();
      const priceRoute = await paraSwap.getRate(
        TOKEN_SOURCE,
        TOKEN_DESTINATION,
        TOKEN_AMOUNT
      );
      console.log(priceRoute);
      const paraSwapEmbed = new MessageEmbed()
        .setURL("URL_DISCORD")
        .setAuthor("authors: " + AUTHOR, IMAGE_PARASWAP, URL)
        .setDescription(BOT_NAME)
        .setThumbnail(IMAGE_PARASWAP)
        .setTitle("ParaSwap API")
        .setURL(URL_PARASWAP)
        .addField(
          `msg`,
          "" + `ETH / DAI using paraswap: `,
          false
        )
        .addField(
          `blockNumber`,
          "" + `${priceRoute.blockNumber}`,
          true
        )
        .addField(`network`, "" + `${priceRoute.network}`, true)
        .addField(
          `source token`,
          "" + `${priceRoute.srcToken}`,
          true
        )
        .addField(
          `source amount`,
          "" + `${priceRoute.srcAmount}`,
          true
        )
        .addField(
          `destination token`,
          "" + `${priceRoute.destToken}`,
          true
        )
        .addField(
          `destination amount`,
          "" + `${priceRoute.destAmount}`,
          true
        )
        .addField(
          `gasCost USD`,
          "" + `${priceRoute.gasCostUSDUSD}`,
          true
        )
        .addField(`gasCost`, "" + `${priceRoute.gasCost}`, true)
        .addField(
          `method`,
          "" + `${priceRoute.contractMethod}`,
          true
        )
     
        .setTimestamp()
        .setImage(IMAGE_PARASWAP)
        .setTimestamp()
        .setFooter(BOT_NAME);
      msg.channel.send(paraSwapEmbed);
    }
    if (msg.content === "!pocket") {
      const { Pocket, Configuration, HttpRpcProvider, PocketAAT } = pocketJS;
      const dispatchURL = URL_POCKET_DISPATCH;
      const rpcProvider = new HttpRpcProvider(dispatchURL);
      const configuration = new Configuration(5, 1000, 0, 40000);
      const pocketInstance = new Pocket(
        [dispatchURL],
        rpcProvider,
        configuration
      );
      console.log(pocketInstance);

      const pocketEmbed = new MessageEmbed()
        .setURL("URL_DISCORD")
        .setAuthor("authors: " + AUTHOR, IMAGE_POCKET, URL)
        .setDescription(BOT_NAME)
        .setThumbnail(IMAGE_POCKET)
        .setTitle("Pocket API")
        .setURL(URL_POCKET)
        .addField(
          `configuration`,
          "maxDispatchers: " + `${pocketInstance.configuration.maxDispatchers}`,
          false
        )
        .addFields({ name: "MaxSessions", value: `${pocketInstance.configuration.maxSessions}`, inline: true })
        .addFields({ name: "Consensus NodeCount", value: `${pocketInstance.configuration.consensusNodeCount}`, inline: true })
        .addFields({ name: "RequestTimeOut", value: `${pocketInstance.configuration.requestTimeOut}`, inline: true })
        .addFields({ name: "Session Block Frequency", value: `${pocketInstance.configuration.sessionBlockFrequency}`, inline: true })
        .addFields({ name: "RPC provider", value: `${pocketInstance.innerRpc.rpcProvider.baseURL}`, inline: true })
        
        .setTimestamp()
        .setImage(IMAGE_POCKET)
        .setTimestamp()
        .setFooter(BOT_NAME);
      msg.channel.send(pocketEmbed);
    }
    if (msg.content === "!help") {
 
      const contractEmbed = new MessageEmbed()
        .setURL("URL_DISCORD")
        .setAuthor("authors: " + AUTHOR, IMAGE_DEFAULT, URL)
        .setDescription(BOT_NAME)
        .setThumbnail(IMAGE_DEFAULT)
        .setTitle("Help :)")
        .setURL(URL)
        .addField(`!0x`, '0x API is a professional grade liquidity aggregator enabling the future of DeFi applications.', false)
        .addField(`!pocket`, 'Pocket Network is an open blockchain data marketplace for web3 applications that leverages cost-efficient tokenomics to coordinate and distribute multi-blockchain data at scale. ', false)
        .addField(`!paraswap`, 'ParaSwap is the fastest DEX aggregator that offers the most developer-friendly plug&play API:', false)
        .addField(`!skynet`, 'Skynet provides easy-to-use, easy-to-access decentralized storage for users and developers, without needing any special wallet or browser extensions', false)
        .addFields({ name: "Github repo", value: URL_GITHUB, inline: true })
        .setTimestamp()
        .setImage(IMAGE_DEFAULT)
        .setTimestamp()
        .setFooter(BOT_NAME);
      msg.channel.send(contractEmbed);
    }
   
    if (msg.content === "!ping") {
      const accountBalance = BigInt(await web3.eth.getBalance(SENDER_ADDRESS));
      const msgEmbed = new MessageEmbed()
        .setColor(EMBED_COLOR_PRIMARY)
        .setDescription(BOT_NAME)
        .setURL(URL_BOT)
        .setAuthor("Author: " + AUTHOR, IMAGE_DEFAULT, URL_BOT)
        .setThumbnail(LOGO)
        .addField(
          "Current account balance",
          `${accountBalance / 10n ** 18n} ${TOKEN_NAME}`
        )
        .setImage(IMAGE_DEFAULT)
        .setFooter(BOT_NAME_FOOTER, IMAGE_DEFAULT)
        .setTimestamp();
      msg.channel.send(msgEmbed);
      client.user.setActivity("ETHOnline", { type: "WATCHING" });
    }
  } catch (e) {
    msg.reply("ERROR");
    console.log(new Date().toISOString(), "ERROR", e.stack || e);
  }
});

client.login(process.env.DISCORD_TOKEN);
