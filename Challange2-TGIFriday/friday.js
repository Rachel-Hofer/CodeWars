function lastDayIsFriday(initialYear, endYear) {
    var totalFridays = 0;
  
    if (endYear === undefined) {
      endYear = initialYear;
    }
  
    for (var year = initialYear; year <= endYear; year++) {
      for (var month = 1; month <= 12; month++) {
        var d = new Date(year, month, 0);
        if (d.getDay() === 5) {
          totalFridays++;
        }
      }
    }
    
    return totalFridays;
  }
  
  lastDayIsFriday(1901, 2000);