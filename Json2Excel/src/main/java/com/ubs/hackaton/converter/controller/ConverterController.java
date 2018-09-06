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

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.util.ArrayList;

@RestController
@RequestMapping("/converter")
public class ConverterController {

    private final ObjectMapper jsonMapper = new ObjectMapper();

    @Autowired
    private XslWriter xslWriter;

    @PostMapping(value = "/convertToExcel", produces = "application/vnd.ms.excel")
    public void convertToExcel(@Valid @RequestBody Data data, HttpServletResponse response) throws Exception {

        xslWriter.open();
        xslWriter.write(data);

        xslWriter.write(response.getOutputStream());

        response.setHeader("Content-Disposition", "attachment; filename=report.xls");
        response.flushBuffer();
    }
}
