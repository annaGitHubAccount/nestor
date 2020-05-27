package de.anna.springboot.nestor;

import de.anna.springboot.model.dto.ProduktStammdatenDTO;
import de.anna.springboot.service.ProduktStammdatenService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
class ProduktStammdatenServiceIT {

    @Autowired
    private ProduktStammdatenService produktStammdatenService;

    @Test
    public void shouldGenerateProduktStammdatenList(){

        List<ProduktStammdatenDTO> produktStammdatenDTOList = produktStammdatenService.findAll();
        Assert.assertEquals(6, produktStammdatenDTOList.size());
    }
}
