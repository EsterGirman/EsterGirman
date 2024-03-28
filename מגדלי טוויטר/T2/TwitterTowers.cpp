#include "TwitterTowers.h"
#include <iostream>
using namespace std;
void TwitterTowers()
{
	int x, height, width;
    cout << "Please enter which type of tower do you want(1 or 2) and 3 to eskape:" << "\n";
    cin >> x;//Receiving the tower type from the user
    if (x == 1 || x == 2) {
        do {//Using the program as long as you haven't logged out
            do {//Height reception until proper input is received
                cout << "Please enter the height of the tower (greater than 2): " << "\n";
                cin >> height;
                if (height <= 2) {
                    std::cout << "Height must be greater than 2. Please try again." << "\n";
                }
            } while (height <= 2);
			cout << "Please enter the width of the tower" << "\n";
			cin >> width;
            if (x == 1) {//rectangle
                if (abs(height - width) > 5 || height == width) {//Calculation of area 
                    cout << "The area of the rectangle is" << height * width << "\n";
                }
                else {//Calculation of perimeter
                    cout << "The perimeter of the rectangle is " << height * 2 + width * 2 << "\n";
                }
            }
            else {//triangle
                    int y;
                    cout << "Enter 1 to calculate the perimeter and 2 to print the triangle:" << "\n";
                    cin >> y;
                    if (y == 1) {//calculate the perimeter
                        float halfOfTheBase = width / 2;
                        float hypotenuse = sqrt(halfOfTheBase * halfOfTheBase + height * height);
                        float perimeter = hypotenuse * 2 + width;
                        cout << "The perimetr is" << perimeter << "\n";
                    }
                    else if(y==2){//print the triangle
                        if (width % 2 == 0 || width > height * 2) {
                            cout << "The triangle cannot be printed" << "\n";
                            TwitterTowers();
                        }
                        else {
                            PrintTriangle(width, height);
                        }
                    }
                    else {
                        cout << "Your choice is not valid";
                        TwitterTowers();
                    }
            }
			cout << "Please enter which type of tower do you want(1 or 2) and 3 to eskape:" << "\n";
			cin >> x;
        } while (x != 3);
    }
    else {
        cout << "The program finished" << std::endl;
    }
}


void PrintTriangle(int w,int h){
    //Treatment of extreme cases
    if (w == 1) {
        for (int i = 0; i < h; i++) {
            cout << "*" << "\n";
        }
        return;
    }
    if (h == 2) {
        for (int i = 0; i < w / 2; i++)
            cout << " ";
        cout << "*" << "\n";
        for (int i = 0; i < w; i++)
            cout << "*";
        return;
    }
    //Calculation of the number of rows of each width
    int times = (h - 2) / ((w - 2) / 2);
    bool flag = false;
    //Calculation of the remainder
    int tmp = h-(times* ((w - 2) / 2)+2-times);
    if ((times * ((w - 2) / 2) + 2)<h) {
        flag = true;
    }
    for (int i = 0; i < w / 2; i++) {
        cout << " ";
    }
    //Print the top vertex
    cout << "*"<<"\n";
    for (int i = 3; i <= w - 2; i += 2) {
        //Printing the remainder at the top of the triangle
        if (flag == true && i == 3) {
            for (int j = 0; j < tmp; j++) {
                for (int k = 0; k < (w - i) / 2; k++) {
                    std::cout << " ";
                }
                for (int k = 0; k < i; k++) {
                    std::cout << "*";
                }
                cout << "\n";
            }
        }
        //Triangle body print
        else {
            for (int j = 0; j < times; j++) {
                for (int k = 0; k < (w - i) / 2; k++) {
                    std::cout << "-";
                }

                for (int k = 0; k < i; k++) {
                    std::cout << "*";
                }
                cout << "\n";
            }
        }       
    }
    //Printing the base of the triangle
    for (int i = 0; i < w; i++) {
        cout << "*";
    }
}

int main() {
	TwitterTowers();
    //PrintTriangle(7, 12);
}

 



