#!/usr/bin/python3
def square_matrix_simple(matrix=[]):
    new_matrix = matrix.copy()
    for i in range(len(matrix)):
        print("{} - ".format(i))
        new_matrix[i] =list( map(lambda x: x **2, matrix[i]))

    return new_matrix


print(square_matrix_simple([[1,2,3],[4,4,2,4,2,4,2,4,2,6,7]]))

