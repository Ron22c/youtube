package com.dsa.rec;

public class Recur {

    public static void main(String ... a) {
        System.out.println("Please subscribe");

        int res = factorial(-2);

        System.out.println(res);
    }

    public static int factorial(int num) {
        // EDGE CASE HANDLE
        if(num < 0) return -1;

        //Base Condition
        if(num == 0) return 1; // smallest valid input

        //Recur Logic
        return num * factorial(num-1);
    }

    /*
    3! = 3*2*1 = 6

    n! = n-1 * n-2 * ....
    n! = n * (n-1)!

     */

}
