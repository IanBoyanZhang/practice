#include <cstdlib>
#include <cmath>
#include <ctime>
#include <iostream>
#include <random>

class PointGenerator {
public:
    PointGenerator() {
        srand(time(NULL));
    }
    double uniformRandom();
    double normalRandom();
};

double PointGenerator::uniformRandom() {
    return (double)(rand())/(double)(RAND_MAX);
}

// Naive random number generator
double PointGenerator::normalRandom() {
    double u1 = this->uniformRandom();
    double u2 = this->uniformRandom();
    return cos(8.*atan(1.)*u2)*sqrt(-2.*log(u1));
}

