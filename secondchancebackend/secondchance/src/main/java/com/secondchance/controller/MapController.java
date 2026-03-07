package com.secondchance.controller;

import com.secondchance.model.Site;
import com.secondchance.service.MapService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/map")
public class MapController {

    private final MapService mapService;

    @Autowired
    public MapController(MapService mapService) {
        this.mapService = mapService;
    }

    @GetMapping("/narcan-sites")
    public List<Site> getNarcanSites() {
        return mapService.getNarcanSites();
    }

    @GetMapping("/safe-injection-sites")
    public List<Site> getSafeInjectionSites() {
        return mapService.getSafeInjectionSites();
    }

    @GetMapping("/therapy-sites")
    public List<Site> getTherapySites() {
        return mapService.getTherapySites();
    }

    @PostMapping("/build-route")
    public String buildRoute() {
        return mapService.buildRoute();
    }
}
