module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({
  "items": [
    {
      "id": "d8fb72a91e5fe21500",
      "name": "SolGrid",
      "tagline": "Track multiple Solana token prices and charts simultaneously in one grid view",
      "ticker": "GRID",
      "chain": "solana",
      "creator": "7oXa5L\u2026YZMk",
      "remixes": 18,
      "views": 240,
      "slug": "solgrid",
      "subdomain": "solgrid",
      "customDomain": "",
      "previewAt": 1793206811825,
      "previewLocked": false,
      "publishedAt": 1793207644739,
      "featured": true
    },
    {
      "id": "6dfeed56079b22b0ab",
      "name": "Solana Keypair Generator",
      "tagline": "Generate and export secure Solana keypairs client-side directly in your browser",
      "ticker": "KEY",
      "chain": "solana",
      "creator": "7oXa5L\u2026YZMk",
      "remixes": 5,
      "views": 112,
      "slug": "solana-keypair-generator",
      "subdomain": "",
      "customDomain": "",
      "previewAt": 1793206849236,
      "previewLocked": false,
      "publishedAt": 1792792114315,
      "featured": false
    }
  ]
});
};
