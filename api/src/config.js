export const project = {
  "slug": "agentmesh-payment-loop",
  "title": "AgentMesh Payment Loop",
  "track": "Agent-to-Agent Payment Loop",
  "tagline": "Autonomous agents pay each other for data, compute, and verification.",
  "problem": "Agents cannot become independent economic actors if every service call depends on centralized API keys, prepaid credits, monthly invoices, or custodial platform balances.",
  "demoLabel": "Run 60 agent-to-agent payments",
  "actions": [
    {
      "id": "data-lead",
      "method": "POST",
      "path": "/paid/data/lead",
      "label": "DataAgent Lead Lookup",
      "price": "0.0010",
      "units": 20
    },
    {
      "id": "compute-score",
      "method": "POST",
      "path": "/paid/compute/score",
      "label": "ComputeAgent Score",
      "price": "0.0020",
      "units": 20
    },
    {
      "id": "verify-result",
      "method": "POST",
      "path": "/paid/verify/result",
      "label": "VerifierAgent Check",
      "price": "0.0005",
      "units": 20
    }
  ],
  "story": "A buyer agent receives a supplier research task and purchases data, scoring, and validation from three seller agents without using a platform ledger."
};

export const env = {
  port: Number(process.env.PORT || 8787),
  sellerAddress: process.env.SELLER_ADDRESS || "0x0000000000000000000000000000000000000000",
  arcNetwork: process.env.ARC_NETWORK || "eip155:5042002",
  arcRpcUrl: process.env.ARC_RPC_URL || "https://rpc.testnet.arc.network",
  arcUsdcAddress: process.env.ARC_USDC_ADDRESS || "0x3600000000000000000000000000000000000000",
  enableRealX402: process.env.ENABLE_REAL_X402 !== "false",
  dataFile: process.env.DATA_FILE || "./data/events.json",
  receiptContract: process.env.RECEIPT_CONTRACT_ADDRESS || "",
};
