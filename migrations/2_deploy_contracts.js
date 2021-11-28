const HelloWorld = artifacts.require("HelloWorld");
const initMessage = "Hello world!";

module.exports = function(deployer) {
  deployer.deploy(HelloWorld, initMessage);
};