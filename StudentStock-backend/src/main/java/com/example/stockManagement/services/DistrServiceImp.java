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


    @Override
    public String distribute(DistriDto dto){

        List<Stock> stocks = stockRepo.findStockByGender(dto.getGender());

        Stock stock = stocks.get(0);

        if(stock == null){
            System.out.println("no data in stock");
        }

        if(stock.getShirtQuantity()<1 || stock.getPantQuantity()<1 || stock.getBagQuantity()<1){
            return "Insufficient stock";
        }
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
