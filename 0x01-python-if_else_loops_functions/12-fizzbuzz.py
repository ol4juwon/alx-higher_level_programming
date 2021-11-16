#!/usr/bin/python3
def fizzbuzz():
    for i in range(1, 101):
        numer = i % 3
        if(numer == 0):
            print('fizz', end=' ')
        elif(numer == 100):
            print('{}'.format(i), end='')
        else:
            print('{}'.format(i), end=' ')
