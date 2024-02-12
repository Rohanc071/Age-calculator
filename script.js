function calculateAge() {
    
    const birthdate = document.getElementById('birthdate').value;

    if (!birthdate) {
        alert('Please select your birthdate.');
        return; 
    }

    const today = new Date();

    const birthDate = new Date(birthdate);

    if (birthDate >= today) {
        alert('Please select a valid birthdate.');
        return; 
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (
      birthDate.getMonth() > today.getMonth() ||
      (birthDate.getMonth() === today.getMonth() && birthDate.getDate() > today.getDate())
    ) 
    {
      ageYears--;
      ageMonths = 12 - (birthDate.getMonth() - today.getMonth());
      ageDays = today.getDate() + (new Date(today.getFullYear(), today.getMonth(),       
      0).getDate() - birthDate.getDate());
    }

    let resultMessage;

    if (ageYears > 0) {
        
        resultMessage = `Your age is ${ageYears} years, ${ageMonths} months, and ${ageDays}     
        days.`;
    } else if (ageMonths > 0) {
      
        resultMessage = `Your age is ${ageMonths} months and ${ageDays} days.`;
    } else {
     
        resultMessage = `Your age is ${ageDays} days.`;
    }

    document.getElementById('result').textContent = resultMessage;
}