#include <iostream>

using namespace std;
           /*1.*/ 
     // some normal calculation

/*float sum(float a,float b,float c){
    float s = ((a*b)/c)+2;
    return s;
}*/

           /*2.*/   
     // min of 2 nums
/*float num(float a , float b ){ // parameters
    if (a < b){
        return a;
    } else {
        return b;
    }

}*/ 
           /*3.*/
    //sum of n number
int sumN(int n ){
   int sum = 0;

   for (int i = 0; i <=n; i++)
   {
     sum += i;

   }
     return sum;
}

int main() {
             /*1.*/ 
    // cout<< sum (4,15,7)<< endl;
            
             /*2.*/   
      //cout<< "num = " << num(4.5 ,1.4) <<endl; //arguments
            
             /*3.*/
    cout<< sumN(3) << endl;

    return 0;
}