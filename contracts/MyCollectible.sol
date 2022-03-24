// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MyCollectible is ERC721URIStorage {
  
    address public owner;
    uint256 currentTokenId;

    constructor() ERC721("Flower Collection", "FLWR") {
        owner = msg.sender;
    }

    event Minted(uint256 tokenId, address indexed owner, string tokenURI);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    function mintToken(string memory _tokenURI) public onlyOwner {
        _safeMint(msg.sender, currentTokenId);
        _setTokenURI(currentTokenId, _tokenURI);
        emit Minted(currentTokenId, msg.sender, _tokenURI);
        currentTokenId++;
    }
}