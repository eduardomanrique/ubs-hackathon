package com.ubs.hackaton.converter.dataobject;

import java.util.List;

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

    public String getActualRevenueConvertedInUsd() {
        return actualRevenueConvertedInUsd;
    }

    public void setActualRevenueConvertedInUsd(String actualRevenueConvertedInUsd) {
        this.actualRevenueConvertedInUsd = actualRevenueConvertedInUsd;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public int getOpportunityId() {
        return opportunityId;
    }

    public void setOpportunityId(int opportunityId) {
        this.opportunityId = opportunityId;
    }

    public String getOpportunityStatus() {
        return opportunityStatus;
    }

    public void setOpportunityStatus(String opportunityStatus) {
        this.opportunityStatus = opportunityStatus;
    }

    public int getCompanyId() {
        return companyId;
    }

    public void setCompanyId(int companyId) {
        this.companyId = companyId;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public int getProductId() {
        return productId;
    }

    public void setProductId(int productId) {
        this.productId = productId;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getSubProductId() {
        return subProductId;
    }

    public void setSubProductId(String subProductId) {
        this.subProductId = subProductId;
    }

    public String getSubProductName() {
        return subProductName;
    }

    public void setSubProductName(String subProductName) {
        this.subProductName = subProductName;
    }

    public int getIndustryId() {
        return industryId;
    }

    public void setIndustryId(int industryId) {
        this.industryId = industryId;
    }

    public String getIndustryName() {
        return industryName;
    }

    public void setIndustryName(String industryName) {
        this.industryName = industryName;
    }

    public String getDealSizeConvertedInUSD() {
        return dealSizeConvertedInUSD;
    }

    public void setDealSizeConvertedInUSD(String dealSizeConvertedInUSD) {
        this.dealSizeConvertedInUSD = dealSizeConvertedInUSD;
    }

    public double getNetNewMoney() {
        return netNewMoney;
    }

    public void setNetNewMoney(double netNewMoney) {
        this.netNewMoney = netNewMoney;
    }

    public double getExpenseCapSize() {
        return expenseCapSize;
    }

    public void setExpenseCapSize(double expenseCapSize) {
        this.expenseCapSize = expenseCapSize;
    }

    public List<InvolvedBanker> getInvolvedBankers() {
        return involvedBankers;
    }

    public void setInvolvedBankers(List<InvolvedBanker> involvedBankers) {
        this.involvedBankers = involvedBankers;
    }
}
