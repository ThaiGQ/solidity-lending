// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract Lending {
	uint256 public availableFunds;
	address public depositor;
	uint256 public interest = 10;
	uint256 public repayTime;
	uint256 public repayed;
	uint256 public loanStartTime;
	uint256 public borrowed;
	bool public isLoanActive;

  constructor(uint256 _repayTime, uint256 _interest) payable {
      repayTime = _repayTime;
      interest = _interest;
      depositor = msg.sender;
      deposit();
  }

  function deposit() public payable {
      require(msg.sender == depositor, 'You must be the depositor');
      availableFunds = availableFunds + msg.value;
  }
}