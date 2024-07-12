package com.ins.clinique.controllers;

import com.ins.clinique.controllers.apis.PatientApi;
import com.ins.clinique.entities.dtos.PatientDto;
import com.ins.clinique.services.PatientService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@CrossOrigin("*")

@RestController
@Slf4j
public class PatientController implements PatientApi {
    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @Override
    public List<PatientDto> getAllPatients() {
        return patientService.getAllPatients();
    }

    @Override
    public PatientDto getPatientByID(int id) {
        return patientService.getPatientByID(id);
    }


    @Override
    public PatientDto updatePatient(int id, PatientDto dto) {
        return patientService.updatePatient(id, dto);
    }

    @Override
    public PatientDto savePatient(PatientDto dto) {
        return patientService.savePatient(dto);
    }
}
