

export const searchByName = (data, searchBy, input) => {
  if (searchBy === "input") {
    const filteredDataByName = data.filter((item) => {
      return item.name.toLowerCase().includes(input.toLowerCase());
    });
    return filteredDataByName;
  }
};


export const filterByGenre = (data, filterBy, value) => {
  return data.filter((item) => item.facts[filterBy].includes(value));
};

export const filterByStudio = (data, filterBy, value) => {
  return data.filter((item) => item.facts[filterBy].includes(value));
};


export const filterByYear = (data, filterBy, value) => {
  if (data && !isNaN(value)) {
    return data.filter((item) => item.facts[filterBy] === Number(value));
  }
};


export const sortData = (data, sortBy, sortOrder) => {
  const copyData = [...data];
  copyData.sort((a, b) => {
    const valueA = a[sortBy];
    const valueB = b[sortBy];

    if (valueA === valueB) {
      return 0;
    }

    if (sortOrder === "asc") {
      if (valueA < valueB) {
        return -1;
      }
      return 1;
    }

    if (sortOrder === "desc") {
      if (valueB < valueA) {
        return -1;
      }
      return 1;
    }
  });

  return copyData;
};


export const computeStats = (data) => {
  const numberOfElements = data.reduce((accumulator) => accumulator + 1, 0);
  return numberOfElements;
};

