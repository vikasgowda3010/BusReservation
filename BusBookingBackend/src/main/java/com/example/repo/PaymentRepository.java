package com.example.repo;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Repository;

import com.example.dto.PaymentDetails;

import java.util.List;
import java.util.Optional;

@Repository
public class PaymentRepository {

    @PersistenceContext
    private EntityManager entityManager;

    @Transactional
    public PaymentDetails save(PaymentDetails paymentDetails) {
        if (paymentDetails.getId() == null) {
            entityManager.persist(paymentDetails);
            return paymentDetails;
        } else {
            return entityManager.merge(paymentDetails);
        }
    }

    public List<PaymentDetails> findAll() {
        return entityManager.createQuery("SELECT p FROM PaymentDetails p", PaymentDetails.class).getResultList();
    }

    public Optional<PaymentDetails> findById(Long id) {
        PaymentDetails payment = entityManager.find(PaymentDetails.class, id);
        return Optional.ofNullable(payment);
    }

    @Transactional
    public void deleteById(Long id) {
        PaymentDetails payment = entityManager.find(PaymentDetails.class, id);
        if (payment != null) {
            entityManager.remove(payment);
        }
    }

    public boolean existsById(Long id) {
        return entityManager.find(PaymentDetails.class, id) != null;
    }
}
