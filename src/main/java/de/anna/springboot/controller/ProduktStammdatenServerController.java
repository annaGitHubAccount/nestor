package de.anna.springboot.controller;

import de.anna.springboot.model.dto.ProduktStammdatenDTO;
import de.anna.springboot.service.ProduktStammdatenService;
import de.anna.springboot.webservice.ProduktStammdatenListResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(produces = "application/json")
public class ProduktStammdatenServerController {

    @Autowired
    private ProduktStammdatenService produktStammdatenService;

    @GetMapping("/produktstammdaten")
    public ProduktStammdatenListResponse findAllProduktStammdaten(){

        List<ProduktStammdatenDTO> produktStammdatenDTOList = produktStammdatenService.findAll();
        ProduktStammdatenListResponse produktStammdatenListResponse = new ProduktStammdatenListResponse(produktStammdatenDTOList);

        return produktStammdatenListResponse;
    }

}
