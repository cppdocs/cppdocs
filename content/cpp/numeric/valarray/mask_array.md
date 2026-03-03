---
title: "std::mask_array"
source_path: "cpp/numeric/valarray/mask_array"
header: "<valarray>"
category: "numeric"
---

std::mask_array is a helper template used by the [valarray subscript operator](/cpp/numeric/valarray/operator_at/) with [std::valarray](/cpp/numeric/valarray/)<bool> argument. It has reference semantics and provides access to the subset of the valarray consisting of the elements whose indices correspond to true values in the [std::valarray](/cpp/numeric/valarray/)<bool> mask.

## Declarations
```cpp
template< class T > class mask_array;
```

## Example
```cpp
#include <iostream>
#include <valarray>
 
void println(auto rem, const auto& data)
{
    for (std::cout << rem; int n : data)
        std::cout << n << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::valarray<int> data{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
 
    println("Initial valarray: ", data);
 
    data[data > 5] = -1;
    // the type of data>5 is std::valarray<bool>
    // the type of data[data>5] is std::mask_array<int>
 
    println("After v[v>5]=-1:  ", data);
}
```

## See also
- [simd_mask](/cpp/experimental/simd/simd_mask/)
