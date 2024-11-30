package com.example.stockManagement.repository;

import com.example.stockManagement.entity.DistributedItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DistriRepo extends JpaRepository<DistributedItem, Long> {

}
