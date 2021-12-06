pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol"; //TODO: investigate
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

// rename to PropertyNFT
contract YourContract is ERC1155 {

    // event SetPurpose(address sender, string purpose);
    string public purpose = "Building Unstoppable Apps!!!";

    mapping(address => mapping(uint256 => uint256)) owners;
    uint256 public currentPropertyID = 0;
    uint256 public defaultSupply = 365;

    constructor() public ERC1155(""){
    }

    function createProperty() public {
        _mint(msg.sender, currentPropertyID, 365, "");
        owners[msg.sender][currentPropertyID] = 365;
        currentPropertyID += 1;
        //console.log(msg.sender, "owners: ", owners);
    }

    function balanceOf(address account, uint256 id) public view override returns (uint256){
        return owners[msg.sender][id];
    }

    function setPurpose(string memory newPurpose) public {
      purpose = newPurpose;
      console.log(msg.sender,"set purpose to",purpose);
      // emit SetPurpose(msg.sender, purpose);
    }
}
