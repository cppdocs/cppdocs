---
title: "std::ranges::distance"
source_path: "cpp/iterator/ranges/distance"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

1,2) Returns the number of hops from first to last.

## Declarations
```cpp
Call signature
```

```cpp
template< class I, std::sentinel_for<I> S >
requires (!std::sized_sentinel_for<S, I>)
constexpr std::iter_difference_t<I>
distance( I first, S last );
```
_(since C++20)_

```cpp
template< class I, std::sized_sentinel_for<std::decay_t<I>> S >
constexpr std::iter_difference_t<std::decay_t<I>>
distance( I&& first, S last );
```
_(since C++20)_

```cpp
template< ranges::range R >
constexpr ranges::range_difference_t<R>
distance( R&& r );
```
_(since C++20)_

## Parameters
- `first`: iterator pointing to the first element
- `last`: sentinel denoting the end of the range first is an iterator to
- `r`: range to calculate the distance of

## Example
```cpp
#include <cassert>
#include <forward_list>
#include <iterator>
#include <vector>
 
int main() 
{
    std::vector<int> v{3, 1, 4};
    assert(std::ranges::distance(v.begin(), v.end()) == 3);
    assert(std::ranges::distance(v.end(), v.begin()) == -3);
    assert(std::ranges::distance(v) == 3);
 
    std::forward_list<int> l{2, 7, 1};
    // auto size = std::ranges::size(l); // error: not a sizable range
    auto size = std::ranges::distance(l); // OK, but aware O(N) complexity
    assert(size == 3);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3392 | C++20 | overload (1) takes iterator by value, thus move-onlyiterator lvalue with a sized sentinel was rejected | added overload (2) |
| LWG 3664 | C++20 | the resolution of LWG issue 3392 maderanges::distance reject array arguments | accepts them |

## See also
- [ranges::advance](/cpp/iterator/ranges/advance/)
- [ranges::countranges::count_if](/cpp/algorithm/ranges/count/)
- [distance](/cpp/iterator/distance/)
