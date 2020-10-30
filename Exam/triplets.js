var n=5;
var count=0;
var a,b,c;
var sum=0;
for (a=1;a<=n;a++) 
{
    for (b=a;b<=n;b++) 
    { 
        sum=a*a+b*b; 
        c = Math.sqrt(sum);
        if (c*c==sum & b<=c & c<=n)
        { 
            count++;
            console.log(a+","+b+","+c);  
    }
} 
}