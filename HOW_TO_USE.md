# How To Use AgentMesh Payment Loop For Real Arc Payments

This is no longer a simulation. The deployed API requires real x402 payments through Circle Gateway on Arc Testnet.

## Live URLs

- Web: https://agentmesh-payment-loop.vercel.app
- API: https://agentmesh-payment-loop-api.onrender.com
- Seller address: `0x5905c9Dea6Ae52AA0947D8F7F218263889eDfC4E`
- Network: Arc Testnet, `eip155:5042002`

## 1. Prepare A Buyer Wallet

Use a fresh rotated test wallet. Fund it with Arc Testnet USDC from the Circle faucet.

Do not use the private key that was pasted in chat.

## 2. Deposit To Circle Gateway

```bash
cd /home/sudodave/agentmesh-payment-loop/api
BUYER_PRIVATE_KEY=0xYOUR_ROTATED_PRIVATE_KEY npm run gateway:deposit
```

## 3. Pay For A Product Action

```bash
cd /home/sudodave/agentmesh-payment-loop/api
BUYER_PRIVATE_KEY=0xYOUR_ROTATED_PRIVATE_KEY API_URL=https://agentmesh-payment-loop-api.onrender.com npm run gateway:pay
```

Set `REPEAT=10` to make repeated real purchases:

```bash
BUYER_PRIVATE_KEY=0xYOUR_ROTATED_PRIVATE_KEY API_URL=https://agentmesh-payment-loop-api.onrender.com REPEAT=10 npm run gateway:pay
```

## 4. Agent Integration

```js
import { GatewayClient } from "@circle-fin/x402-batching/client";

const client = new GatewayClient({
  chain: "arcTestnet",
  privateKey: process.env.BUYER_PRIVATE_KEY,
  rpcUrl: "https://rpc.testnet.arc.network",
});

const result = await client.pay("https://agentmesh-payment-loop-api.onrender.com/paid/data/lead", {
  method: "POST",
  body: { task: "paid action" },
});

console.log(result.transaction, result.data);
```

## 5. Paid Endpoints

- `POST /paid/data/lead` costs `$0.0010`.
- `POST /paid/compute/score` costs `$0.0020`.
- `POST /paid/verify/result` costs `$0.0005`.

## 6. Verify Payment Requirements

```bash
cd /home/sudodave/agentmesh-payment-loop/api
BUYER_PRIVATE_KEY=0xYOUR_ROTATED_PRIVATE_KEY API_URL=https://agentmesh-payment-loop-api.onrender.com npm run gateway:supports
```

## 7. Local Development

```bash
cd /home/sudodave/agentmesh-payment-loop/api
npm install
SELLER_ADDRESS=0x5905c9Dea6Ae52AA0947D8F7F218263889eDfC4E npm start
```

```bash
cd /home/sudodave/agentmesh-payment-loop/web
npm install
VITE_API_URL=http://127.0.0.1:8787 npm run dev
```

## 8. Verification

```bash
cd /home/sudodave/agentmesh-payment-loop/api && npm test
cd /home/sudodave/agentmesh-payment-loop/web && npm run build
cd /home/sudodave/agentmesh-payment-loop/contracts && forge test
```
