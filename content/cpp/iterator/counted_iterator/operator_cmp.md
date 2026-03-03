---
title: "operator==,<=>(std::counted_iterator)"
source_path: "cpp/iterator/counted_iterator/operator_cmp"
category: "iterator"
since: "C++20"
---

Compares the underlying lengths (i.e. distances to the end).

## Declarations
```cpp
template< std::common_with<I> I2 >
friend constexpr bool operator==(
const counted_iterator& x, const counted_iterator<I2>& y );
```
_(since C++20)_

```cpp
template< std::common_with<I> I2 >
friend constexpr strong_ordering operator<=>(
const counted_iterator& x, const counted_iterator<I2>& y );
```
_(since C++20)_

## Parameters
- `x, y`: iterator adaptors

## Notes
Since the length counts down, not up, the order of the arguments of operator<=> in the underlying comparison expression is reversed, i.e. y is lhs, x is rhs.

## Example
```cpp
#include <initializer_list>
#include <iterator>
 
int main()
{
    static constexpr auto v = {1, 2, 3, 4, 5, 6};
    constexpr std::counted_iterator<std::initializer_list<int>::iterator>
        it1{v.begin(), 5},
        it2{v.begin(), 5},
        it3{v.begin() + 1, 4},
        it4{v.begin(), 0};
    static_assert(it1 == it2);
    static_assert(it2 != it3);
    static_assert(it2 <  it3);
    static_assert(it1 <= it2);
    static_assert(it3 != std::default_sentinel);
    static_assert(it4 == std::default_sentinel);
 
//  it2 == std::counted_iterator{v.begin(), 4}; // UB: operands do not refer to
                                                // elements of the same sequence
}
```

## See also
- [operator==(std::default_sentinel)](/cpp/iterator/counted_iterator/operator_cmp2/)
- [operator+](/cpp/iterator/counted_iterator/operator/)
- [operator-](/cpp/iterator/counted_iterator/operator/)
