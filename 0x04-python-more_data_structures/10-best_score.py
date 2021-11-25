#!/usr/bin/python3
def best_score(a_dict):
    best_score = 0
    best_key = ""
    if not a_dict:
        return "None"
    else:
        for x in a_dict:
            if a_dict[x] > best_score:
                best_score = a_dict[x]
                best_key = x 
        return best_key
