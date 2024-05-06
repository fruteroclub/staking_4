const contractPerNetwork = {
  mainnet: 'hello.near-examples.near',
  testnet: 'hello.near-examples.testnet',
};

const componentsPerNetwork = {
  mainnet: {
    MetaPool: 'juaner.near/widget/MetaPool.Stake',
  },
  testnet: {
    Lido: 'influencer.testnet/widget/Lido',
    HelloNear: 'juaner.testnet/widget/MetaPool.Stake',
    LoveNear: 'influencer.testnet/widget/LoveNear',
  }
};

export const NetworkId = 'mainnet';
export const HelloNearContract = contractPerNetwork[NetworkId];
export const Components = componentsPerNetwork[NetworkId];