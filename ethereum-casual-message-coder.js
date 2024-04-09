require("dotenv").config();
const { ethers } = require("ethers");
const crypto = require("crypto");

if (!process.env.ETHEREUM_RPC_URL) {
  console.error("Please provide the ETHEREUM_RPC_URL in the .env file");
  process.exit(1);
}

const provider = new ethers.JsonRpcProvider(process.env.ETHEREUM_RPC_URL);

const encrypt = (text, blockHash) => {
  const iv = crypto
    .createHash("sha256")
    .update(blockHash)
    .digest()
    .slice(0, 16);
  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    crypto.createHash("sha256").update(blockHash).digest(),
    iv
  );
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return encrypted.toString("hex");
};

const decrypt = (text, blockHash) => {
  const iv = crypto
    .createHash("sha256")
    .update(blockHash)
    .digest()
    .slice(0, 16);
  const decipher = crypto.createDecipheriv(
    "aes-256-cbc",
    crypto.createHash("sha256").update(blockHash).digest(),
    iv
  );
  let decrypted = decipher.update(Buffer.from(text, "hex"));
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
};

const getLatestBlock = async () => {
  const block = await provider.getBlock("latest");
  return block;
};

module.exports = { encrypt, decrypt, getLatestBlock };
