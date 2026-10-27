// Lecture 33

// Easy 1:- Differentiate between a standard Queue and a Deque (Double Ended Queue).

// #include <iostream>
// // #include <queue>
// #include <deque>

// using namespace std;

// int main() {
//     // QUEUE
//     // queue<int> q;
//     // q.push(1);
//     // q.push(2);
//     // q.push(3);
//     // cout <<"Queue are: ";
//     // while(!q.empty()){
//     //    cout << q.front() << " ";
//     //    q.pop();
//     // }

//     deque<int> d;

//     //Pushed at Back 

//     d.push_back(1);
//     d.push_back(2);
    
//     //Push at Front 

//     d.push_front(3);
//     d.push_front(4);

//     cout <<"Here is the Result : ";

//     while(!d.empty()) {

//         cout << d.front() << " ";

//         d.pop_front();
//     }
    
    
//     return 0;
// }

// Easy 3: Construct a logical standard Queue using two standard Stacks as the internal engine.

#include <iostream>
#include <stack>

using namespace std;

stack<int> s1;
stack<int> s2;

class stackPush {

    public:

    void Push(int num) {

        while (!s1.empty()) {
            s2.push(s1.top());
            s1.pop();
        }

        s1.push(num);

        while (!s2.empty()) {
            s1.push(s2.top());
            s2.pop();
        }
    }

    void Pop() {
        if (s1.empty()) {
            cout << "Queue is empty" << endl;
            return;
        }
        cout << "Removed: " << s1.top() << endl;
        s1.pop();
    }

    int Front() {
        if (s1.empty()) {
            cout << "Queue is empty" << endl;
            return -1;
        }
        return s1.top();
    }

    bool Empty() {
        return s1.empty();
    }

    void Display() {
        if (s1.empty()) {
            cout << "Queue is empty" << endl;
            return;
        }

        stack<int> temp = s1;
        cout << "Queue: ";
        while (!temp.empty()) {
            cout << temp.top() << " ";
            temp.pop();
        }
        cout << endl;
    }
};

int main() {
    stackPush st;

    st.Push(10);
    st.Push(20);
    st.Push(30);
    st.Push(40);

    st.Display();

    st.Pop();
    st.Pop();

    st.Display();

    cout << "Front: " << st.Front() << endl;

    return 0;
}