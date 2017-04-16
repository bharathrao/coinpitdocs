Contract Specification
======================

ALL
---
.. csv-table::

    "Trading Hours", "24x7x365"
    "Settlement Method", "Financial"
    "Settlement Procedure", "P&L Equivalent BTC credited/debited to account"
    "Position Limits", "None at present. May be instituted as needed"
    "Price Limit or circuit", "None at present. May be instituted as needed"


BTCUSD
------
.. csv-table::

    "Contract Unit", "BTC/USD"
    "Listed Contracts", "Weekly, Fortnightly"
    "Minimum price fluctuation", "0.1 USD"
    "Quote currency", "USD"
    "Type", "Inverse"
    "Fees", "0% Maker, 0.05% Taker"
    "Expiry Time", "Friday 17:15 UTC"
    "Settlement Price at Expiry", "10 min TWAP of Coinpit Index of BTC/USD"
    "Margin & PNL currency", "BTC"
    "Value of 1 contract", "100 USD"
    "P&L of 1 contract", "100 × (1/BuyPrice - 1/SellPrice) BTC"
    "Max Initial Leverage", "50x"
    "Spot Anchor Price", "| Spot anchor price is median of
    | OKCoin, BitFinex, Gemini, GDAX and Bitstamp BTC/USD
    | real-time spot price"
    "Trading Bands", "Trading enabled within ±1% of spot anchor price"

BTC1 (Retired)
--------------
.. csv-table::

    "Contract Unit", "BTC/USD"
    "Listed Contracts", "Continuous"
    "Minimum price fluctuation", "0.1 USD = 0.0001 BTC"
    "Quote currency", "USD"
    "Type", "Quanto"
    "Termination of trading", "March 31 2017"
    "Margin & PNL currency", "BTC"
    "BTC value of 1 contract", "Price × 0.001 BTC"
    "USD value of 1 contract", "Price² × 0.001 BTC"
    "BTC P&L of 1 contract", "(SellPrice - BuyPrice) × 0.001 BTC"
    "Approx Leverage", "| Price × 0.001 BTC / Margin
    | Example: 422 × 0.001 / (0.0001 × 20) = 211
    | approx. Price × 10/(stop_ticks+10)"
    "Spot Anchor Price", "| Spot anchor price is median of
    | OKCoin, BitFinex, Gemini, GDAX and Bitstamp BTC/USD
    | real-time spot price"
