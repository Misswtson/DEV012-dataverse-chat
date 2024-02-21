import {
    filterByStudio,
    filterByYear,
  } from "../src/lib/dataFunctions";


  // CREATE MOCKDATA TEST BY FILTER STUDIO & YEAR
  
  describe("Data Filters", () => {
  
    it('should filter data by studio "Studio Ghibli"', () => {
      const mockData = [
        {
          facts: {
            studio: "TMS Entertainment",
          },
        },
        {
          facts: {
            studio: "Studio Ghibli",
          },
        },
        {
          facts: {
            studio: "Madhouse",
          },
        },
      ];
  
      const expectedFilteredData = [
        {
          facts: {
            studio: "Studio Ghibli",
          },
        },
      ];
  
      const filteredData = filterByStudio(
        mockData,
        "studio",
        "Studio Ghibli"
      );
      expect(filteredData).toEqual(expectedFilteredData);
    }),
  
    it('should filter data by year "1988"', () => {
      const mockData = [
        {
          facts: {
            year: 1989,
          },
        },
        {
          facts: {
            year: 2000,
          },
        },
        {
          facts: {
            year: 2001,
          },
        },
      ];
  
      const expectedFilteredData = [
        {
          facts: {
            year: 1889,
          },
        },
      ];
  
      const filteredData = filterByYear(mockData, "year", 1889);
      expect(filteredData).toStrictEqual(expectedFilteredData);
    });
  });