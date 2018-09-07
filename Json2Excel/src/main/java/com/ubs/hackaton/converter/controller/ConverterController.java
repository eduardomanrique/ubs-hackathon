package com.ubs.hackaton.converter.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
<<<<<<< HEAD
import com.google.common.io.Files;
import com.ubs.hackaton.converter.dataobject.Data;
=======
import com.ubs.hackaton.converter.dataobject.ConverterResult;
>>>>>>> bc18fe00b5304a9b726d4413e36004c47eed2780
import com.ubs.hackaton.converter.dataobject.Opportunity;
import com.ubs.hackaton.converter.util.XslWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.File;
<<<<<<< HEAD
import java.io.FileInputStream;
import java.io.FileOutputStream;

=======
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.util.List;
>>>>>>> bc18fe00b5304a9b726d4413e36004c47eed2780

@RestController
@RequestMapping("/converter")
public class ConverterController {

    private final ObjectMapper jsonMapper = new ObjectMapper();

    @Autowired
    private XslWriter xslWriter;

<<<<<<< HEAD
    @PostMapping(value = "/convertToExcel")
    public void convertToExcel(@Valid @RequestBody Data data, HttpServletResponse response) throws Exception {

        xslWriter.open();
        xslWriter.write(data);
        File f = new File("C:\\temp\\file.xls");
        xslWriter.write(f);

    }

    @GetMapping(value = "/getExcel", produces = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
    public void getExcel(HttpServletRequest request, HttpServletResponse response) throws Exception {

        File file = new File("C:\\temp\\file.xls");
        Files.copy(file, response.getOutputStream());

        response.setHeader("content-disposition", "attachment; filename=report.xls");

        response.flushBuffer();
        file.delete();

=======
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
>>>>>>> bc18fe00b5304a9b726d4413e36004c47eed2780
    }
}
