---
title: "operator==(std::common_iterator)"
source_path: "cpp/iterator/common_iterator/operator_cmp"
category: "iterator"
since: "C++20"
---

Compares the iterators and/or sentinels held by underlying [std::variant](/cpp/utility/variant/) member objects var. Two incomparable iterators or two sentinels are considered equal.

## Declarations
```cpp
template <class I2, std::sentinel_for<I> S2>
requires std::sentinel_for<S, I2>
friend constexpr bool operator==( const common_iterator& x,
const std::common_iterator<I2, S2>& y );
```
_(since C++20)_

```cpp
template <class I2, std::sentinel_for<I> S2>
requires std::sentinel_for<S, I2> && std::equality_comparable_with<I, I2>
friend constexpr bool operator==( const common_iterator& x,
const std::common_iterator<I2, S2>& y );
```
_(since C++20)_

## Parameters
- `x, y`: iterator adaptors to compare

## Return value
true if underlying iterators and/or sentinels are equal.

## Example
```cpp
#include <cassert>
#include <iterator>
 
int main()
{
    int a[]{0, 1, 2, 3};
 
    using CI = std::common_iterator<
                   std::counted_iterator<int*>,
                   std::default_sentinel_t
                   >;
 
    CI i1{std::counted_iterator{a + 0, 2}};
    CI i2{std::counted_iterator{a + 1, 2}};
    CI i3{std::counted_iterator{a + 0, 3}};
    CI i4{std::counted_iterator{a + 0, 0}};
    CI s1{std::default_sentinel};
    CI s2{std::default_sentinel};
 
    assert((i1 == i2) == true);
    assert((i1 == i3) == false);
    assert((i2 == i3) == false);
    assert((s1 == s2) == true);
    assert((i1 == s1) == false);
    assert((i4 == s1) == true);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3574 | C++20 | variant was fully constexpr (P2231R1) but common_iterator was not | also made constexpr |

## See also
- [operator-](/cpp/iterator/common_iterator/operator/)
