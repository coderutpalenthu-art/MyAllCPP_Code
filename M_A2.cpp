#include <iostream>

using namespace std;


int main() {
    int arr[] = {1,2,3,4,5};
    int size = 5;
    int sum = 0;


    //the sum of array
     

    for (int i = 0; i < 5; i++)
    {
       sum += arr[i];
    }
    cout<<"The total sum is : "<<  sum <<endl;
   
    return 0;
}
