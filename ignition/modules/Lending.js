const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ONE_GWEI = 1_000_000_000n;
const REPAY_TIME = 100;
const INTEREST_RATE = 10;

module.exports = buildModule("LendingModule", (m) => {
  const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);
  const repayTime = m.getParameter("repayTime", REPAY_TIME);
  const interestRate = m.getParameter("interestRate", INTEREST_RATE)

  const lending = m.contract("Lending", [repayTime, interestRate], {
    value: lockedAmount,
  });

  return { lending };
});
