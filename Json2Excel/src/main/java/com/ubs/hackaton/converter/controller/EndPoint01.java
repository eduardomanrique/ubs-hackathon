package com.ubs.hackaton.converter.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.ubs.hackaton.converter.dataobject.Data;
import com.ubs.hackaton.converter.dataobject.Opportunity;
import com.ubs.hackaton.converter.util.XslWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.ArrayList;

@RestController
@RequestMapping("/endpoint01")
public class EndPoint01 {

    private final ObjectMapper jsonMapper = new ObjectMapper();

    @Autowired
    private XslWriter xslWriter;

//    @GetMapping("/{var01}")
//    public String getCart(@Valid @PathVariable int var01)
//    {
//        RestTemplate restTemplate = new RestTemplate();
//        String quote = restTemplate.getForObject("http://www.mocky.io/v2/5b90ff993100008200939774", String.class);
//
//        JSONObject output;
//
//        try{
//            output = new JSONObject(quote);
//
//            JSONArray opportunities = output.getJSONObject("data").getJSONArray("opportunities");
//            JSONArray docs = new JSONArray();
//            Iterator<Object> opportunitiesIterator = opportunities.iterator();
//            while(opportunitiesIterator.hasNext()) {
//                JSONObject opportunity = (JSONObject) opportunitiesIterator.next();
//                JSONArray involvedBankers = opportunity.getJSONArray("involvedBankers");
//               // opportunity.(involvedBankers);
//                //involvedBankers.put(opportunity);
//                Iterator<Object> involvedBankersIterator = involvedBankers.iterator();
//                while(involvedBankersIterator.hasNext()) {
//                    JSONObject involvedBanker = (JSONObject) involvedBankersIterator.next();
//                    for (String key :involvedBanker.keySet()) {
//                        opportunity.accumulate(key, involvedBanker.getString(key));
//                    }
//                }
//            }
//           // JSONArray docs = ((JSONObject) opportunities.get(0)).getJSONArray("involvedBankers");
////            JSONArray docs = output.getJSONObject("data").getJSONArray("opportunities").get(0);
//            File file = new File("C:\\temp\\file.csv");
//            String csv = CDL.toString(opportunities);
//
//            FileUtils.writeStringToFile(file, csv, "UTF-8");
//
//        }catch(Exception e){
//            System.out.println(e.getMessage());
//        }
//
//
//        return "Done";
//
//    }

    @PostMapping("/")
    public String getXls(@Valid @RequestBody String entity) throws Exception {

        System.out.println(entity);
        Data obj = jsonMapper.readValue(entity, Data.class);
        Data data = new Data();

        data.setOpportunities(new ArrayList<>());

        Opportunity opportunity = new Opportunity();
        opportunity.setOpportunityId(201);
        opportunity.setOpportunityStatus("Closed");
        opportunity.setCompanyId(978451);
        opportunity.setCompanyName("Abacus Bumptious Skull, Italy");

        opportunity.setProductName("ECMG");
        opportunity.setProductId(1022);
        opportunity.setSubProductId("10221");
        opportunity.setSubProductName("Equity");
        opportunity.setIndustryId(201);
        opportunity.setIndustryName("Healthcare");
        opportunity.setDealSizeConvertedInUSD("15000");
        opportunity.setCountryCode("IT");
        opportunity.setActualRevenueConvertedInUsd("5000");
        opportunity.setNetNewMoney(0.0);
        opportunity.setExpenseCapSize(0.0);

        Opportunity opportunity2 = new Opportunity();
        opportunity2.setOpportunityId(201);
        opportunity2.setOpportunityStatus("Closed");
        opportunity2.setCompanyId(978451);
        opportunity2.setCompanyName("Abacus Bumptious Skull, Italy");

        opportunity2.setProductName("ECMG");
        opportunity2.setProductId(1022);
        opportunity2.setSubProductId("10221");
        opportunity2.setSubProductName("Equity");
        opportunity2.setIndustryId(201);
        opportunity2.setIndustryName("Healthcare");
        opportunity2.setDealSizeConvertedInUSD("15000");
        opportunity2.setCountryCode("IT");
        opportunity2.setActualRevenueConvertedInUsd("5000");
        opportunity2.setNetNewMoney(0.0);
        opportunity2.setExpenseCapSize(0.0);

        data.getOpportunities().add(opportunity);
        data.getOpportunities().add(opportunity2);

       // data = (Data) Util.getConvertedObject(entity, data);
        xslWriter.open();
        xslWriter.write(data);
        xslWriter.close();

        return "Done";

    }



    /*

    InvolvedBanker involvedBankerDO = new InvolvedBanker();
        involvedBankerDO.setBankerId(20);
        involvedBankerDO.setFullName("John Killan");
        involvedBankerDO.setRole("Deal Team");
        involvedBankerDO.setRank("Group Manager");
        involvedBankerDO.setRankId(10);
        involvedBankerDO.setTeam("Data management");
        involvedBankerDO.setRating("Important");
        involvedBankerDO.setEmailAddress(null);
        involvedBankerDO.setCountry("USA");

        Opportunity oportunityDO = new Opportunity();
        oportunityDO.setOportunityId(201);
        oportunityDO.setOportunityStatus("Closed");
        oportunityDO.getCompanyId(9784571);

     */
}
