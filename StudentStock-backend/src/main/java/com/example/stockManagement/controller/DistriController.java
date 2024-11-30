package com.example.stockManagement.controller;

import com.example.stockManagement.dto.DistriDto;
import com.example.stockManagement.entity.DistributedItem;
import com.example.stockManagement.services.DistrServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/distribution")
@CrossOrigin
public class DistriController {
    @Autowired
    private DistrServiceImp distrServiceImp;

    @PostMapping("/distribute")
    public ResponseEntity<String> distribute(@RequestBody DistriDto distributedItem){
        return new ResponseEntity<String>(distrServiceImp.distribute(distributedItem),HttpStatus.CREATED);
    }

    @GetMapping("/allDistributions")
    public List<DistributedItem> getAllStock() {
        return distrServiceImp.getAllStock();
    }
}
