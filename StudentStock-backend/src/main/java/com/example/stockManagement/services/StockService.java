package com.example.stockManagement.services;

import com.example.stockManagement.entity.Stock;

import java.util.List;

public interface StockService {

        long saveStock(Stock stock);

        List<Stock> getAllStock();

        List<Stock> getStockByGender(String gender);
}
