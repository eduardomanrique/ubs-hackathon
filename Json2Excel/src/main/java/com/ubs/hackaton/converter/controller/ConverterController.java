package com.ubs.hackaton.converter.controller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.common.io.Files;
import com.ubs.hackaton.converter.dataobject.Data;
import com.ubs.hackaton.converter.dataobject.Opportunity;
import com.ubs.hackaton.converter.util.XslWriter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;


@RestController
@RequestMapping("/converter")
public class ConverterController {

    private final ObjectMapper jsonMapper = new ObjectMapper();

    @Autowired
    private XslWriter xslWriter;

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

    }
}
