#!/usr/bin/python3
def delete_at(my_list=[], idx=0):
    if len(my_list) < idx < 0:
        return my_list
    else:
        new_list = my_list[:idx] + my_list[idx+1:]
        return new_list
