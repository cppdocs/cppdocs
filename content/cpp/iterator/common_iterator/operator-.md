---
title: "operator-(std::common_iterator)"
source_path: "cpp/iterator/common_iterator/operator"
category: "iterator"
since: "C++20"
---

Computes the distance between two iterator adaptors. Two sentinels are considered equal.

## Declarations
```cpp
template< std::sized_sentinel_for<I> I2, std::sized_sentinel_for<I> S2 >
requires std::sized_sentinel_for<S, I2>
friend constexpr std::iter_difference_t<I2>
operator-( const common_iterator& x, const std::common_iterator<I2, S2>& y );
```
_(since C++20)_

## Parameters
- `x, y`: iterator adaptors to compute the difference of

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
 
int main()
{
    int a[]{0, 1, 2, 3, 4, 5};
 
    using CI = std::common_iterator<
                   std::counted_iterator<int*>,
                   std::default_sentinel_t
                   >;
 
    CI i1{std::counted_iterator{a + 1, 2}};
    CI i2{std::counted_iterator{a, 3}};
    CI s1{std::default_sentinel};
    CI s2{std::default_sentinel};
 
    std::cout << (s2 - s1) << ' '
              << (i2 - i1) << ' '
              << (i1 - s1) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3574 | C++20 | variant was fully constexpr (P2231R1) but common_iterator was not | also made constexpr |

## See also
- [operator++operator++(int)](/cpp/iterator/common_iterator/operator_arith/)
