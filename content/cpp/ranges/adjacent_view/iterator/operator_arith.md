---
title: "std::ranges::adjacent_view<V,N>::iterator<Const>::operator++,--,+=,-="
source_path: "cpp/ranges/adjacent_view/iterator/operator"
category: "ranges"
since: "C++23"
---

Increments or decrements the iterator.

## Declarations
```cpp
constexpr /*iterator*/& operator++();
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator++( int );
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator--()
requires ranges::bidirectional_range<Base>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/ operator--( int )
requires ranges::bidirectional_range<Base>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator+=( difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

```cpp
constexpr /*iterator*/& operator-=( difference_type n )
requires ranges::random_access_range<Base>;
```
_(since C++23)_

## Parameters
- `n`: position relative to current location

## Example
```cpp
#include <cassert>
#include <list>
#include <ranges>
#include <utility>
#include <vector>
 
int main()
{
    {
        auto v = std::vector{0, 1, 2, 3, 4, 5};
        auto i = (v | std::views::pairwise).begin();
        assert((*i == std::pair{0, 1}));
        ++i;                            // overload (1)
        assert((*i == std::pair{1, 2}));
        --i;                            // overload (3)
        assert((*i == std::pair{0, 1}));
        i += 2;                         // overload (5)
        assert((*i == std::pair{2, 3}));
        i -= 2;                         // overload (6)
        assert((*i == std::pair{0, 1}));
    }
    {
        auto v = std::list{0, 1, 2, 3, 4, 5};
        auto i = (v | std::views::pairwise).begin();
        assert((*i == std::pair{0, 1}));
        ++i;                            // overload (1)
        assert((*i == std::pair{1, 2}));
        --i;                            // overload (3)
        assert((*i == std::pair{0, 1}));
//      i += 2; // Error: v is not a random_access_range; overload (5)
//      i -= 2; // Error: v is not a random_access_range; overload (6)
    }
}
```

## See also
- [operator+operator-](/cpp/ranges/adjacent_view/iterator/operator_arith2/)
