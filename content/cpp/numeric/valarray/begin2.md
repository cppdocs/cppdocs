---
title: "std::begin(std::valarray)"
source_path: "cpp/numeric/valarray/begin2"
category: "numeric"
since: "C++11"
---

The overload of [std::begin](/cpp/iterator/begin/) for valarray returns an iterator of unspecified type referring to the first element in the numeric array.

## Declarations
```cpp
template< class T >
/* see below */ begin( valarray<T>& v );
```
_(since C++11)_

```cpp
template< class T >
/* see below */ begin( const valarray<T>& v );
```
_(since C++11)_

## Parameters
- `v`: a numeric array

## Return value
Iterator to the first value in the numeric array.

## Notes
Unlike other functions that take std::valarray arguments, begin() cannot accept the replacement types (such as the types produced by expression templates) that may be returned from expressions involving valarrays: [std::begin](/cpp/iterator/begin/)(v1 + v2) is not portable, [std::begin](/cpp/iterator/begin/)([std::valarray](/cpp/numeric/valarray/)<T>(v1 + v2)) has to be used instead.

The intent of this function is to allow [range for loops](/cpp/language/range-for/) to work with valarrays, not to provide container semantics.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <valarray>
 
void show(const std::valarray<int>& v)
{
    std::for_each(std::begin(v), std::end(v), [](int c)
    {
        std::cout << c << ' ';
    });
    std::cout << '\n';
};
 
int main()
{
    const std::valarray<int> x{47, 70, 37, 52, 90, 23, 17, 33, 22, 16, 21, 4};
    const std::valarray<int> y{25, 31, 71, 56, 21, 21, 15, 34, 21, 27, 12, 6};
 
    show(x); 
    show(y); 
 
    const std::valarray<int> z{x + y};
 
    for (char c : z)
        std::cout << c;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2058 | C++11 | 1. begin() was required to support replacement types2. it was unspecified when the returned iterators will be invalidated | 1. not required2. specified |

## See also
- [std::end(std::valarray)](/cpp/numeric/valarray/end2/)
- [std::end](/cpp/iterator/end/)
