#include <iostream>
#include <vector>

using namespace std;

int main() {
    int n;

    cout<<"Enter the value: "<< endl;
    cin>> n;

    vector<int> arr(n);

    
    //Taking input

    cout<< "Enter "<< n << "elements: "<< endl;

    for(int i = 0; i < n; i++){
        cin >> arr[n];

    }

    cout<< "Elements are: "<< endl;

    for(int i = 0; i < n ; i++){
        cout<<arr[i]<< " " ;
    }
    cout<< endl;


    return 0;
}