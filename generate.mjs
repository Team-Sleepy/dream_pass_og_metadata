import fs from 'fs';

const template = {
  name: '',
  description: '',
  image:
    'https://res.cloudinary.com/sleepyheadzzz/image/upload/v1648728719/dream-pass-OG.gif',
};

Array.from(Array(50).keys()).forEach((i) => {
  const tokenId = i + 1;
  const json = {
    ...template,

    name: `Dream Pass OG #${tokenId}`,
    description:
      'Dream Pass OG is the first collection by SleepyheadzZz. Holders will have access to powerful NFT market bots on Discord, such as real-time price tracking, automated floor and token alerts, trend graphs, wallet monitoring, mint progress tracking and more!\n\nNo more switching between browser tabs and apps while engaging with your communities on Discord. Make your NFT journey easier with Dream Pass!',
  };
  fs.writeFileSync(`./${tokenId}.json`, JSON.stringify(json, null, 2));
  // console.log(json);
});
