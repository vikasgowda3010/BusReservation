import React, { useState } from 'react';
import axios from 'axios';
import CitiesDropdown from './CitiesDropdown';
import DateSelector from './DateSelector';
import BusList from './BusList';
import SeatSelection from './SeatSelection';
import PaymentSummary from './PaymentSummary'; 
import ProgressBar from './ProgressBar';
import '../styles/BookingForm.css';
import PaymentForm from './PaymentForm';
import TicketDetails from './TicketDetails'; 

function BookingForm() {
  const [fromCity, setFromCity] = useState('');
  const [toCity, setToCity] = useState('');
  const [date, setDate] = useState('');
  const [selectedBus, setSelectedBus] = useState(null);
  const [seats, setSeats] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');
  const [ticketData, setTicketData] = useState(null);

  const handleSeatSelection = (selectedSeats) => {
    setSeats(selectedSeats);
    if (selectedSeats.length > 0) {
      handleLoading(() => setCurrentStep(4)); 
    }
  };

  const handleNext = async () => {
    setValidationMessage(''); 

    if (currentStep === 1) {
      if (!fromCity || !toCity || !date) {
        setValidationMessage('Please fill out all fields.');
        return;
      }
      handleLoading(() => setCurrentStep(currentStep + 1));
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 2) {
      if (!selectedBus) {
        setValidationMessage('Please select a bus.');
        return;
      }
      handleLoading(() => setCurrentStep(currentStep + 1));
      setCurrentStep(currentStep + 1);
    } else if (currentStep === 3) {
      if (selectedBus && seats.length > 0) {
        
        setCurrentStep(currentStep + 1);
      } else {
        setValidationMessage('Please select seats.');
      }
      handleLoading(() => setCurrentStep(currentStep + 1));
    } else if (currentStep === 4) {
      handleLoading(() => setCurrentStep(currentStep + 1));
      
      try {
        const paymentData = {
          fromCity,
          toCity,
          date,
          busName: selectedBus.name,
          seats: seats.join(', '),
          totalAmount: selectedBus.price * seats.length,
        };

        console.log('Posting payment data:', paymentData);

        const response = await axios.post('http://localhost:8080/api/payments', paymentData);

        console.log('Server response:', response);

        if (response.status === 200) {
          
          console.log('Payment successful, navigating to payment form...');
          
        } else {
          setValidationMessage('Failed to save payment. Please try again.');
        }
      } catch (error) {
        console.error('Error posting payment data:', error);

        if (error.response) {
          console.error('Server responded with:', error.response.data);
          setValidationMessage(`Server error: ${error.response.data.message || 'An error occurred while processing your payment.'}`);
        } else if (error.request) {
          console.error('No response received:', error.request);
          setValidationMessage('No response from the server. Please try again.');
        } else {
          setValidationMessage('An error occurred while processing your payment.');
        }
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  
  const handleLoading = (callback) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      callback();
    }, 1000);
  };

  
 const handlePaymentComplete = (ticketDetails) => {
  setTicketData(ticketDetails); 
  setCurrentStep(6); 
 };

 return (
  <div className={`booking-form-container step-${currentStep}`}>
    {loading && <div className="loading-icon"><i className="fas fa-bus fa-spin"></i></div>}

    {!loading && (
      <>
        <ProgressBar step={currentStep} />

        {validationMessage && <div className="validation-message">{validationMessage}</div>}

        {currentStep === 1 && (
          <div>
            <CitiesDropdown label="From" onSelect={setFromCity} selectedCity={fromCity} />
            <CitiesDropdown label="To" onSelect={setToCity} selectedCity={toCity} excludeCity={fromCity} />
            <DateSelector onSelectDate={setDate} selectedDate={date} />
            <i className="fas fa-bus next-icon" onClick={handleNext}></i>
          </div>
        )}

        {currentStep === 2 && fromCity && toCity && date && (
          <div>
            <BusList fromCity={fromCity} toCity={toCity} date={date} onSelectBus={setSelectedBus} selectedBus={selectedBus} />
            <i className="fas fa-arrow-left prev-icon" onClick={handlePrevious}></i>
            <i className="fas fa-bus next-icon" onClick={handleNext}></i>
          </div>
        )}

        {currentStep === 3 && selectedBus && (
          <div>
            <SeatSelection bus={selectedBus} onSeatSelect={handleSeatSelection} />
            <i className="fas fa-arrow-left prev-icon" onClick={handlePrevious}></i>
          </div>
        )}

        {currentStep === 4 && selectedBus && seats.length > 0 && (
          <PaymentSummary
            fromCity={fromCity}
            toCity={toCity}
            date={date}
            selectedBus={selectedBus}
            seats={seats}
            totalAmount={selectedBus.price * seats.length}
            onPrevious={handlePrevious}
            onNext={handleNext} 
          />
        )}

        {currentStep === 5 && (
          <PaymentForm
            totalAmount={selectedBus.price * seats.length}
            onPrevious={handlePrevious}
            onComplete={handlePaymentComplete} 
          />
        )}

        {currentStep === 6 && ticketData && (
          <TicketDetails  
          

         
            fromCity={fromCity}
            toCity={toCity}
            date={date}
            selectedBus={selectedBus}
            seats={seats}
            totalAmount={selectedBus.price * seats.length}
            onPrevious={handlePrevious}
            onNext={handleNext} 
          />


        )}
      </>
    )}
  </div>
);
}

export default BookingForm;
