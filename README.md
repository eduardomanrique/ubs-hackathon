[![Build Status](https://travis-ci.org/eduardomanrique/ubs-hackathon.svg?branch=master)](https://travis-ci.org/eduardomanrique/ubs-hackathon)
# ubs-hackathon
UBS Hackathon: Banker Revenue calculation project
--------------

**Business flow to be automated:**

Initial JSON with Opportunities and Bankers info (*.XLS file for Business users) 

1. Points calculation (Business Rules):  

- if role = "Deal Team" and  "rating": "Important" -> *20*
- if role = "Deal Team" and  "rating": "Critical" or "dealSizeConvertedInUSD"> 1000 -> *50*
- if role = "Project Sponsor" and  "rating": "Critical" or  "rank": "Executive Director"-> *100*
- if role = "Project Director" and  "rating": "Critical" and  "team": "Advisory" -> *120*

 - Default value -> *10*

2. Get Percentage as per points (and POST to DealAttribution)

3. Multiply on  opportuninty.actualRevenueConvertedInUSD = Revenue brutto

4. Apply taxes and timesheet koef to calculate revenue net: 
	- USA - **0.15** tax rate
	- UK - **0.23** tax rate
 
  - Revenue brutto = Revenue brutto*(1-tax rate)

5. Generate report.


## Endpoint with Opportunities
` curl -i "http://www.mocky.io/v2/5b90ff993100008200939774"`


## TODO: Future improvements:
 - Voice control to manage business rules
 - Intelligent incoming data clean-up (ML)
 - Business rules suggestions (ML)
 - Historical data analysis: comparison banker revenue during period of time and/or other bankers.
 - New Data Feeds plug-in engine.
