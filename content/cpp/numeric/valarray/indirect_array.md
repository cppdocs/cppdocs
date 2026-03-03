---
title: "std::indirect_array"
source_path: "cpp/numeric/valarray/indirect_array"
header: "<valarray>"
category: "numeric"
---

std::indirect_array is a helper template used by the [valarray subscript operator](/cpp/numeric/valarray/operator_at/) with [std::valarray](/cpp/numeric/valarray/)<[std::size_t](/cpp/types/size_t/)> argument. It has reference semantics to a subset of the array whose indices specified by the [std::valarray](/cpp/numeric/valarray/)<[std::size_t](/cpp/types/size_t/)> object.

## Declarations
```cpp
template< class T > class indirect_array;
```

## Example
```cpp
#include <iostream>
#include <valarray>
 
int main()
{
    std::valarray<int> data{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
 
    std::valarray<std::size_t> idx{0, 2, 4, 6, 8};
 
    std::cout << "Original valarray: ";
    for (int n : data)
        std::cout << n << ' ';
    std::cout << '\n';
 
    data[idx] += data[idx]; // double the values at indices 'idx'
 
    // the type of data[idx] is std::indirect_array<int>
 
    std::cout << "After indirect modification: ";
    for (int n : data)
        std::cout << n << ' ';
    std::cout << '\n';
}
```
