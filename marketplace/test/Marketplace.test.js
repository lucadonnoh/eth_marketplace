const Marketplace = artifacts.require('./Marketplace.sol')

contract('Marketplace', (accounts) => {
    let marketplace

    before(async () => {
        marketplace = await Marketplace.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfully', async () => {
            const address = await marketplace.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('has a name', async () => {
            const name = await marketplace.name()
            assert.equal(name, "Donnoh's Marketplace")
        })
    })





    describe('products', async () => {
        let result, productCount
        before(async () => {
            result = await marketplace.createProduct('Fortnite Ninja Skin', web3.utils.toWei('1', 'Ether'))
            productCount = await marketplace.productCount()
        })

        it('creates products', async () => {
            //SUCCESS
            assert.equal(productCount, 1)
        })
    })
} )