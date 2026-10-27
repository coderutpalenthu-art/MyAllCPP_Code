#include <iostream>

using namespace std;

int main() {
    int n = 4;
    int num;
    for (int i = n; i >= 1; i--)
    {
       num = 1;
       for (int j = 1; j <= n; j++)
       {
         cout<< num <<" " ;
         num++ ;
       }
       
       
    }
     cout<<endl;

    
    return 0;
}