package com.example.stockManagement.repository;

import com.example.stockManagement.entity.DistributedItem;
import com.example.stockManagement.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface DistriRepo extends JpaRepository<DistributedItem, Long> {
//    // Additional queries can be added here if needed (e.g., find by gender)
//    // This method finds stock by type (e.g., "shirt", "pant", or "bag") and other filters
//    Optional<Stock> findByTypeAndGenderAndItemName(String type, String gender, String itemName);
////
////    // You can add a method to find bags only (without gender, as bags are common)
//    Optional<Stock> findByType(String type);
}
