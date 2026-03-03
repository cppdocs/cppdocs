---
title: "operator-(std::counted_iterator)"
source_path: "cpp/iterator/counted_iterator/operator"
category: "iterator"
since: "C++20"
---

Computes the distance between two iterator adaptors.

## Declarations
```cpp
template< std::common_with<I> I2 >
friend constexpr std::iter_difference_t<I2> operator-(
const counted_iterator& x, const counted_iterator<I2>& y );
```
_(since C++20)_

## Parameters
- `x, y`: iterator adaptors to compute the difference of

## Return value
y.count() - x.count()

## Notes
Since the length counts down, not up, the order of the arguments of operator- in the underlying expression is reversed, i.e. y is lhs and x is rhs.

## Example
```cpp
#include <initializer_list>
#include <iterator>
 
int main()
{
    static constexpr auto v = {1, 2, 3, 4, 5, 6};
    constexpr std::counted_iterator<std::initializer_list<int>::iterator>
        it1{v.begin(), 5},
        it2{it1 + 3},
        it3{v.begin(), 2};
 
    static_assert(it1 - it2 == -3);
    static_assert(it2 - it1 == +3);
//  static_assert(it1 - it3 == -3); // UB: operands of operator- do not refer to
                                    // elements of the same sequence
}
```

## See also
- [operator++operator++(int)operator+=operator+operator--operator--(int)operator-=operator-](/cpp/iterator/counted_iterator/operator_arith/)
- [operator+]()
- [operator-(std::default_sentinel_t)](/cpp/iterator/counted_iterator/operator-2/)
