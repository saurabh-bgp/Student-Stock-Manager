package com.example.stockManagement.services;

import com.example.stockManagement.entity.Stock;
import com.example.stockManagement.repository.StockRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockServiceImp implements StockService{
    @Autowired
    private StockRepo stockRepo;

    public List<Stock> getAllStock() {
        return stockRepo.findAll();
    }

    @Override
    public long saveStock(Stock stock){
        Stock _stock = stockRepo.save(stock);
        return _stock.getId();
    }

    @Override
    public List<Stock> getStockByGender(String gender){
        return stockRepo.findStockByGender(gender);
    }
}
