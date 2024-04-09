# Ethereum Casual Message Coder

This Node.js command-line application is a fun and educational tool that encodes and decodes strings using the Ethereum blockchain's block hash as the key. Initiated by **Singular** from the [tea community](https://discord.tea.xyz/), the idea was born out of a casual conversation where **Singular** mentioned, _"it would be nice if the key to decoding was the Ethereum block number at the sentence generation timestamp."_. This application embodies that concept by leveraging the Ethereum block hash, providing a unique twist to string encryption and decryption.

## Disclaimer

This project is created for fun and educational purposes only. It is not intended for serious cryptographic applications or for securing sensitive data. The use of block hashes as encryption keys in a production environment is not recommended due to security concerns as block hashes are publicly available and can be easily brute-forced.

## Prerequisites

Before you begin, ensure you have Node.js installed on your system. You can download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

## Setup

1. **Clone the repository**

   Start by cloning this repository to your local machine:

   ```
   git clone https://github.com/stevenlei/ethereum-casual-message-coder.git
   cd ethereum-casual-message-coder
   ```

2. **Install dependencies**

   Install the necessary Node.js packages:

   ```
   npm install
   ```

3. **Set up the .env file**

   Copy the `.env.example` file to `.env`, and update the `ETHEREUM_RPC_URL` variable with your Ethereum RPC URL and API key.

   ```
   ETHEREUM_RPC_URL=https://your-ethereum-rpc-url/api-key
   ```

   Replace `https://your-ethereum-rpc-url/api-key` with your actual Ethereum RPC URL and API key.

## Running the Application

To start the application, run:

```
npm run cli
```

Follow the prompts to encode or decode strings using the Ethereum block hash.

## How It Works

- **Encode Mode**: The application asks the user to enter a string and then fetches the latest Ethereum block hash to use as an encryption key. The string is then encrypted, and the resulting encoded string is displayed to the user.

- **Decode Mode**: The user provides the previously encoded string and the block hash that was used for encoding. The application then attempts to decode the string using the provided block hash. If successful, the original string is displayed; otherwise, an error message is shown.

## Contributing

Feel free to fork this project and make your own changes. Pull requests are welcome!

## Acknowledgments

Special thanks to **Singular** from the [tea community](https://discord.tea.xyz/) for inspiring this project with their creative idea!

## License

MIT
