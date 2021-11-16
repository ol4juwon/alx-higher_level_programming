#!/usr/bin/python3
def print_last_digit(number):
    number = number * -1
    last_number = number % 10
    print('{}'.format(last_number))
    return last_number
