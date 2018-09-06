package com.ubs.hackaton.converter.util;
import com.google.gson.Gson;

public class Util {

    public static Object getConvertedObject(String jsonFile, Object object) {
        Gson gson = new Gson();
        return gson.fromJson(jsonFile, object.getClass());
    }
}
