package com.dsa.rec;

public class SumOfDigits {

    public static void main(String args[]) {
        int res = sod(0);
        System.out.println(res);
    }

    public static int sod(int num) {

        // handle edgecase
        if(num < 0) num = -1 * num;

        //base condition --smallest valid input
        if(num == 0) return 0;

        //logic
        return (num % 10) + sod(num/10);

    }



    /*
     1234 = 1+2+3+4 = 10

     1234 % 10 = 4 + 3 +

     1234/10 = 123

     123 % 10 = 3

     ans = n%10 + recur(n/10)

     */

}
