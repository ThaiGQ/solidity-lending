const { expect } = require('chai')
const { ethers } = require('hardhat')

let lending = null

describe('Lending', function () {
	beforeEach(async () => {
		const Lending = await ethers.getContractFactory('Lending')
		lending = await Lending.deploy(30 * 24 * 60 * 60, 10) // 30 days in seconds
	})

  it('Should deposit successfully', async () => {
		const oneEth = 1000000000000000000n
    await lending.deposit({ value: oneEth })
		expect(await lending.availableFunds()).to.eq(oneEth)
  })
})
