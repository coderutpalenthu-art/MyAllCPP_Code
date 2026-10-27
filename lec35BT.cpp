// Easy-1 Create a TreeNode class containing data, "leftPtr" pointerPtrrightPtr
// , and "right" pointer.

// #include <iostream>

// using namespace std;

// class treeNode {
//     public:

//         int data;
//         treeNode* leftPtr;
//         treeNode* rightPtr;

//         treeNode(int val) {
//             data = val;
//             leftPtr = NULL;
//             rightPtr = NULL;
//         }

// };

// int main() {
//     treeNode* root = new treeNode(10);
//     root->leftPtr = new treeNode(20);
//     root->rightPtr = new treeNode(30);

//     cout << "Root: " << root -> data << endl;
//     cout << "Left Child: " << root -> leftPtr -> data << endl;
//     cout << "Right Child: " << root -> rightPtr -> data << endl;

//     delete root -> leftPtr;
//     delete root -> rightPtr;
//     delete root;

//     return 0;
// }

// Easy 2: Write a recursive Pre-Order traversal algorithm (Root, Left, Right).

// #include <iostream>
// #include <vector>

// using namespace std;

// class Node {
//    public:
//     Node* root;
//     Node* leftSubTree;
//     Node* rightSubTree;

//     Node() {
//         void buildTree(Node* root) {
//             if (root == NULL) {
//                 return;
//             }
//         }

//         cout << "root -> data" << " ";

//         buildTree(root->leftSubTree);
//         buildTree(root->rightSubTree);
//     }
// };

// int main() {
//     vector<int> preOrder = {1, 2, -1, -1, 3, -1, -1};
//     Node* root = (preOrder) ;

//     return 0;
// }

// // Easy 3: Write a function to return the combined numeric sum of all nodes
// in a tree

// #include <iostream>

// using namespace std;

// int main() {

//     return 0;
// }

// Medium 1: Find the "Diameter" (longest path between any two leaf nodes) of a
// Binary Tree.

// #include <algorithm>
// #include <iostream>

// using namespace std;

// class diameterTree {
//    public:
//     diameterTree* root;
//     diameterTree* leftTree;
//     diameterTree* rightTree;

//     diameterTree(int val) {
//         root = NULL;
//         leftTree = NULL;
//         rightTree = NULL;
//     }

//     int height(diameterTree* root) {
//         if (root == NULL) {
//             return 0;
//         }

//         int leftHt = height(root->leftTree);
//         int rightHt = height(root->rightTree);

//         return max(leftHt, rightHt) + 1;
//     }

//     int longPath(diameterTree* root) {
//         if (root == NULL) {
//             return 0;
//         }
//         int leftHt = height(root->leftTree);
//         int rightHt = height(root->rightTree);

//         int leftPt = longPath(root->leftTree);
//         int rightPt = longPath(root->rightTree);

//         int totalDis = leftHt + rightHt;

//         return max(totalDis, max(leftPt, rightPt));
//     }
// };

// int main() {
//     diameterTree* root = new diameterTree(1);

//     root->leftTree = new diameterTree(2);
//     root->rightTree = new diameterTree(3);

//     root->leftTree->leftTree = new diameterTree(4);
//     root->leftTree->rightTree = new diameterTree(5);

//     cout << "Diameter: " << root->longPath(root) << " edges" << endl;

//     return 0;
// }

// Medium 2: Check if two independent Binary Trees are structurally and
// numerically identical.

#include <iostream>

using namespace std;

class Node {
   public:
    Node* root;
    Node* leftPt;
    Node* rightPt;

    Node(int val) {
        root = NULL;
        leftPt = NULL;
        rightPt = NULL;
    }
};

int main() { return 0; }
