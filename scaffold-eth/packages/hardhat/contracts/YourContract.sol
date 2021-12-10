pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol"; //TODO: investigate
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

// rename to PropertyNFT
contract YourContract is ERC1155 {

    // contract's "state variables" which are stored on chain
    mapping(uint256 => mapping(address => uint256)) public propertyShares;
    mapping(uint256 => address[]) public propertyOwners;
    //string[] public ipfsData;
    uint256 public currentPropertyID = 0;
    uint256 public defaultSupply = 52;

    // property struct
    struct Property {
        address creator;
        uint256 id;
        uint256 pricePerShare;
        uint256 availableShares;
    }
    Property[] public properties;

    enum Status {
            Pending,
            Accepted,
            Rejected
        }

    // property order request struct
    struct PropertyOrderRequest {
        address payable requester;
        uint256 propertyID;
        uint256 requestedShares;
        Status status;
    }
    PropertyOrderRequest[] public propertyOrderRequests;

    // Events
    event PropertyCreated(address indexed owner, uint256 indexed propertyID, uint256 shares, uint256 pricePerShare);
    event PropertyTransferred(address indexed from, address indexed to, uint256 indexed propertyID, uint256 shares);
    event PropertyOrderRequested(address indexed requester, uint256 propertyID, uint256 requestedShares);

    // this is what scaffold ETH uses to deploy the contract and make requests
    address public msgSender;

    // constructor for out PropertyNFT contract
    constructor() public ERC1155(""){
        msgSender = msg.sender; // this probably not necessary w/o scaffold.eth
    }

    // allows the user to create a Property and gives them all shares of the Property
    function createProperty(uint256 price) public {
        uint256 pricePerShare = price/defaultSupply;
        // give the person who create the property all of the tokens for this property
        _mint(msg.sender, currentPropertyID, defaultSupply, "");
        // create the property
        Property memory property = Property(msg.sender, currentPropertyID, pricePerShare, defaultSupply);
        // add the property to the list of properties
        properties.push(property);
        propertyShares[currentPropertyID][msg.sender] = defaultSupply;
        currentPropertyID += 1;
        emit PropertyCreated(msg.sender, currentPropertyID-1, defaultSupply, pricePerShare);
    }

    // request to buy shares of a property
    function requestProperty(uint256 propertyID, uint256 shares) payable public {
        uint256 totalCost = shares * properties[propertyID].pricePerShare;

        require(msg.value >= totalCost);
        require(msg.sender != properties[propertyID].creator);
        require(shares <= properties[propertyID].availableShares);
        require(shares > 0);

        PropertyOrderRequest memory propertyOrderRequest = PropertyOrderRequest( payable(msg.sender), propertyID, shares, Status.Pending);
        propertyOrderRequests.push(propertyOrderRequest);

        //(bool sent, bytes memory data) = msg.sender.call{value: totalCost}(""); //TODO: does money automatically go into contract
        //require(sent, "Failed to send Ether");

        emit PropertyOrderRequested(msg.sender, propertyID, shares);
    }

    // allows the user to sell shares of a Property to another address
    function sellingOwnership(address payable buyer, uint256 propertyID, uint256 numberOfShares) payable public {
        Property memory property = properties[propertyID];
        uint256 totalCost = property.pricePerShare * numberOfShares;

        // check if the property exists
        require(propertyID < currentPropertyID, "Property does not exist");
        // check if the user has enough shares to sell
        require(propertyShares[propertyID][msg.sender] >= numberOfShares, "You don't have enough shares to sell");
        // check if the user is going to pay enough tokens to make the sale
        require(msg.value >= totalCost, "Not enough funds to purchase this many shares"); // TODO: ensure how we are checking which token the user is paying with. (propbably in msg.)
        // check if the user has enough money to pay the seller
        // require(msg.sender.balance >= totalCost, "Not enough ETH to pay seller"); // TODO: ensure front end checks this

        // transfer the tokens (ETH) for payment to the seller
        //(bool sent, bytes memory data) = buyer.call{value: totalCost}("");
        //require(sent, "Failed to send Ether");
        //approve ss the transfer
        _setApprovalForAll(msg.sender, address(this), true);
        // transfer the tokens (property NFT) for ownership to the buyer
        safeTransferFrom(msg.sender, buyer, propertyID, numberOfShares, "");

        propertyShares[propertyID][msg.sender] -= numberOfShares;
        propertyShares[propertyID][buyer] += numberOfShares;

        emit PropertyTransferred(msg.sender, buyer, propertyID, numberOfShares);
    }

    //function sellProperty(address owner, unit256 propertyID, unit256 numberOfShares) public {

    //}

    // check if an account has any ownership in a property
    // permissions: anyone can check who owns a property.
    function balanceOf(address accountToCheck, uint256 propertyId) public view override returns (uint256){
        return propertyShares[propertyId][accountToCheck];
    }

}
