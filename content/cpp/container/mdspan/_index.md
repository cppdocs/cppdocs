---
title: "std::mdspan"
source_path: "cpp/container/mdspan"
header: "<mdspan>"
since: "C++23"
---

std::mdspan is a multidimensional array view that maps a multidimensional index to an element of the array. The mapping and element access policies are configurable, and the underlying array need not be contiguous or even exist in memory at all.

## Declarations
```cpp
template<
class T,
class Extents,
class LayoutPolicy = std::layout_right,
class AccessorPolicy = std::default_accessor<T>
> class mdspan;
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_mdspan
202207L
(C++23)
std::mdspan
__cpp_lib_submdspan
202306L
(C++26)
std::submdspan
202403L
(C++26)
std::mdspan padded layouts
__cpp_lib_aligned_accessor
202411L
(C++26)
std::aligned_accessor

## Example
```cpp
#include <cstddef>
#include <mdspan>
#include <print>
#include <vector>
 
int main()
{
    std::vector v{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12};
 
    // View data as contiguous memory representing 2 rows of 6 ints each
    auto ms2 = std::mdspan(v.data(), 2, 6);
    // View the same data as a 3D array 2 x 3 x 2
    auto ms3 = std::mdspan(v.data(), 2, 3, 2);
 
    // Write data using 2D view
    for (std::size_t i = 0; i != ms2.extent(0); i++)
        for (std::size_t j = 0; j != ms2.extent(1); j++)
            ms2[i, j] = i * 1000 + j;
 
    // Read back using 3D view
    for (std::size_t i = 0; i != ms3.extent(0); i++)
    {
        std::println("slice @ i = {}", i);
        for (std::size_t j = 0; j != ms3.extent(1); j++)
        {
            for (std::size_t k = 0; k != ms3.extent(2); k++)
                std::print("{} ", ms3[i, j, k]);
            std::println("");
        }
    }
}
```

## See also
- [span](/cpp/container/span/)
- [valarray](/cpp/numeric/valarray/)
