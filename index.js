function superbowlWin(recordArray) {
  const foundRecord = recordArray.find(function(eachRecord) {
    return eachRecord.result === 'W'
  })  
  if (foundRecord === undefined) {
    return foundRecord;
  }
  
    return foundRecord.year;
}





