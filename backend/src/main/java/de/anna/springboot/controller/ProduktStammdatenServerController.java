package de.anna.springboot.controller;

import de.anna.springboot.model.dto.ProduktStammdatenDTO;
import de.anna.springboot.service.ProduktStammdatenService;
import de.anna.springboot.webservice.ProduktStammdatenListResponse;
import de.anna.springboot.webservice.ProduktStammdatenServiceResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
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

    @PostMapping("/addproduktstammdaten")
    public ProduktStammdatenServiceResponse addProduktStammdaten(@RequestBody ProduktStammdatenDTO produktStammdatenDTO) {

        try {
            produktStammdatenService.save(produktStammdatenDTO);

        } catch (Exception exception) {
            return new ProduktStammdatenServiceResponse(false, exception.toString());
        }
        return new ProduktStammdatenServiceResponse(true, "");
    }

    @DeleteMapping("/deleteproduktstammdaten/{id}")
    public ProduktStammdatenServiceResponse deleteProduktStammdaten(@PathVariable Long id) {

        try {
            produktStammdatenService.deleteProduktStammdatenById(id);

        } catch (Exception exception) {
            return new ProduktStammdatenServiceResponse(false, exception.toString());
        }
        return new ProduktStammdatenServiceResponse(true, "");
    }

}
