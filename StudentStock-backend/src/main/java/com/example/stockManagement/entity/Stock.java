package com.example.stockManagement.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String gender;


    @Min(value = 15, message = "Shirt size cannot be negative")
    private Integer shirtSize;

    @Min(value = 0, message = "Shirt quantity cannot be negative")
    private Long shirtQuantity;

    @Min(value = 15, message = "Pant size cannot be negative")
    private Integer pantSize;

    @Min(value = 0, message = "Pant quantity cannot be negative")
    private Long pantQuantity;

    @Min(value = 0, message = "Bag quantity cannot be negative")
    private Integer bagQuantity;


}
