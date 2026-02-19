// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract VarityValidator {

    struct ExecutionRecord {
        address agent;
        string actionHash;
        bool verified;
        uint256 timestamp;
    }

    mapping(uint256 => ExecutionRecord) public records;
    uint256 public recordCount;

    event ExecutionSubmitted(uint256 indexed id, address agent);
    event ExecutionVerified(uint256 indexed id, bool verified);

    function submitExecution(string memory actionHash) public {
        recordCount++;

        records[recordCount] = ExecutionRecord(
            msg.sender,
            actionHash,
            false,
            block.timestamp
        );

        emit ExecutionSubmitted(recordCount, msg.sender);
    }

    function verifyExecution(uint256 id, bool status) public {
        records[id].verified = status;
        emit ExecutionVerified(id, status);
    }
}
