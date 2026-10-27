#include <iostream>

using namespace std;
//Factorial using a function: write factorial (int(n))
int factorial(int n ){
    if(n<0)
    return -1;
    int result=1;
    for(int i=2;i<=n;i++){
        result *=i;
    }
    return result;
}

int main() {
    int n=3;
cout<<"factorial of "<< n << " is: " <<factorial(n)<< endl;
    return 0;
}


