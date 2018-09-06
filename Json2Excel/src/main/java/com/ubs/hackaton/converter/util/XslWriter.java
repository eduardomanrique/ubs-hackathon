package com.ubs.hackaton.converter.util;

import com.ubs.hackaton.converter.dataobject.Data;
import com.ubs.hackaton.converter.dataobject.Opportunity;
import org.apache.poi.hssf.usermodel.HSSFPalette;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.hssf.util.HSSFColor;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.ss.util.CellRangeAddress;
import org.apache.poi.ss.util.CellUtil;
import org.springframework.batch.item.ExecutionContext;
import org.springframework.batch.item.ItemStreamException;
import org.springframework.batch.item.ItemStreamWriter;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.WritableResource;
import org.springframework.stereotype.Service;

import java.io.BufferedOutputStream;
import java.util.ArrayList;
import java.util.List;


@Service
public class XslWriter implements ItemStreamWriter<Data> {
    private HSSFWorkbook wb;
    private WritableResource resource;
    private int row;

    @Override
    public void open(ExecutionContext executionContext) throws ItemStreamException {

    }

    public void open() throws ItemStreamException {
        wb = new HSSFWorkbook();
        HSSFPalette palette = wb.getCustomPalette();
        HSSFSheet s = wb.createSheet();

        resource = new FileSystemResource("C:\\temp\\fileExcell.xls");
        row = 0;
        createTitleRow(s, palette);
        createHeaderRow(s);
    }

    private void createTitleRow(HSSFSheet s, HSSFPalette palette) {
        HSSFColor redish = palette.findSimilarColor((byte) 0xE6, (byte) 0x50, (byte) 0x32);
        palette.setColorAtIndex(redish.getIndex(), (byte) 0xE6, (byte) 0x50, (byte) 0x32);

        CellStyle headerStyle = wb.createCellStyle();
        headerStyle.setWrapText(true);
        headerStyle.setAlignment(HorizontalAlignment.CENTER);
        headerStyle.setFillForegroundColor(redish.getIndex());
        headerStyle.setFillPattern(FillPatternType.SOLID_FOREGROUND);
        headerStyle.setBorderTop(BorderStyle.THIN);
        headerStyle.setBorderBottom(BorderStyle.THIN);
        headerStyle.setBorderLeft(BorderStyle.THIN);
        headerStyle.setBorderRight(BorderStyle.THIN);

        HSSFRow r = s.createRow(row);

        Cell c = r.createCell(0);
        c.setCellValue("UBS HACKATON 2018");
        r.createCell(1).setCellStyle(headerStyle);
        r.createCell(2).setCellStyle(headerStyle);
        s.addMergedRegion(new CellRangeAddress(0, 0, 0, 15));
        c.setCellStyle(headerStyle);

        CellUtil.setAlignment(c, HorizontalAlignment.CENTER);

        row++;
    }

    private void createHeaderRow(HSSFSheet s) {
        CellStyle cs = wb.createCellStyle();
        cs.setWrapText(true);
        cs.setAlignment(HorizontalAlignment.LEFT);
        int columnIndex = 0;
        int columnCell = 1;

        HSSFRow r = s.createRow(row);
        r.setRowStyle(cs);

        List<String> fields = new ArrayList<>();

        fields.add("Opportunity ID");
        fields.add("Opportunity Status");
        fields.add("Company ID");
        fields.add("Company Name");
        fields.add("Product ID");
        fields.add("Product Name");
        fields.add("Sub Product ID");
        fields.add("Sub Product Name");
        fields.add("Industry ID");
        fields.add("Industry Name");
        fields.add("Deal Size Converted in USD");
        fields.add("Country Code");
        fields.add("Net new Money");
        fields.add("Expense New Money");
        fields.add("Expense Cap Size");

        Cell c = r.createCell(0);

        for (String field: fields)
        {
            c.setCellValue(field);
            s.setColumnWidth(columnIndex++, poiWidth(18.0));
            c = r.createCell(columnCell++);
        }

        row++;
    }

    private int poiWidth(double width) {
        return (int) Math.round(width * 256 + 200);
    }

    public void write(List<? extends Data> items) throws Exception {
    }

    public void write(Data items) throws Exception {
        HSSFSheet s = wb.getSheetAt(0);

        CellStyle cellStyle = wb.createCellStyle();
        cellStyle.setBorderBottom(BorderStyle.THICK);
        cellStyle.setBottomBorderColor(IndexedColors.BLUE.getIndex());
        cellStyle.setBorderLeft(BorderStyle.DASHED);
        cellStyle.setLeftBorderColor(IndexedColors.GREEN.getIndex());
        cellStyle.setBorderRight(BorderStyle.DOTTED);
        cellStyle.setRightBorderColor(IndexedColors.RED.getIndex());
        cellStyle.setBorderTop(BorderStyle.HAIR);
        cellStyle.setTopBorderColor(IndexedColors.CORAL.getIndex());

        for (Opportunity op:items.getOpportunities())
        {
            int columnIndex = 0;

            Row r = s.createRow(row++);

            Cell c = r.createCell(columnIndex++);
            c.setCellStyle(cellStyle);

            c.setCellValue(op.getOpportunityId());

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getOpportunityStatus());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getCompanyId());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getCompanyName());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getProductId());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getProductName());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getSubProductId());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getSubProductName());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getIndustryId());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getIndustryName());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getDealSizeConvertedInUSD());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getCountryCode());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getActualRevenueConvertedInUsd());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getNetNewMoney());
            c.setCellStyle(cellStyle);

            c = r.createCell(columnIndex++);
            c.setCellValue(op.getExpenseCapSize());
            c.setCellStyle(cellStyle);
        }

    }

    @Override
    public void update(ExecutionContext executionContext) throws ItemStreamException {
    }

    @Override
    public void close() throws ItemStreamException {
        if (wb == null) {
            return;
        }

        try (BufferedOutputStream bos = new BufferedOutputStream(resource.getOutputStream())) {
            wb.write(bos);
            bos.flush();
            wb.close();
        } catch (Exception ex) {
            throw new ItemStreamException("Error writing to output file", ex);
        }
        row = 0;
    }

    public void createFooterRow() {
        HSSFSheet s = wb.getSheetAt(0);
        HSSFRow r = s.createRow(row);
        Cell c = r.createCell(3);
        c.setCellType(CellType.FORMULA);
        c.setCellFormula(String.format("SUM(D3:D%d)", row));
        row++;

    }
}
