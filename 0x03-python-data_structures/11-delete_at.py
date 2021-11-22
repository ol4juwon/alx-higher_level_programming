#!/usr/bin/python3
def delete_at(my_list=[], idx=0):
    if len(my_list) < idx < 0:
        return my_list
    else:
        index = idx + 1
        new_list = my_list[:idx] + my_list[index:]
        return new_list
