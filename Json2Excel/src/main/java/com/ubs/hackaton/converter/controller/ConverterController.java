package com.ubs.hackaton.converter.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.ubs.hackaton.converter.dataobject.ConverterResult;
import com.ubs.hackaton.converter.dataobject.Opportunity;
import com.ubs.hackaton.converter.util.XslWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.File;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.util.List;

@RestController
@RequestMapping("/converter")
public class ConverterController {

    private final ObjectMapper jsonMapper = new ObjectMapper();

    @Autowired
    private XslWriter xslWriter;

    @RequestMapping(value="/convertToExcel", method=RequestMethod.OPTIONS)
    public void option() {
    }

    @CrossOrigin
    @PostMapping(value = "/convertToExcel")
    public ConverterResult convertToExcel(@Valid @RequestBody List<Opportunity> opportunities) throws Exception {

        xslWriter.open();
        xslWriter.write(opportunities);

        File file = new File((int)(Math.random() * 10000) + ".xls");
        System.out.println(file.getAbsolutePath());
        xslWriter.write(new FileOutputStream(file));
        return ConverterResult.builder().url("http://localhost:8080/converter/download/" + file.getName()).build();
    }

    @GetMapping(value = "/download/{fileName}", produces = "application/vnd.ms.excel")
    public void convertToExcel(@PathVariable String fileName, HttpServletResponse response) throws Exception {

        File file = new File(fileName);
        System.out.println(file.getAbsolutePath());
        response.setHeader("Content-Disposition", "attachment; filename=report.xls");
        Files.copy(file.toPath(), response.getOutputStream());

    }

    @CrossOrigin
    @PostMapping(value = "/processData")
    public List<Opportunity> processData(@Valid @RequestBody List<Opportunity> opportunities) throws Exception {
        opportunities.forEach(opportunity -> opportunity.setExpenseCapSize(opportunity.getExpenseCapSize() * 5000));
        return opportunities;
    }
}
