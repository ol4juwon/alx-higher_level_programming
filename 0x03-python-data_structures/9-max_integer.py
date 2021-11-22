#!/usr/bin/python3
def max_integer(my_list=[]):
    lent = len(my_list)
    if lent < 1:
        return "None"
    else:
        max_length  = my_list[0]
        i = 1;
        while i < lent:
            if my_list[i] > max_length:
                max_length = my_list[i]
            i += 1
        retunr max_length


max_integer([1,23,43,-23,234,34])
