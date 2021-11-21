#!/usr/bin/python3
def no_c(my_string):
    new_string = ""
    if not my_string:
        pass
    else:
        while i < len(my_string):
            if my_string[i] != "c" or my_string[i] != "C":
                new_string.append(my_string[i])
            i++
    return new_string
