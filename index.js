function findMatching(drivers, match) {
    return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase());
  }
  function fuzzyMatch (drivers,query) { 
    return drivers.filter(driver => driver.startsWith(query));    
  }
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name === query);
  }
  