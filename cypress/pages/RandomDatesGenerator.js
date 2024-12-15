class RandomDatesGenerator {
    generateRandomDate() {

        const currentdate = new Date();
    const startRange = new Date(currentdate.setMonth(currentdate.getMonth() - 3)); // 3 months ago
    const randomTime =
      startRange.getTime() + Math.random() * (Date.now() - startRange.getTime()); // Random time within range
    const randomDate = new Date(randomTime);
    const formattedDate = randomDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    Cypress.env('last3months', formattedDate); // Store in Cypress env
    cy.log('Random Date within last 3 months:', formattedDate);
    return formattedDate;
    //   let currentdate = new Date();
    //   let last3months = new Date(currentdate.setMonth(currentdate.getMonth() - 3));
    //   let formattedDate = last3months.toISOString().split('T')[0]; // Format to YYYY-MM-DD
    //   Cypress.env('last3months', formattedDate); // Store formatted date in Cypress env
    //   cy.log('Formatted Date:', formattedDate);
    //   return formattedDate;
    }
  }
  
  export default RandomDatesGenerator; // Export the class
  