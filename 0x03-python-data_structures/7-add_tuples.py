#!/usr/bin/python3
def add_tuple(tuple_a=(), tuple_b=()):
    length_a = len(tuple_a)
    lent_b = len(tuple_b)

    if length_a < 1:
        a1 = 0
        a2 = 0
    elif length_a == 1:
        a1 = tuple_a[0]
        a2 = 0
    else:
        a1 = tuple_a[0]
        a2 = tuple_a[1]

    if lent_b < 1:
        b1 = 0
        b2 = 0
    elif lent_b == 1:
        b1 = tuple_b[0]
        b2 = 0
    else:
        b1 = tuple_b[0]
        b2 = tuple_b[1]

    added = (a1 + b1, a2 + b2)

    return (added)
	
