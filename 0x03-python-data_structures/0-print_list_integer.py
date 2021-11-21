#!/usr/bin/python3
def print_list_integer(my_list=[]):
    size = len(my_list)
    for i = 0, i < size, i++:
        print('{:d}'.format(my_list[i]), end='\n')
