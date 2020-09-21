# AmpereForce

[![Build Status](https://travis-ci.com/ampleforth/uFragments.svg?token=xxNsLhLrTiyG3pc78i5v&branch=master)](https://travis-ci.com/ampleforth/uFragments)&nbsp;&nbsp;[![Coverage Status](https://coveralls.io/repos/github/frgprotocol/uFragments/badge.svg?branch=master&t=GiWi8p)](https://coveralls.io/github/frgprotocol/uFragments?branch=master)

AmpereForce (code name uFragments) is a decentralized elastic supply protocol. It maintains a stable unit price by adjusting supply directly to and from wallet holders. You can read the [whitepaper](https://medium.com/ampereforce/introduction-to-ampereforce-5e3624da4143) for the motivation and a complete description of the protocol.

This repository is a collection of [smart contracts](http://ampereforce.com) that implement the AmpereForce protocol on the Ethereum blockchain.

The official mainnet addresses are:
- ERC-20 Token: [0xA20353AaB94597e7f305642Faa8DCde2889c95EF](https://etherscan.io/token/0xA20353AaB94597e7f305642Faa8DCde2889c95EF)
- Supply Policy: [0x657551776b9e0C9bb45C1d098E4976aeFaA25E9F](https://etherscan.io/address/0x657551776b9e0C9bb45C1d098E4976aeFaA25E9F)
- Orchestrator: [0x2952F9B75B370f29Bc4898A4e270dbe8cF3207f3](https://etherscan.io/address/0x2952F9B75B370f29Bc4898A4e270dbe8cF3207f3)
- Market Oracle: [0x2c198db349bAFeC9868c5782876136c8d0288294](https://etherscan.io/address/0x2c198db349bAFeC9868c5782876136c8d0288294)
- Crypto Oracle: [0x7026c2747FbA95B4Ccb3b3184fe46A29257cb37b](https://etherscan.io/address/0x7026c2747FbA95B4Ccb3b3184fe46A29257cb37b)
- CPI Oracle: [0x2787BD607095915C46843ea40204c63F896c68E6](https://etherscan.io/address/0x2787BD607095915C46843ea40204c63F896c68E6)

## Table of Contents

- [Install](#install)
- [Testing](#testing)
- [Testnets](#testnets)
- [Contribute](#contribute)
- [License](#license)


## Install

```bash
# Install project dependencies
npm install

# Install ethereum local blockchain(s) and associated dependencies
npx setup-local-chains
```

## Testing

``` bash
# You can use the following command to start a local blockchain instance
npx start-chain [ganacheUnitTest|gethUnitTest]

# Run all unit tests
npm test

# Run unit tests in isolation
npx truffle --network ganacheUnitTest test test/unit/uFragments.js
```

## Contribute

To report bugs within this package, create an issue in this repository.
For security issues, please contact ampereforce@hotmailpro.org.
When submitting code ensure that it is free of lint errors and has 100% test coverage.

``` bash
# Lint code
npm run lint

# View code coverage
npm run coverage
```

## License

[GNU General Public License v3.0 (c) 2020 AmpereForce Protocol, Inc.](./LICENSE)
