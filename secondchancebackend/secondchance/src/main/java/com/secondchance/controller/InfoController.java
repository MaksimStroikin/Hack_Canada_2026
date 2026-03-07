package com.secondchance.controller;

import com.secondchance.model.InfoSlide;
import com.secondchance.service.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/info")
public class InfoController {

    private final InfoService infoService;

    @Autowired
    public InfoController(InfoService infoService) {
        this.infoService = infoService;
    }

    @GetMapping("/overdose")
    public List<InfoSlide> getOverdoseInfo() {
        return infoService.getOverdoseInfo();
    }

    @GetMapping("/external-help")
    public List<InfoSlide> getExternalHelpInfo() {
        return infoService.getExternalHelpInfo();
    }
}
