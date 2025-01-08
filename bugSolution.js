```javascript
// Ensure the field is a number before using $inc
db.collection.updateMany({}, [ { $set: { "stringField": parseInt( "$stringField" ) } }, { $inc: { "stringField": 1 } } ]);
//Or Add schema validation during data entry to prevent such issues
//In case you want to convert string to a number before incrementing it you can use the following
// db.collection.updateMany({"stringField":{$exists:true}},[{$set:{ "stringField": { $toInt: "$stringField" } } },{$inc:{"stringField":1}}])
```