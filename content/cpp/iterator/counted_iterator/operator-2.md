---
title: "operator-(std::counted_iterator<I>, std::default_sentinel_t)"
source_path: "cpp/iterator/counted_iterator/operator"
category: "iterator"
since: "C++20"
---

1) Returns the negative distance to the end.

## Declarations
```cpp
friend constexpr std::iter_difference_t<I> operator-(
const counted_iterator& x, std::default_sentinel_t );
```
_(since C++20)_

```cpp
friend constexpr std::iter_difference_t<I> operator-(
std::default_sentinel_t, const counted_iterator& y );
```
_(since C++20)_

## Parameters
- `x, y`: iterator adaptors to compute the difference of

## Example
```cpp
#include <initializer_list>
#include <iterator>
 
int main()
{
    constexpr static auto v = {1, 2, 3, 4};
    constexpr std::counted_iterator<std::initializer_list<int>::iterator>
        it{v.begin(), 3};
    constexpr auto d1 = it - std::default_sentinel;
    static_assert(d1 == -3); // (1)
    constexpr auto d2 = std::default_sentinel - it;
    static_assert(d2 == +3); // (2)
}
```

## See also
- [operator++operator++(int)operator+=operator+operator--operator--(int)operator-=operator-](/cpp/iterator/counted_iterator/operator_arith/)
- [operator+]()
- [operator-]()
- [default_sentinel_t](/cpp/iterator/default_sentinel/)
