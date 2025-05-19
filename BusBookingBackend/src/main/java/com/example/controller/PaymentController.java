package com.example.controller;

import com.example.dto.PaymentDetails;
import com.example.repo.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/api/payments")
public class PaymentController {

    @Autowired
    private PaymentRepository paymentRepository;

    @PostMapping
    public ResponseEntity<PaymentDetails> createPayment(@RequestBody PaymentDetails paymentDetails) {
        PaymentDetails savedPayment = paymentRepository.save(paymentDetails);
        return ResponseEntity.ok(savedPayment);
    }

    @GetMapping("/show")
    public ResponseEntity<List<PaymentDetails>> getAllPayments() {
        List<PaymentDetails> payments = paymentRepository.findAll();
        return ResponseEntity.ok(payments);
    }

    @GetMapping("/ticket")
    public ResponseEntity<PaymentDetails> getPaymentById(@PathVariable Long id) {
        Optional<PaymentDetails> payment = paymentRepository.findById(id);
        return payment.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<PaymentDetails> updatePayment(@PathVariable Long id, @RequestBody PaymentDetails paymentDetails) {
        if (!paymentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        paymentDetails.setId(id);
        PaymentDetails updatedPayment = paymentRepository.save(paymentDetails);
        return ResponseEntity.ok(updatedPayment);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePayment(@PathVariable Long id) {
        if (!paymentRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        paymentRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
