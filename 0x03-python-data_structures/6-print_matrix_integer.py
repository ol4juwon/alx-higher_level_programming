#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    if not matrix:
        return matrix
    else:
        lent = len(matrix)
        for i in range(lent):
            if len(matrix[i]) > 0:
                for j in range(len(matrix[i])):
                    print('{:d}'.format(matrix[i][j]), end=' ')
                print('')
