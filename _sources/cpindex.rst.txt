Coinpit Index
=============

Coinpit uses an `open-source index`_ to track bitcoin spot prices on which contracts are settled.
The index is designed to have the following properties:

Representative of the spot market
---------------------------------
To ensure we are undisturbed by the uptime and engine stability issues at spot exchanges, we use a median based index.

Many indexes use variants of volume weighted prices `VWAP`_ to compute the index.
While VWAP is a reasonable choice for mature markets, it introduces instability in the presently developing crypto-market.
It is very common for exchanges to go down for days or be down for maintenance without notice. Often exchanges
with the heaviest volumes `go down hard`_ and
`stay down`_. Exchanges can also have `chaotic swings and bad prints`_ that
can cause volume weighted indexes to jerk around wildly, causing `unnecessary instability`_

Robust against exchange failure and downtime
--------------------------------------------
A median automatically discards extremes by its very definition and any extreme behavior or instability is automatically eliminated.
Exchanges can go down, have bad prints, have engine issues, flaky price feeds, change API, get DDOSed or fail to perform smoothly for
any number of reasons and there would be minimal impact on the index. A huge variance among prices can be ameliorated by adding
more index components as needed.

Transparent and reproducible
----------------------------
Proprietary indexes may be non-reproducible easily and complex formulae may not be verifiable at a glance. To keep things simple,
we use a standard median of component exchanges.

Current Exchanges
-----------------

- `Bitfinex <https://www.bitfinex.com>`_
- `Bitstamp  <https://www.Bitstamp.com>`_
- `GDAX <https://www.GDAX.com>`_
- `Gemini <https://www.Gemini.com>`_
- `OKCoin <https://www.OKCoin.com>`_
- `ItBit <https://www.itbit.com>`_
- `Kraken <https://www.kraken.com>`_

.. _open-source index: https://github.com/coinpit/coinpit-index
.. _VWAP: http://www.investopedia.com/terms/v/vwap.asp
.. _go down hard: https://btcmanager.com/bitfinex-confirm-64-million-hack-btc-usd-slumps/
.. _stay down: http://www.businessinsider.com/reports-mtgox-halts-all-trading-2014-2
.. _chaotic swings and bad prints: http://www.bitcoinfuturesguide.com/bitcoin-blog/gdax-coinbase-exchange-sells-down-to-006-on-btcusd-pair-after-maintenance
.. _unnecessary instability: http://www.trustnodes.com/2017/04/16/gdax-glitch-sends-bitcoins-price-0-06-bitmex-longs-get-called
