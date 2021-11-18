#!/usr/bin/python3
if __name__ == "__main__":
    import sys
    i = len(sys.argv) - 1
    j = 0
    if i >= 1:
        i = 0
        for arg in sys.argv:
            if i != 0:
                j += int(arg)
            i += 1
    print('{0}'.format(j), end='\n')
