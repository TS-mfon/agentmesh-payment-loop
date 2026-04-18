# AgentMesh Payment Loop

Autonomous agents pay each other for data, compute, and verification.

Track: **Agent-to-Agent Payment Loop**

## Real Product

This API is protected by real x402 payments through Circle Gateway on Arc Testnet. Users and agents call the paid endpoints with `GatewayClient.pay()`; the seller API verifies and settles through Circle Gateway before returning the resource.

## Financial Problem

Agents cannot become independent economic actors if every service call depends on centralized API keys, prepaid credits, monthly invoices, or custodial platform balances.

At sub-cent prices, card fees and one gas transaction per action destroy the margin. Circle Nanopayments let the buyer sign gas-free payment authorizations and settle through Gateway on Arc.

## Live URLs

- Web: https://agentmesh-payment-loop.vercel.app
- API: https://agentmesh-payment-loop-api.onrender.com
- Seller address: `0x5905c9Dea6Ae52AA0947D8F7F218263889eDfC4E`

## Usage

See [HOW_TO_USE.md](./HOW_TO_USE.md).

## Paid Endpoints

- POST `/paid/data/lead`: $0.0010
- POST `/paid/compute/score`: $0.0020
- POST `/paid/verify/result`: $0.0005
