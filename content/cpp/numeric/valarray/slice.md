---
title: "std::slice"
source_path: "cpp/numeric/valarray/slice"
header: "<valarray>"
category: "numeric"
---

std::slice is the selector class that identifies a subset of [std::valarray](/cpp/numeric/valarray/) similar to [BLAS](https://en.wikipedia.org/wiki/BLAS) slice. An object of type std::slice holds three values: the starting index, the stride, and the total number of values in the subset. Objects of type std::slice can be used as indices with valarray's operator[].

## Declarations
```cpp
class slice;
```

## Parameters
- `start`: the position of the first element
- `size`: the number of elements in the slice
- `stride`: the number of positions between successive elements in the slice
- `other`: another slice to copy

## Return value
The parameters of the slice -- start, size and stride respectively.

## Example
```cpp
#include <iostream>
#include <valarray>
 
class Matrix
{
    std::valarray<int> data;
    int dim;
public:
    Matrix(int r, int c) : data(r*c), dim(c) {}
    int& operator()(int r, int c) { return data[r * dim + c]; }
    int trace() const { return data[std::slice(0, dim, dim + 1)].sum(); }
};
 
int main()
{
    Matrix m(3, 3);
    int n = 0;
    for (int r = 0; r < 3; ++r)
       for (int c = 0; c < 3; ++c)
           m(r, c) = ++n;
    std::cout << "Trace of the matrix (1,2,3) (4,5,6) (7,8,9) is " << m.trace() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 543 | C++98 | it was unclear whether a default constructed slice is usable | it is usable (as an empty subset) |

## See also
- [operator[]](/cpp/numeric/valarray/operator_at/)
- [gslice](/cpp/numeric/valarray/gslice/)
- [slice_array](/cpp/numeric/valarray/slice_array/)
- [mdspan](/cpp/container/mdspan/)
