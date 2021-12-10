pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol"; //TODO: investigate
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

// rename to PropertyNFT
contract YourContract is ERC1155 {

    // contract's "state variables" which are stored on chain
    mapping(uint256 => address) public propertyCreator; // not used yet
    mapping(address => mapping(uint256 => uint256)) public owners;
    uint256 public currentPropertyID = 0;
    uint256 public defaultSupply = 365;

    // this is what scaffold ETH uses to deploy the contract and make requests
    address public msgSender;

    // constructor for out PropertyNFT contract
    constructor() public ERC1155(""){
        msgSender = msg.sender; // this probably not necessary w/o scaffold.eth
    }

    // allows the user to create a Property and gives them all shares of the Property
    function createProperty() public {
        // give the person who create the property all of the tokens for this property
        propertyCreator[currentPropertyID] = msg.sender; // not used yet
        _mint(msg.sender, currentPropertyID, defaultSupply, "");
        owners[msg.sender][currentPropertyID] = defaultSupply;
        currentPropertyID += 1;
    }

    // check if an account has any overnship in a property
    // permissions: anyone can check who owns a property.
    function balanceOf(address accountToCheck, uint256 propertyId) public view override returns (uint256){
        return owners[accountToCheck][propertyId];
    }

    function

}
