package com.example.stockManagement.repository;

import com.example.stockManagement.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface StockRepo extends JpaRepository<Stock, Long> {
    List<Stock> findStockByGender(String gender);
//    Optional<Stock> findByTypeAndGenderAndItemName(String type, String gender, String itemName);

//    Optional<Stock> findByType(String bag);
//
//    Optional<Object> findByTypeAndGenderAndItemName(String gender, String shirt, String shirtSize);

//    Optional<Stock> findByTypeAndGenderAndItemName(String gender, String shirt, String shirtSize);
//    List<Stock> findByTypeAndGenderAndItemName(String gender, String shirt, String shirtSize);

}
