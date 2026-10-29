module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).json({
  "address": "live now on pump.fun",
  "live": true,
  "priceUsd": 3.42e-05,
  "change24h": 68.4,
  "liquidityUsd": 45000,
  "marketCapUsd": 34200,
  "volume24hUsd": 12500,
  "pair": "AFv66DQMKN4y5oS6hasy5Bvy6kiRvnXDKA5rBTCGU6VK",
  "dex": "pumpfun",
  "chain": "solana",
  "url": "https://pump.fun",
  "spark": [
    2.8e-05,
    2.9e-05,
    3e-05,
    3.2e-05,
    3.4e-05,
    3.42e-05
  ],
  "updatedAt": 1793243224384
});
};
