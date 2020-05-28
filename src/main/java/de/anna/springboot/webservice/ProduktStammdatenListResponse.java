package de.anna.springboot.webservice;

import de.anna.springboot.model.dto.ProduktStammdatenDTO;

import java.util.List;

public class ProduktStammdatenListResponse {

    private List<ProduktStammdatenDTO> produktStammdatenDTOList;

    public ProduktStammdatenListResponse() {
    }

    public ProduktStammdatenListResponse(List<ProduktStammdatenDTO> produktStammdatenDTOList) {
        this.produktStammdatenDTOList = produktStammdatenDTOList;
    }

    public List<ProduktStammdatenDTO> getProduktStammdatenDTOList() {
        return produktStammdatenDTOList;
    }

    public void setProduktStammdatenDTOList(List<ProduktStammdatenDTO> produktStammdatenDTOList) {
        this.produktStammdatenDTOList = produktStammdatenDTOList;
    }
}
