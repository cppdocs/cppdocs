---
title: "std::swap(std::valarray)"
source_path: "cpp/numeric/valarray/swap2"
header: "<valarray>"
category: "numeric"
since: "C++11"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::valarray](/cpp/numeric/valarray/). Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
template< class T >
void swap( std::valarray<T>& lhs, std::valarray<T>& rhs ) noexcept;
```
_(since C++11)_

## Parameters
- `lhs, rhs`: valarrays whose contents to swap

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <valarray>
 
void print(auto rem, const std::valarray<int>& v)
{
    std::cout << rem << '{';
    for (char sep[]{0, ' ', 0}; auto elem : v)
        std::cout << sep << elem, *sep = ',';
    std::cout << "}\n";
}
 
int main()
{
    std::valarray x{3, 1, 4, 1, 5};
    std::valarray y{2, 7, 1, 8};
 
    print("Before swap:\n" "x: ", x);
    print("y: ", y);
 
    std::swap(x, y);
 
    print("After swap:\n" "x: ", x);
    print("y: ", y);
}
```

## See also
- [swap](/cpp/numeric/valarray/swap/)
