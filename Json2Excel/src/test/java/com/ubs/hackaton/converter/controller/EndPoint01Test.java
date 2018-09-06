package com.ubs.hackaton.converter.controller;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.web.client.RestTemplate;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc

public class EndPoint01Test {

    @Autowired
    private MockMvc mvc;

    @Test
    public void shouldReturnACreatedStatus() throws Exception {

        RestTemplate restTemplate = new RestTemplate();
        String quote = restTemplate.getForObject("http://www.mocky.io/v2/5b90ff993100008200939774", String.class);

        this.mvc.perform(post("/endpoint01/")
                .accept(MediaType.APPLICATION_JSON)
                .contentType(MediaType.APPLICATION_JSON_VALUE)
                .content(quote))
                .andExpect(status().isCreated());
    }
}
