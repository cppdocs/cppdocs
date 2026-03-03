---
title: "std::counted_iterator<I>::operator[]"
source_path: "cpp/iterator/counted_iterator/operator_at"
aliases:
  - "/cpp/iterator/counted_iterator/operator&/"
category: "iterator"
since: "C++20"
---

Accesses the element at specified relative location. The behavior is undefined if n is not less than the recorded distance to the end.

## Declarations
```cpp
constexpr decltype(auto) operator[]( std::iter_difference_t<I> n ) const
requires std::random_access_iterator<I>;
```
_(since C++20)_

## Parameters
- `n`: position relative to current location

## Return value
this->base()[n]

## Example
```cpp
#include <array>
#include <iostream>
#include <iterator>
#include <list>
 
int main()
{
    std::array array{'A', 'B', 'C', 'D', 'E'};
 
    std::counted_iterator it{array.begin() + 1, /*count:*/ 3};
 
    for (int i{}; i != it.count(); ++i)
        std::cout << it[i] << ' ';
    std::cout << '\n';
 
    for (int i{}; i != it.count(); ++i)
        it[i] += ('E' - 'A');
 
    for (int i{}; i != it.count(); ++i)
        std::cout << it[i] << ' ';
    std::cout << '\n';
 
    std::list list{'X', 'Y', 'Z', 'W'};
    std::counted_iterator it2{list.begin(), 3};
//  char x = it2[0]; // Error: requirement `random_access_iterator` was not satisfied.
    std::cout << *it2 << '\n'; // OK
}
```

## See also
- [operator*operator->](/cpp/iterator/counted_iterator/operator/)
