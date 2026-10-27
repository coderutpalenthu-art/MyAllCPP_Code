#include <iostream>

using namespace std;

int main() {
    float number;
    cout<<"Enter the number "<< endl;
    cin>> number;
 
    if(number>0){
        cout<<"This number is Positive "<< endl;
    }
    else if(number<0){
        cout<<"This number is Negative "<< endl;
    }
    else if(number == 0){
        cout<<"This number is Zero "<< endl;
    }
    if (!(cin>> number)){
         cout<<"This is invalid entry, pls enter correct value";
    }
    return 0;
}