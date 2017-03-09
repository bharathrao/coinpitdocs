Contract Specification
======================

ALL
---

.. csv-table::

    "Trading Hours", "24x7x365"
    "Listed Contracts", "Continuous"
    "Settlement Method", "Financial"
    "Termination of trading", "None, Automatic rollover"
    "Settlement Procedure", "P&L Equivalent BTC credited/debited to account"
    "Position Limits", "None at present. May be instituted as needed"
    "Price Limit or circuit", "None at present. May be instituted as needed"


BTC1
----

.. csv-table::

    "Contract Unit", "BTC/USD"
    "Minimum price fluctuation", "0.1 USD = 0.0001 BTC"
    "Quote currency", "USD"
    "Type", "Quanto"
    "Margin & PNL currency", "BTC"
    "BTC value of 1 contract", "Price × 0.001 BTC"
    "USD value of 1 contract", "Price² × 0.001 BTC"
    "BTC P&L of 1 contract", "(SellPrice - BuyPrice) × 0.001 BTC"
    "Approx Leverage", "| Price × 0.001 BTC / Margin
    | Example: 422 × 0.001 / (0.0001 × 20) = 211
    | approx. Price × 10/(stop_ticks+10)"
    "Spot Anchor Price", "| Spot anchor price is median of
    | OKCoin, BitFinex and Bitstamp BTC/USD
    | real-time spot price"
