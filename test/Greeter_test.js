const { artifacts } = require("hardhat");

const GreeterContract = artifacts.require('Greeter');

contract("Greeter", () =>{


    it("has been deployed succesfully", async()=>{
        const Greeter = await GreeterContract.deployed();
        assert(greeter, "greeter was not deployed");

    });
}
);