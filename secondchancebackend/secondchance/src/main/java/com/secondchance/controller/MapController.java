package com.secondchance.controller;

import com.secondchance.model.Site;
import com.secondchance.service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/map")
public class MapController {

    private final MapService mapService;

    @Autowired
    public MapController(MapService mapService) {
        this.mapService = mapService;
    }

    @GetMapping("/narcan-sites")
    public List<Site> getNarcanSites(
            @RequestParam(defaultValue = "43.6532") double lat, 
            @RequestParam(defaultValue = "-79.3832") double lng) {
        return mapService.getNarcanSites(lat, lng);
    }

    @GetMapping("/safe-injection-sites")
    public List<Site> getSafeInjectionSites(
            @RequestParam(defaultValue = "43.6532") double lat, 
            @RequestParam(defaultValue = "-79.3832") double lng) {
        return mapService.getSafeInjectionSites(lat, lng);
    }

    @GetMapping("/therapy-sites")
    public List<Site> getTherapySites(
            @RequestParam(defaultValue = "43.6532") double lat, 
            @RequestParam(defaultValue = "-79.3832") double lng) {
        return mapService.getTherapySites(lat, lng);
    }

    @PostMapping("/build-route")
    public String buildRoute() {
        return mapService.buildRoute();
    }
}
