---
title: "operator-(ranges::zip_view::sentinel)"
source_path: "cpp/ranges/zip_view/sentinel/operator"
category: "ranges"
since: "C++23"
---

Computes the minimal distance between the underlying tuple of iterators of x and the underlying tuple of sentinels of y.

## Declarations
```cpp
template< bool OtherConst >
requires (std::sized_sentinel_for<
ranges::sentinel_t</*maybe-const*/<Const, Views>>,
ranges::iterator_t</*maybe-const*/<OtherConst, Views>>> && ...)
friend constexpr
std::common_type_t<ranges::range_difference_t</*maybe-const*/<OtherConst, Views>>...>
operator-( const iterator<OtherConst>& x, const sentinel& y );
```
_(since C++23)_

```cpp
template< bool OtherConst >
requires (std::sized_sentinel_for<
ranges::sentinel_t</*maybe-const*/<Const, Views>>,
ranges::iterator_t</*maybe-const*/<OtherConst, Views>>> && ...)
friend constexpr
std::common_type_t<ranges::range_difference_t</*maybe-const*/<OtherConst, Views>>...>
operator-( const sentinel& y, const iterator<OtherConst>& x );
```
_(since C++23)_

## Parameters
- `x`: an iterator
- `y`: a sentinel

## Return value
Let current_ denote the underlying tuple of iterators of x, and end_ denote the underlying tuple of sentinels of y.

## Example
```cpp
#include <cassert>
#include <deque>
#include <list>
#include <ranges>
#include <vector>
 
int main()
{
    auto x = std::vector{1, 2, 3, 4};
    auto y = std::deque{'a', 'b', 'c'};
    auto z = {1.1, 2.2};
    auto w = std::list{1, 2, 3};
 
    auto p = std::views::zip(x, y, z);
    assert(p.begin() - p.end() == +2);
    assert(p.end() - p.begin() == -2);
 
    [[maybe_unused]]
    auto q = std::views::zip(x, y, w);
 
    // The following code fires a compile-time error because std::list::iterator
    // does not support operator- that is needed to calculate the distance:
    // auto e = q.begin() - q.end();
}
```
