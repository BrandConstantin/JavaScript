function getCount(objects) {
    //Solution 1
    //return objects.filter(function(o){return o.x==o.y}).length;
    
    //Solution 2
    //return objects.filter(item =>item.x===item.y).length;

    //Solution 3
    var ctr = 0;
    for(var i=0; i<objects.length; i++){
      if(objects[i].x == objects[i].y) {
        ctr++;
      }
    }
    return ctr;
}


function main() {
    const n = +(readLine());
    let objects = [];
    
    for (let i = 0; i < n; i++) {
        const [a, b] = readLine().split(' ');
        
        objects.push({x: +(a), y: +(b)});
    }
    
    console.log(getCount(objects));
}