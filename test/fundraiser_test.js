const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Fundraiser", ()=>{
    let Fundraiser;
    let fundraiser;
    let owner

    const NAME = "Beneficiary name";

    before(async ()=> {

        Fundraiser= await ethers.getContractFactory("Fundraiser");

        [owner]= await ethers.getSigners();
    });

    describe("initialization", ()=>{

        beforeEach(async () =>{
            fundraiser = await Fundraiser.deploy(NAME);

            await fundraiser.waitForDeployment();
        });

        it("sets the initial owner", async ()=>{

            const contractOwner = await fundraiser.owner();

            expect(contractOwner).to.equal(owner.address);

        });

    });

})