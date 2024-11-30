package com.example.stockManagement.controller;

import com.example.stockManagement.entity.Stock;
import com.example.stockManagement.services.StockServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stock")
@CrossOrigin
public class StockController {
    @Autowired
    private StockServiceImp stockService;

    @GetMapping("/allStock")
    public List<Stock> getAllStock() {
        return stockService.getAllStock();
    }

    @PostMapping("/addStock")
    public ResponseEntity<Long> saveStock(@RequestBody Stock stock){
        return new ResponseEntity<Long>(stockService.saveStock(stock), HttpStatus.CREATED);
    }

    @GetMapping("/getStockByGender/{gender}")
    public List<Stock> getStockByGender(@PathVariable String gender){
        return stockService.getStockByGender(gender);
    }
}
