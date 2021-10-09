# [ETHOnline MultiCryptoBot](https://online.ethglobal.com/#about)

![](https://i.imgur.com/v7vm9vv.jpg)

##  An experimental integration  of ETHOnline Sponsors API and Discord.js




# Video


https://youtu.be/lqjPSKh1vw0

## GUI

| Command    | Bot Response 
| -------- | -------- | 
|  *!0x* | ![](https://i.imgur.com/39dQubq.png) | 
|  *!skynet* |![](https://i.imgur.com/fwSb161.png)   | 
|  *!paraswap* |![](https://i.imgur.com/kANzKRK.png) | 
|  *!pocket* | ![](https://i.imgur.com/wGFsbDD.png) | 
|  *!help* |![](https://i.imgur.com/SOm8S2e.png) | 






# 0x


> 0x API is a professional grade liquidity aggregator enabling the future of DeFi applications.
> 0x is important infrastructure for the emerging crypto economy and enables markets to be created that couldn't have existed before. As more assets become tokenized, public blockchains provide the opportunity to establish a new financial stack that is more efficient, transparent, and equitable than any system in the past.

Reference: 

https://0x.org/docs


# SkyNet

>DeFi and Web3 need decentralized front-ends and off-chain storage to maintain their decentralization. Skynet provides easy-to-use, easy-to-access decentralized storage for users and developers, without needing any special wallet or browser extensions. Data is stored by hosts on the Sia Blockchain network, and pinned to the network by a decentralized network of Skynet portals. Homescreen builds on Skynet to let DeFi users store versioned builds of application front-ends. Users have easy access to their favorite dapps and files, backed up to Skynet, for maximum control, fraud protection, and censorship resistance. As a developer team, you shouldn’t need to worry about the complexities and liabilities involved in maintaining access to your front-end.


Reference:
https://siasky.net/developers
https://siasky.net/docs/#using-the-shell

# Paraswap
![](https://i.imgur.com/qveF9Hl.png)

>ParaSwap is the fastest DEX aggregator that offers the most developer-friendly plug&play API: set it up and be ready to use it in 20 min or less!
Ledger, Argent and Metamask are some of the DeFi’s most popular dApps that are powered by ParaSwap. The recent integration of ParaSwap on the Ledger Live app marks a big step forward towards a more user-friendly DeFi.
ParaSwap allows multichain swaps on Etherem, BSC and Polygon. Its state-of-the-art algorithm empowers its users with the highest liquidity, best prices, and lowest slippage.
Whether you are a developer for whom Smart Contracts and Web3 have no secrets, a newby in the field or maybe you are somewhere in between feel free to take the ParaSwap challenge! Our doc, our international team and our Discord and Telegram communities will inspire and support you in building your idea.
Dream big, stay focused and code with passion! Join us in bringing DeFi to the world!

Reference: 
https://developers.paraswap.network

# Pokt

![](https://i.imgur.com/m9ThZWC.png)
>Pocket Network is an open blockchain data marketplace for web3 applications that leverages cost-efficient tokenomics to coordinate and distribute multi-blockchain data at scale. Pocket currently supports Ethereum, Polygon, xDAI, BSC, Fuse, and Avalanche. Mint reliable censorship-resistant RPC endpoints, powered by decentralized infrastructure, for any of our supported blockchains using the Pocket Portal today!

Reference: 
https://showcase.ethglobal.com/ethonline2021/prizes
# Build & Run 
```
git clone https://github.com/aadorian/ethonlinebot

npm install
npm run compile
npm run start
```
# Repo

https://github.com/aadorian/ethonlinebot.git



# JSON

```json=
{
  "name": "bot",
  "version": "1.0.0",
  "description": "",
  "main": "bot.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "compile": "tsc",
    "start": "node bot.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@0x/protocol-utils": "^1.9.1",
    "@ethersproject/providers": "^5.4.3",
    "@nebulous/skynet": "^2.0.1",
    "@pokt-network/pocket-js": "^0.6.16-rc",
    "@skynetlabs/skynet-nodejs": "^2.3.0",
    "0x": "^4.11.0",
    "covalentjs": "^0.0.3",
    "discord.js": "^12.5.1",
    "dotenv": "^8.2.0",
    "fetch-json": "^2.5.1",
    "http": "0.0.1-security",
    "https": "^1.0.0",
    "paraswap": "^5.0.1",
    "skynet-js": "^4.0.17-beta",
    "typescript": "^4.1.3",
    "web3": "^1.3.0",
    "ws": "^7.5.3",
    "ytdl-core": "^4.9.1"
  },
  "devDependencies": {
    "@types/node": "^14.14.22"
  }
}
    
```

## Bot Config 

![](https://i.imgur.com/O687SXG.png)




*Address*
 0x87430F10FAD9b9Cb84056A37F836d8a804204303

*Prizes*

https://showcase.ethglobal.com/ethonline2021/prizes