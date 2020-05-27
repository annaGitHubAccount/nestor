package de.anna.springboot.controller;

import de.anna.springboot.model.dto.ProduktStammdatenDTO;
import de.anna.springboot.service.ProduktStammdatenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(produces = "application/json")
public class ProduktStammdatenServerController {

    @Autowired
    ProduktStammdatenService produktStammdatenService;

    @GetMapping("/produktstammdaten")
    public List<ProduktStammdatenDTO> generateProduktStammdatenListFromServer(){

        List<ProduktStammdatenDTO> produktStammdatenDTOList = produktStammdatenService.findAll();
        return produktStammdatenDTOList;
    }

}
