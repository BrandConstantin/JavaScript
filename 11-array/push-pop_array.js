var bucketList = ["one", "two", "three"];

console.log(bucketList);

var listItem = bucketList[0];

console.log(listItem);

listItem = bucketList[2];
console.log(listItem);
listItem = bucketList[3];
console.log(listItem);

console.log(bucketList.length);
console.log("..................");

bucketList.push("four", "five", "six");
console.log(bucketList);
console.log("....................");
bucketList.pop();
console.log(bucketList);