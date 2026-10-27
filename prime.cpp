// #include <iostream>

// using namespace std;

// int isPrime(int n){

//     if(n == 2){
//         return true;
//     }

//     if( n % 2 == 0 ){
//         return false;
//     }

//     for (int i = 2; i < n; i++)
//     {
//      if  (n%i == 0)
//      return false;

// }
//      return true;
// }
// int main() {
//     int n;
//     cout<<"Enter number: ";
//     cin>> n;

//     int result = isPrime(n);

//     if(result == 1)
//      cout<<" Prime "<< endl;

//      else
//      cout<<"Not Prime"<<endl;
//     return 0;
// }

// ALL Prime PRINT

#include <iostream>

using namespace std;

// print all prime number

int printPrime(int n)
{

    for (int i = 1; i <= n; i++)
    {
        if (n % i == 0)
        {
            return false;
        }

        return true;
    }

    void printPrime(int n)
    {
        for (int i = 2; i <= n; i++)
        {
            if (isPrime(i))
                cout << i << endl;
        }
    }

    int main()
    {
        int n;
        cout << "Enter the Num : " << endl;
        cin >> n;

        cout << "Prime numbers up to " << n << ": " << endl;
        printPrime(n);
        return 0;
    }