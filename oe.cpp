#include <iostream>

using namespace std;

int main() {
    int a;
    cout<<"Enter the Number(a) : "<< " " <<endl;
    cin >> a;
     // finding odd and even :  
    if (a){
         cout << a / 2  ;
        cout<< "This number is odd " << endl;
    }
    else if( a ){
              cout<< a % 2 ;
        cout<< "This number is even " << endl;
      
    }

    return 0;
}