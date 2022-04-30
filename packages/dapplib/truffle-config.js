require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index remember noise history idea enter army general'; 
let testAccounts = [
"0x9b6a66aaa581152ca0efb457d112267a48391d37b8335634686312a7543bb838",
"0x6ca39fdbec262f4fce7a6b2883fdb2a336124bd820e92680bb78ad64c06f7dc2",
"0x56509a2d099c292d6887e4e7892b22d5ed6e852beb04e827e1350de1583d1685",
"0x88341c2b43e35a9ce55f2bcf6cd6605a691483a997cdd3554c112791f685d5ed",
"0xd513548f84468158507e2fa8f36095fb9b1d86efd35b5796199f253814c375e8",
"0x415dbcbec4cf158042b857c66bba36b023914d70b77f3d7e5eb015bf1a6361c6",
"0xa42ba176fbbee73061d36e38462713cf9f48e48d7ff6f8617592f13d94c98778",
"0xe06323062df29042c4d2739b76de5f3da91ed9b4c789d37be5be9503d8ec426e",
"0xca41952cee3c9dd17190e091f14c98f63f96f59683ca888ac37271b4d44698a9",
"0xf9df259347cd2421b825c1b70c2df7d2a65f858bf10051750df80eccf053448a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

