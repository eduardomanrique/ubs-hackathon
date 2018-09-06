package com.ubs.hackaton.converter.dataobject;

import lombok.Data;

import java.util.List;

@Data
public class Opportunity {

    private int opportunityId;
    private String opportunityStatus;
    private int companyId;
    private String companyName;
    private int productId;
    private String productName;
    private String subProductId;
    private String subProductName;

    private String countryCode;
    private int industryId;
    private String industryName;
    private String dealSizeConvertedInUSD;
    private double netNewMoney;
    private double expenseCapSize;
    private List<InvolvedBanker> involvedBankers;

    private String actualRevenueConvertedInUsd;
}
