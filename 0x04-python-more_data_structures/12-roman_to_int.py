#!/usr/bin/python3
def roman_to_int(s):
    if s == "None":
        return 0
    if isinstance(s, (str)):
        rom = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
        val = 0
        for i in range(len(s)):
            if i > 0 and rom[s[i]] > rom[s[i-1]]:
                val += rom[s[i]] - 2 * rom[s[i-1]]
            else:
                val += rom[s[i]]
        return val
    else:
        return 0
