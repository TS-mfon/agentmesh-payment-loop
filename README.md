# AgentMesh Payment Loop

Autonomous agents pay each other for data, compute, and verification.

Track: **Agent-to-Agent Payment Loop**

## What It Does

A buyer agent receives a supplier research task and purchases data, scoring, and validation from three seller agents without using a platform ledger.

Each action is priced below one cent and protected by x402/Circle Gateway Nanopayments. The local fallback mode exists so the UI and economics can be tested without live Gateway credentials, but the production path uses Circle's Gateway middleware and buyer client.

## Financial Problem

Agents cannot become independent economic actors if every service call depends on centralized API keys, prepaid credits, monthly invoices, or custodial platform balances.

The demo proves the margin problem directly. At sub-cent prices, card fees of $0.30 + 2.9% or a normal onchain transaction per action exceed the revenue. Circle Nanopayments let buyers sign gas-free authorizations and use batched settlement on Arc.

## Architecture

- `api/`: Express seller API with x402 Gateway middleware.
- `web/`: Vite dashboard with live metrics and demo runner.
- `scripts/`: deposit, demo, and metrics export scripts.
- `contracts/`: optional Arc receipt logger for explorer-visible proof.

## Setup

```bash
cd api
npm install
cp ../.env.example .env
npm run dev
```

```bash
cd web
npm install
VITE_API_URL=http://localhost:8787 npm run dev
```

## Real Gateway Demo

Rotate any exposed keys first. Then fund the buyer with Arc Testnet USDC from the Circle faucet and deposit to Gateway:

```bash
cd api
BUYER_PRIVATE_KEY=0x... npm run demo:deposit
USE_REAL_GATEWAY=true BUYER_PRIVATE_KEY=0x... API_URL=https://your-api.example.com npm run demo:run
```

## Local Fallback Demo

```bash
cd api
ENABLE_REAL_X402=false npm run dev
npm run demo:run
```

## Paid Actions

- POST `/paid/data/lead`: $0.0010, 20 demo calls
- POST `/paid/compute/score`: $0.0020, 20 demo calls
- POST `/paid/verify/result`: $0.0005, 20 demo calls

## Acceptance Criteria

- Unpaid protected requests return HTTP 402.
- Paid requests return useful JSON and record payment metrics.
- The demo creates at least 50 paid actions.
- Every action is priced at or below $0.01.
- The dashboard explains why cards and normal gas break the model.
