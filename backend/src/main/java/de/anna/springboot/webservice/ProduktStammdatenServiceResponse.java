package de.anna.springboot.webservice;

public class ProduktStammdatenServiceResponse {

    private boolean isOk;

    private String error;

    public ProduktStammdatenServiceResponse(boolean isOk, String error) {
        this.isOk = isOk;
        this.error = error;
    }

    public ProduktStammdatenServiceResponse() {
    }

    public boolean isOk() {
        return isOk;
    }

    public void setOk(boolean ok) {
        isOk = ok;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
