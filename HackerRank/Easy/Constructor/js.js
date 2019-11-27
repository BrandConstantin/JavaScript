function Rectangle(a, b) {
    if(a >= 1 && a <= 100 && b >= 1 && b <= 100){
        constructor(a, b);

        this.width = b;
        this.length = a;
        this.perimeter = 2 * (a + b);
        this.area = a * b;
    }
}


function main() {
    const a = +(readLine());
    const b = +(readLine());
    
    const rec = new Rectangle(a, b);
    
    console.log(rec.length);
    console.log(rec.width);
    console.log(rec.perimeter);
    console.log(rec.area);
}