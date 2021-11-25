#!/usr/bin/python3
def common_elements(set_1, set_2):
    diff = set_1.difference(set_2)
    print(diff)


common_elements({1,2,3,4}, {2,4,5,6,7})
