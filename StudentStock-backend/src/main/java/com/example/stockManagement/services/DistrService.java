package com.example.stockManagement.services;

import com.example.stockManagement.dto.DistriDto;
import com.example.stockManagement.entity.DistributedItem;

import java.util.List;

public interface DistrService {
    String distribute(DistriDto dto);
    List<DistributedItem> getAllStock();
}
