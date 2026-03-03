---
title: "std::valarray<T>::shift"
source_path: "cpp/numeric/valarray/shift"
category: "numeric"
---

Returns a new valarray of the same size with elements whose positions are shifted by count elements. The new position of each element is i−count where i is the previous position. The value of shifted in elements is T().

## Declarations
```cpp
valarray<T> shift( int count ) const;
```

## Parameters
- `count`: number of positions to shift the elements by

## Return value
The resulting valarray with shifted elements.

## Notes
The function can be implemented with the return type different from [std::valarray](/cpp/numeric/valarray/). In this case, the replacement type has the following properties:

## Example
```cpp
#include <iostream>
#include <valarray>
 
int main()
{
    std::valarray<int> v{1, 2, 3, 4, 5, 6, 7, 8};
 
    for (auto const& val : v)
        std::cout << val << ' ';
    std::cout << '\n';
 
    std::valarray<int> v2 = v.shift(2);
 
    for (auto const& val : v2)
        std::cout << val << ' ';
    std::cout << '\n';
}
```

## See also
- [cshift](/cpp/numeric/valarray/cshift/)
