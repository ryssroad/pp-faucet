import { stringToPath } from '@cosmjs/crypto'

export default {
    port: 80, // http port 
    db: {
        path: "./db/faucet.db" // save request states 
    },
    project: {
        name: "Game of NFT",
        logo: "https://interchainnfts.dev/assets/img/banner.e3623744.png",
        deployer: `<a href="#">Ping.pub</a>`
    },
    blockchains: [
        // {
        //     name: "cascadia_6102-1",
        //     endpoint: {
        //         // make sure that CORS is enabled in rpc section in config.toml
        //         // cors_allowed_origins = ["*"]
        //         rpc_endpoint: " https://cscd-rpc.systemd.run:443",
        //     },
        //     sender: {
        //         mnemonic: "mirror calm grace guide dismiss novel ramp bounce manage frost veteran burger group bridge ocean primary lucky thought festival siren use regret slush problem",
        //         option: {
        //             hdPaths: [stringToPath("m/44'/60'/0'/0/0")],
        //             prefix: "cascadia"
        //         }
        //     },
        //     tx: {
        //         amount: {
        //             denom: "aCC",
        //             amount: "10000000"
        //         },
        //         fee: {
        //             amount: [
        //                 {
        //                     amount: "7",
        //                     denom: "aCC"
        //                 }
        //             ],
        //             gas: "200000"
        //         },
        //     },
        //     limit: {
        //         // how many times each wallet address is allowed in a window(24h)
        //         address: 1, 
        //         // how many times each ip is allowed in a window(24h),
        //         // if you use proxy, double check if the req.ip is return client's ip.
        //         ip: 10 
        //     }
        // },
        // {
        //     name: "Stargaze-elgafar-1",
        //     endpoint: {
        //         // make sure that CORS is enabled in rpc section in config.toml
        //         // cors_allowed_origins = ["*"]
        //         rpc_endpoint: "https://rpc.elgafar-1.stargaze-apis.com:443",
        //     },
        //     sender: {
        //         mnemonic: "wise rule method circle general over tool exhibit over group nuclear meat inform rival before short inner bind short enact team dinner swift ritual",
        //         option: {
        //             hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
        //             prefix: "stars"
        //         }
        //     },
        //     tx: {
        //         amount: {
        //             denom: "ustars",
        //             amount: "10000000"
        //         },
        //         fee: {
        //             amount: [
        //                 {
        //                     amount: "100000",
        //                     denom: "ustars"
        //                 }
        //             ],
        //             gas: "200000"
        //         },
        //     },
        //     limit: {
        //         // how many times each wallet address is allowed in a window(24h)
        //         address: 1, 
        //         // how many times each ip is allowed in a window(24h),
        //         // if you use proxy, double check if the req.ip is return client's ip.
        //         ip: 10 
        //     }
        // },
        // {
        //     name: "Juno-uni-6",
        //     endpoint: {
        //         // make sure that CORS is enabled in rpc section in config.toml
        //         // cors_allowed_origins = ["*"]
        //         rpc_endpoint: "https://rpc.uni.junonetwork.io/",
        //     },
        //     sender: {
        //         mnemonic: "wise rule method circle general over tool exhibit over group nuclear meat inform rival before short inner bind short enact team dinner swift ritual",
        //         option: {
        //             hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
        //             prefix: "juno"
        //         }
        //     },
        //     tx: {
        //         amount: {
        //             denom: "ujunox",
        //             amount: "10000000"
        //         },
        //         fee: {
        //             amount: [
        //                 {
        //                     amount: "100000",
        //                     denom: "ujunox"
        //                 }
        //             ],
        //             gas: "200000"
        //         },
        //     },
        //     limit: {
        //         // how many times each wallet address is allowed in a window(24h)
        //         address: 1, 
        //         // how many times each ip is allowed in a window(24h),
        //         // if you use proxy, double check if the req.ip is return client's ip.
        //         ip: 10 
        //     }
        // },
        // {
        //     name: "gon-flixneta-1",
        //     endpoint: {
        //         // make sure that CORS is enabled in rpc section in config.toml
        //         // cors_allowed_origins = ["*"]
        //         rpc_endpoint: "http://65.21.93.56:26657/",
        //     },
        //     sender: {
        //         mnemonic: "wise rule method circle general over tool exhibit over group nuclear meat inform rival before short inner bind short enact team dinner swift ritual",
        //         option: {
        //             hdPaths: [stringToPath("m/44'/118'/0'/0/0")],
        //             prefix: "omniflix"
        //         }
        //     },
        //     tx: {
        //         amount: {
        //             denom: "uflix",
        //             amount: "10000000"
        //         },
        //         fee: {
        //             amount: [
        //                 {
        //                     amount: "100000",
        //                     denom: "uflix"
        //                 }
        //             ],
        //             gas: "200000"
        //         },
        //     },
        //     limit: {
        //         // how many times each wallet address is allowed in a window(24h)
        //         address: 1, 
        //         // how many times each ip is allowed in a window(24h),
        //         // if you use proxy, double check if the req.ip is return client's ip.
        //         ip: 10 
        //     }
        // },
        {
            type: 'Ethermint',
            ids: {
                chainId: 6102,
                cosmosChainId: 'cascadia_6102-1',
            },
            name: "cascadia_6102-1",
            endpoint: {
                // make sure that CORS is enabled in rpc section in config.toml
                // cors_allowed_origins = ["*"]
                rpc_endpoint: "https://cscd-rpc.systemd.run:443/",
                evm_endpoint: "https://testnet.cascadia.foundation:443/",
            },
            sender: {
                mnemonic: "mirror calm grace guide dismiss novel ramp bounce manage frost veteran burger group bridge ocean primary lucky thought festival siren use regret slush problem",
                option: {
                    hdPaths: [stringToPath("m/44'/60'/0'/0/0")],
                    prefix: "cascadia"
                }
            },
            tx: {
                amount: {
                    denom: "aCC",
                    amount: "5000000000000000000"
                },
                fee: {
                    amount: [
                        {
                            amount: "7",
                            denom: "aCC"
                        }
                    ],
                    gas: "250000"
                },
            },
            limit: {
                // how many times each wallet address is allowed in a window(24h)
                address: 100, 
                // how many times each ip is allowed in a window(24h),
                // if you use proxy, double check if the req.ip is return client's ip.
                ip: 1000 
            }
        },


    ]    
}
