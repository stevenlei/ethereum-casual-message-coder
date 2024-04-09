const prompts = require("prompts");
const {
  encrypt,
  decrypt,
  getLatestBlock,
} = require("./ethereum-casual-message-coder");

(async () => {
  const { mode } = await prompts({
    type: "select",
    name: "mode",
    message: "Choose the mode",
    choices: [
      { title: "Encode", value: "encode" },
      { title: "Decode", value: "decode" },
    ],
  });

  if (mode === "encode") {
    const { text } = await prompts({
      type: "text",
      name: "text",
      message: "Enter a string to encode",
    });

    const block = await getLatestBlock();
    console.log(`[Debug] Block number: ${block.number}`);
    console.log(`[Debug] Block hash: ${block.hash}`);
    const encryptedData = encrypt(text, block.hash);
    console.log(`Encoded string: ${encryptedData}`);
  } else if (mode === "decode") {
    const { encodedText } = await prompts({
      type: "text",
      name: "encodedText",
      message: "Provide the encoded string",
    });

    const { blockHash } = await prompts({
      type: "text",
      name: "blockHash",
      message: "Enter the block hash used for encoding",
    });

    try {
      const decryptedText = decrypt(encodedText, blockHash);
      console.log(`Decoded string: ${decryptedText}`);
    } catch (error) {
      console.error(
        "Error decoding the string. Make sure the encoded string and block hash are correct."
      );
    }
  }
})();
