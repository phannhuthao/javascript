document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll('.TongThanh > div');
    const nextBtn = document.createElement('button'); 
    const prevBtn = document.createElement('button'); 
    let currentStep = 0; // Initialize current step index

    // Function to toggle active step and button states
    function toggleStep(stepIndex) {
        steps.forEach((step, index) => {
            if (index === stepIndex) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        // Enable/disable Next and Previous buttons based on current step
        if (currentStep === 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }
        if (currentStep === steps.length - 1) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    // Function to handle click on Next button
    function nextStep() {
        if (currentStep < steps.length - 1) {
            currentStep++;
            toggleStep(currentStep);
        }
    }

    // Function to handle click on Previous button
    function prevStep() {
        if (currentStep > 0) {
            currentStep--;
            toggleStep(currentStep);
        }
    }

    // Initialize the buttons
    nextBtn.textContent = 'Next';
    prevBtn.textContent = 'Previous';
    nextBtn.addEventListener('click', nextStep);
    prevBtn.addEventListener('click', prevStep);

    // Append buttons to DOM
    document.body.appendChild(prevBtn);
    document.body.appendChild(nextBtn);

    // Initially toggle the active step
    toggleStep(currentStep);
});
