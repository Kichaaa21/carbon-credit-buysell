// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract UserAuth {
    struct User {
        string username;
        string password; // In a real-world scenario, you would store a hashed password  
        uint256 registrationDate;
    }

    mapping(address => User)  users;
    mapping(string => address)  usernameToAddress;
    address[] public registeredUsers; // Added to keep track of registered users

    event UserRegistered(address indexed userAddress, string username);
    event UserLoggedIn(address indexed userAddress);

    modifier onlyNotRegisteredUser() {
        require(bytes(users[msg.sender].username).length == 0, "User already registered");
        _;
    }

    modifier onlyRegisteredUser() {
        require(bytes(users[msg.sender].username).length > 0, "User not registered");
        _;
    }

    function registerUser(string memory _username, string memory _password) external onlyNotRegisteredUser {
        require(bytes(_username).length > 0, "Username cannot be empty");
        require(bytes(_password).length > 0, "Password cannot be empty");

        users[msg.sender] = User(_username, _password,  block.timestamp);
        usernameToAddress[_username] = msg.sender;
        registeredUsers.push(msg.sender); // Add the new user to the list of registered users

        emit UserRegistered(msg.sender, _username);
    }

    function loginUser(string memory _username, string memory _password) external onlyRegisteredUser {
        User storage user = users[msg.sender];

        require(keccak256(bytes(user.username)) == keccak256(bytes(_username)), "Invalid username");
        require(keccak256(bytes(user.password)) == keccak256(bytes(_password)), "Invalid password");

        emit UserLoggedIn(msg.sender);
    }

    function getUserDetails() external view onlyRegisteredUser returns (string memory, string memory,  uint256) {
        User storage user = users[msg.sender];
        return (user.username, user.password, user.registrationDate);
    }

    // Function to get the list of all registered users' usernames
    function getAllRegisteredUsernames() external view returns (string[] memory) {
        string[] memory usernames = new string[](registeredUsers.length);
        for (uint256 i = 0; i < registeredUsers.length; i++) {
            address userAddress = registeredUsers[i];
            User storage user = users[userAddress];
            usernames[i] = user.username;
        }
        return usernames;
    }

    // Function to get the list of all registered users' addresses
    // function getAllRegisteredAddresses() external view returns (address[] memory) {
    //     return registeredUsers;
    // }
}
