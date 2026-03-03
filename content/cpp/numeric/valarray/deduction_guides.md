---
title: "deduction guides for std::valarray"
source_path: "cpp/numeric/valarray/deduction_guides"
header: "<valarray>"
category: "numeric"
since: "C++17"
---

This [deduction guide](/cpp/language/ctad/) is provided for [std::valarray](/cpp/numeric/valarray/) to allow deduction from array and size (note that deduction from pointer and size is covered by the implicit guides).

## Declarations
```cpp
template< typename T, std::size_t cnt >
valarray( const T(&)[cnt], std::size_t ) -> valarray<T>;
```
_(since C++17)_

## Example
```cpp
#include <iostream>
#include <valarray>
 
int main()
{
    int a[] = {1, 2, 3, 4};
    std::valarray va(a, 3); // uses explicit deduction guide
    for (int x : va)
        std::cout << x << ' ';
    std::cout << '\n';
}
```
