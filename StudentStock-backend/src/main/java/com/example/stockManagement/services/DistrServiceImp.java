package com.example.stockManagement.services;

import com.example.stockManagement.dto.DistriDto;
import com.example.stockManagement.entity.DistributedItem;
import com.example.stockManagement.entity.Stock;
import com.example.stockManagement.repository.DistriRepo;
import com.example.stockManagement.repository.StockRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DistrServiceImp implements DistrService{
    @Autowired
    private StockRepo stockRepo;

    @Autowired
    private DistriRepo distriRepo;

//    @Override
//    public long saveStock(Stock stock){
//        Stock _stock = stockRepo.save(stock);
//        return _stock.getId();
//    }

//    @Override
//    public long distribute(DistributedItem distributedItem){
//        DistributedItem _dist = distriRepo.save(distributedItem);
//        return _dist.getId();
//    }

    @Override
    public String distribute(DistriDto dto){

        List<Stock> stocks = stockRepo.findStockByGender(dto.getGender());

        Stock stock = stocks.get(0);

        if(stock == null){
            System.out.println("no data in stock");
        }

//        Stock pantStock = (Stock) stockRepo.findByTypeAndGenderAndItemName(dto.getGender(), "pant", dto.getPantSize())
//                .orElseThrow(() -> new RuntimeException("Requested pant size not available"));
//
//        Stock bagStock = (Stock) stockRepo.findByType("bag").orElseThrow(() -> new RuntimeException("Bags not available"));

        // Ensure sufficient stock
        if(stock.getShirtQuantity()<1 || stock.getPantQuantity()<1 || stock.getBagQuantity()<1){
            return "Insufficient stock";
        }

//        if (shirtStock.getQuantity() < 1 || pantStock.getQuantity() < 1 || bagStock.getQuantity() < 1) {
//            return "Insufficient stock to distribute";
//        }

//         Deduct one item from each stock
        Stock temp = new Stock();
        temp.setGender(stock.getGender());
        temp.setShirtSize(stock.getShirtSize());
        temp.setPantSize(stock.getPantSize());
        temp.setShirtQuantity(stock.getShirtQuantity() - 1);
        temp.setPantQuantity(stock.getPantQuantity() - 1);
        temp.setBagQuantity(stock.getBagQuantity() - 1);

        System.out.println(temp);
        System.out.println("gfhjkl;");

        stockRepo.delete(stock);
        stockRepo.save(temp);

        // Save distribution record
        DistributedItem distributedItem = new DistributedItem();
        distributedItem.setStudentName(dto.getStudentName());
        distributedItem.setGender(dto.getGender());
        distributedItem.setShirtSize(dto.getShirtSize());
        distributedItem.setPantSize(dto.getPantSize());
        distributedItem.setBagDistributed(1);

        distriRepo.save(distributedItem);

        return "Distribution successful for " + dto.getStudentName();
    }

    public List<DistributedItem> getAllStock() {
        return distriRepo.findAll();
    }
}
