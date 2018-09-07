const SafeMathUIntMock = artifacts.require('SafeMathUIntMock');

const BigNumber = web3.BigNumber;
const _require = require('app-root-path').require;
const BlockchainCaller = _require('/util/blockchain_caller');
const chain = new BlockchainCaller(web3);

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('SafeMathUInt', () => {
  const MAX_INT256 = new BigNumber('57896044618658097711785492504343953926634992332820282019728792003956564819967');

  let safeMathUInt;

  beforeEach(async function () {
    safeMathUInt = await SafeMathUIntMock.new();
  });

  async function returnVal (tx) {
    return (await tx).logs[0].args.val;
  }

  describe('toInt256Safe', function () {
    describe('when then number is more than MAX_INT256', () => {
      it('should fail', async function () {
        expect(
          await chain.isEthException(safeMathUInt.toInt256Safe(MAX_INT256.plus(1)))
        ).to.be.true;
      });
    });

    describe('when then number is MAX_INT256', () => {
      it('converts int to uint256 safely', async function () {
        (await returnVal(safeMathUInt.toInt256Safe(MAX_INT256))).should.be.bignumber.eq(MAX_INT256);
      });
    });

    describe('when then number is less than MAX_INT256', () => {
      it('converts int to uint256 safely', async function () {
        (await returnVal(safeMathUInt.toInt256Safe(MAX_INT256.minus(1)))).should.be.bignumber.eq(MAX_INT256.minus(1));
      });
    });

    describe('when then number is 0', () => {
      it('converts int to uint256 safely', async function () {
        (await returnVal(safeMathUInt.toInt256Safe(0))).should.be.bignumber.eq(0);
      });
    });
  });
});