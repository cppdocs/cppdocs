---
title: "std::valarray<T>::cshift"
source_path: "cpp/numeric/valarray/cshift"
category: "numeric"
---

Returns a new valarray of the same size with elements whose positions are shifted circularly by count elements.

## Declarations
```cpp
valarray<T> cshift( int count ) const;
```

## Parameters
- `count`: number of positions to shift the elements by

## Return value
The resulting valarray with circularly shifted elements.

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
 
    std::valarray<int> v2 = v.cshift(2);
 
    for (auto const& val : v2)
        std::cout << val << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 618 | C++98 | the expression of the shifted elementscontains zero-division if size() is 0 | describes the new positionswithout using expressions |

## See also
- [shift](/cpp/numeric/valarray/shift/)
