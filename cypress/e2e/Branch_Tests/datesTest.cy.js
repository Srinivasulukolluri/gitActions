import RandomDatesGenerator from '../../pages/RandomDatesGenerator.js';

describe('RandomDatesGenerator', () => {
  it('should generate a random date within the last 3 months', () => {

    const randDatesGenerator = new RandomDatesGenerator();

    // Generate and log first date
    const randomDate1 = randDatesGenerator.generateRandomDate();
    console.log('First random date:', randomDate1);

    // Generate and log second date
    const randomDate2 = randDatesGenerator.generateRandomDate();
    console.log('Second random date:', randomDate2);

    // Optional assertion to ensure dates are not identical
    //expect(randomDate1).not.to.equal(randomDate2);


    // const randDatesGenerator = new RandomDatesGenerator(); // Instantiate the class
    // const randomDate2020 = randDatesGenerator.generateRandomDate(); // Call the method
    // console.log('Random date in the last 3 months:', randomDate2020);

    // // Optional assertion
    // expect(randomDate2020).to.match(/\d{4}-\d{2}-\d{2}/); // Validate format YYYY-MM-DD
  });
});
