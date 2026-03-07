package com.secondchance.model;

import java.util.List;

public class Site {
    private List<Double> geolocation;
    private List<Float> hoursOfOperation;
    private String siteName;

    public Site() {}

    public Site(List<Double> geolocation, List<Float> hoursOfOperation, String siteName) {
        this.geolocation = geolocation;
        this.hoursOfOperation = hoursOfOperation;
        this.siteName = siteName;
    }

    public List<Double> getGeolocation() { return geolocation; }
    public void setGeolocation(List<Double> geolocation) { this.geolocation = geolocation; }

    public List<Float> getHoursOfOperation() { return hoursOfOperation; }
    public void setHoursOfOperation(List<Float> hoursOfOperation) { this.hoursOfOperation = hoursOfOperation; }

    public String getSiteName() { return siteName; }
    public void setSiteName(String siteName) { this.siteName = siteName; }
}
