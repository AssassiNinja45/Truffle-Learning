// below grabs our artifacts from the Spacebear.json
const Spacebear = artifacts.require("Spacebear");
module.exports = function(deployer, network, accounts) {
    deployer.deploy(Spacebear, {from: accounts[0]} /* we can put in arguements for constructor here, {and objects to change certain functionality}*/);
}   