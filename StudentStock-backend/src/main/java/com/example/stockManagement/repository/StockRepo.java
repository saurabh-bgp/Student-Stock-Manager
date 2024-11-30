package com.example.stockManagement.repository;

import com.example.stockManagement.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;


public interface StockRepo extends JpaRepository<Stock, Long> {
    List<Stock> findStockByGender(String gender);

}
