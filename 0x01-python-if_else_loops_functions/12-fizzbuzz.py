#!/usr/bin/python3
def fizzbuzz():
    for i in range(1, 101):
        numer = i % 3
        buzz = i % 5
        if numer == 0:
            print('fizz', end=' ')
        elif buzz == 0:
            print('buzz', end=' ')
        else:
            print('{}'.format(i), end=' ')
