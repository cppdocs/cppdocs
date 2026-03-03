---
title: "std::end(std::valarray)"
source_path: "cpp/numeric/valarray/end2"
category: "numeric"
since: "C++11"
---

The overload of [std::end](/cpp/iterator/end/) for valarray returns an iterator of unspecified type referring to the one past the last element in the numeric array.

## Declarations
```cpp
template< class T >
/* see below */ end( valarray<T>& v );
```
_(since C++11)_

```cpp
template< class T >
/* see below */ end( const valarray<T>& v );
```
_(since C++11)_

## Parameters
- `v`: a numeric array

## Return value
Iterator to one past the last value in the numeric array.

## Notes
Unlike other functions that take std::valarray arguments, end() cannot accept the replacement types (such as the types produced by expression templates) that may be returned from expressions involving valarrays: [std::end](/cpp/iterator/end/)(v1 + v2) is not portable, [std::end](/cpp/iterator/end/)([std::valarray](/cpp/numeric/valarray/)<T>(v1 + v2)) has to be used instead.

The intent of this function is to allow [range for loops](/cpp/language/range-for/) to work with valarrays, not to provide container semantics.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <valarray>
 
int main()
{
    const std::valarray<char> va
    {
        'H', 'e', 'l', 'l', 'o', 
        ',', ' ', 
        'C', '+', '+', '!', '\n'
    };
 
    std::for_each(std::begin(va), std::end(va),
                  [](char c){ std::cout << c; });
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2058 | C++11 | 1. end() was required to support replacement types2. it was unspecified when the returned iterators will be invalidated | 1. not required2. specified |

## See also
- [std::begin(std::valarray)](/cpp/numeric/valarray/begin2/)
- [std::begin](/cpp/iterator/begin/)
