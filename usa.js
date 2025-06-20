
document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    
    const calculateBtn = document.getElementById('calculateBtn');
    const calculatorResult = document.getElementById('calculatorResult');
    
    calculateBtn.addEventListener('click', function() {
        const carType = document.getElementById('car-type').value;
        const carPrice = parseFloat(document.getElementById('car-price').value) || 0;
        const deliveryType = document.getElementById('delivery-type').value;
        const destination = document.getElementById('destination').value;
        
        if (carPrice <= 0) {
            alert('Пожалуйста, укажите стоимость автомобиля');
            return;
        }
        
        
        let shippingCost = 0;
        let customsCost = 0;
        
        
        if (deliveryType === 'sea') {
            shippingCost = carType === 'truck' ? 2500 : 1800;
        } else {
            shippingCost = carType === 'truck' ? 6000 : 4500;
        }
        
        
        if (destination === 'ru') {
            customsCost = carPrice * 0.48; 
        } else if (destination === 'kz') {
            customsCost = carPrice * 0.30; 
        } else if (destination === 'by') {
            customsCost = carPrice * 0.25; 
        } else {
            customsCost = carPrice * 0.40; 
        }
        
        const totalCost = carPrice + shippingCost + customsCost;
        
        
        calculatorResult.innerHTML = `
            <h3>Примерная стоимость:</h3>
            <p>Стоимость авто: $${carPrice.toLocaleString()}</p>
            <p>Доставка: $${shippingCost.toLocaleString()}</p>
            <p>Таможенные платежи: $${customsCost.toLocaleString()}</p>
            <p><strong>Итого: $${totalCost.toLocaleString()}</strong></p>
            <p>Для точного расчета свяжитесь с нашим менеджером</p>
        `;
        calculatorResult.style.display = 'block';
    });
    
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
            this.reset();
        });
    }
    
    
    const consultBtn = document.getElementById('consultBtn');
    if (consultBtn) {
        consultBtn.addEventListener('click', function() {
            document.getElementById('contacts').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
    
    
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .process-step, .review');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    
    window.addEventListener('scroll', animateOnScroll);
    
    
    document.querySelectorAll('.service-card, .process-step, .review').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';});
 


    
    animateOnScroll();
});