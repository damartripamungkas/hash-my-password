const HashMyPassword = require(`../index`);
const hash = new HashMyPassword();

/**
 * hash my string password
 * return hash 0x...
 */
console.log(`[1] Great password has been hashed: ${hash.hashMyPassword(`damar`)}`);

/**
 * validate my string password
 * return boolean true
 */
console.log(`[2] Great password matched successfully: ${hash.isMyPassword(`damar`, `0x6d54b920db2631287dee960b30ca0060a50ea11a5c9760612571331584e60ea8`)}`);
console.log(`[3] Done...`);