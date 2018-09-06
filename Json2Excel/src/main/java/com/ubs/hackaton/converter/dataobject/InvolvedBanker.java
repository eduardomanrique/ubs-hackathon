package com.ubs.hackaton.converter.dataobject;

import lombok.Data;

@Data
public class InvolvedBanker {

    private int bankerId;
    private String fullName;
    private String role;
    private String rank;
    private int rankId;
    private String team;
    private String rating;
    private String emailAddress;
    private String country;
}
