const { faker } = require('@faker-js/faker');
const fs = require("fs");

const generateImages = (number) => {
  const images = [];
  while (number !== 0) {
    const value = faker.image.image();
    images.push(value);
    number--;
  }
  return images;
};

// Code to generate User Mock data
const generatePersonsData = (number) => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      id: number,
      name: faker.name.firstName(),
      description: faker.commerce.productDescription(),
      picture: faker.image.avatar(),
      country: faker.address.country(),
      joining_date: faker.date.future(),
    });
    number--;
  }
  return persons;
};

const generateJewelryData = (number) => {
  const items = [];
  while (number >= 0) {
    items.push({
      id: number,
      name: faker.commerce.productName(),
      imageUrls: [faker.image.fashion()],
      description: faker.commerce.productDescription(),
      flavors: [
        { name: 'prune', color: '#5A188E' },
        { name: 'squash', color: '#F88532' },
        { name: 'cherry', color: '#E91E63' },
      ],
      sizes: ["pequeño", "medio", "grande"],
    });
    number--;
  }
  return items;
};
/*
module.exports = generateJewelryData
*/
fs.writeFileSync(
  "./db.json",
  JSON.stringify({ products: generateJewelryData(20) })
);
