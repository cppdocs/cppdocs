---
title: "std::qsort"
source_path: "cpp/algorithm/qsort"
header: "<cstdlib>"
category: "algorithm"
---

Sorts the given array pointed to by ptr in ascending order. The array contains count elements of size bytes. Function pointed to by comp is used for object comparison.

## Declarations
```cpp
void qsort( void *ptr, std::size_t count,
std::size_t size, /* c-compare-pred */* comp );
void qsort( void *ptr, std::size_t count,
std::size_t size, /* compare-pred */* comp );
```

```cpp
extern "C" using /* c-compare-pred */ = int(const void*, const void*);
extern "C++" using /* compare-pred */ = int(const void*, const void*);
```
_(exposition only*)_

## Parameters
- `ptr`: pointer to the array to sort
- `count`: number of elements in the array
- `size`: size of each element in the array in bytes
- `comp`: comparison function which returns a negative integer value if the first argument is less than the second, a positive integer value if the first argument is greater than the second and zero if the arguments are equivalent. The signature of the comparison function should be equivalent to the following: int cmp(const void *a, const void *b); The function must not modify the objects passed to it and must return consistent results when called for the same objects, regardless of their positions in the array.

## Return value
(none)

## Notes
Despite the name, C++, C, and POSIX standards do not require this function to be implemented using [Quicksort](https://en.wikipedia.org/wiki/Quicksort) or make any complexity or stability guarantees.

The two overloads provided by the C++ standard library are distinct because the types of the parameter comp are distinct ([language linkage](/cpp/language/language_linkage/) is part of its type).

## Example
```cpp
#include <array>
#include <climits>
#include <compare>
#include <cstdlib>
#include <iostream>
 
int main()
{
    std::array a{-2, 99, 0, -743, INT_MAX, 2, INT_MIN, 4};
 
    std::qsort
    (
        a.data(),
        a.size(),
        sizeof(decltype(a)::value_type),
        [](const void* x, const void* y)
        {
            const int arg1 = *static_cast<const int*>(x);
            const int arg2 = *static_cast<const int*>(y);
            const auto cmp = arg1 <=> arg2;
            if (cmp < 0)
                return -1;
            if (cmp > 0)
                return 1;
            return 0;
        }
    );
 
    for (int ai : a)
        std::cout << ai << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 405 | C++98 | the elements of the array could have any type | limited to PODType |

## See also
- [bsearch](/cpp/algorithm/bsearch/)
- [sort](/cpp/algorithm/sort/)
- [is_trivial](/cpp/types/is_trivial/)
- [C documentation](/c/algorithm/qsort/)
