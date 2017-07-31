---
date: 2017-05-12
tags:
    - project
---

# Fare alert system

---

Purchasing a flight ticket, though a simple and quick affair, causes lot of anxiety to many travellers even today due to the fact that airlines frequently change fares. Due to this dynamic nature of airfare fluctuation, fare alert system plays a key role in customer engagement and better user experience in travel industry.

## Fare volatility

---

Airlines start actively increasing fares in the last 2 weeks, often doubling them 24hrs prior to departure time. Under competitive pressure from other airlines, they also announce flash sales with significantly reduced fares sometimes by even 50%. The catch however is, limited seat availability at such discounted fares. This dynamism in fares fluctuating up and down often during the same day, is bound to drive travellers anxious about fares.

## Fare alert functionality

---

Customers typically search anxiously 15-30 times before making a successful booking.

## Architecture (using pubsub and redis for entire structure)
#### About message streaming
cassandra(fault tolerant, scalable, since we can not lose data for airfare), kafka (pub-sub service), mongodb (persistent database), redis(mem cache), elastic search(fast retrieval) and their particular use cases

<!--Write about curator and multiple engagement through fare alerts  -->

## Further possibilities

<!--Write about personalizing fare alerts for more customized experience  -->
