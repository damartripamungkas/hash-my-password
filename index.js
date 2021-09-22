const ethers = require(`ethers`);
class Hashmypassword {
    constructor() { }

    _hashStringToKeccak256(_string = "") {
        return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(_string.toString()));
    };

    /**
     * @param `example mypass` _password
     * @returns string 0x...
     */
    hashMyPassword(_password = "") {
        return this._hashStringToKeccak256(_password);
    };

    /**
     * 
     * @param `example mypass` _password 
     * @param `example 0x...` _hash
     * @returns boolean true or false
     */
    isMyPassword(_password = "", _hash = "") {
        return this._hashStringToKeccak256(_password) == _hash ? true : false;
    };
};

module.exports = Hashmypassword;