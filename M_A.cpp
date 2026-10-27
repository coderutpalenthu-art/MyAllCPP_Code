#include <iostream>
#include <climits>
#include <algorithm>

using namespace std;

int main() {
    int nums[] = {34,53,1,-3,-24 };
    int size = 5;

    int smallest = INT_MAX;
    int largest = INT_MIN;
    for(int i=0; i<size ; i++){
       smallest = min(nums[i], smallest);
       largest = max(nums[i], largest);
    }
    cout<<"smallest = "<< smallest << endl;
    cout<<" largest = "<< largest << endl; 

    return 0;
}