const contractPerNetwork = {
  mainnet: 'hello.near-examples.near',
  testnet: 'hello.near-examples.testnet',
};

const componentsPerNetwork = {
  mainnet: {
    socialDB: 'social.near',
    Lido: 'zavodil.near/widget/Lido',
    HelloNear: 'juaner.near/widget/MetaPool.Stake',
    LoveNear: 'gagdiez.near/widget/LoveNear',
  },
  testnet: {
    socialDB: 'v1.social08.testnet',
    Lido: 'influencer.testnet/widget/Lido',
    HelloNear: 'juaner.testnet/widget/MetaPool.Stake',
    LoveNear: 'influencer.testnet/widget/LoveNear',
  }
};

export const NetworkId = 'mainnet';
export const HelloNearContract = contractPerNetwork[NetworkId];
export const Components = componentsPerNetwork[NetworkId];