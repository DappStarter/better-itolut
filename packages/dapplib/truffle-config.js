require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet regret spider unique install pave army general'; 
let testAccounts = [
"0x41ceee47c04659b7dc88ba3ee4c69266e5f6824d956cad48ff120035237ef84b",
"0x5143cd78a13014de018135229f6505f26c058b19e6aacef885fa57bdbca74fab",
"0xca70793193be94aa72e5ed019c683506a3024b29c5e2466cc705ff1a5e9c201e",
"0xdf9b3ba4af4eb695092a1b56587c65603748c16c1426e60fb4735f5bb8577462",
"0x0e790f476aa2285d9e214992b7d8df2fbeeb1133674d5baf849f7d62f66d89d1",
"0xdec743e74e19d3bd6a160101b7892d5db17704e2253a884a6300a5a55dddc763",
"0xfb468343755dea5735b8e24dd922bb4f5f59dd68b95d49dd9f9ba8130cf345ce",
"0x83f7bbfa24f2dd9e0f944f08daec178d358379b43614a598f169b5931b641ad7",
"0x3c9799ccf3a0f6f31faf2b2f935e9607b547813e537721acabd77629d0687528",
"0x178faf46df24b3a37714902bcde367e444ce80669bee412b02e7b93c35929b48"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
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
