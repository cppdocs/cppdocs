---
title: "std::ranges::subrange<I,S,K>::prev"
source_path: "cpp/ranges/subrange/prev"
category: "ranges"
since: "C++20"
---

Returns a copy of *this whose [begin_](/cpp/ranges/subrange/#begin) is decremented (or incremented if n is negative). The actual decrement (or increment) operation is performed by [advance()](/cpp/ranges/subrange/advance/).

## Declarations
```cpp
constexpr subrange prev( std::iter_difference_t<I> n = 1 ) const
requires std::bidirectional_iterator<I>;
```
_(since C++20)_

## Parameters
- `n`: number of decrements of the iterator

## Return value
As described above.

## Notes
The difference between this function and [advance()](/cpp/ranges/subrange/advance/) is that the latter performs the decrement (or increment) in place.

## Example
```cpp
#include <iterator>
#include <list>
#include <print>
#include <ranges>
 
int main()
{
    std::list list{1, 2, 3, 4, 5};
    std::ranges::subrange sub{std::next(list.begin(), 2), std::prev(list.end(), 2)};
    std::println("{} {} {}", sub, sub.prev(), sub.prev(2));
}
```

## See also
- [next](/cpp/ranges/subrange/next/)
- [advance](/cpp/ranges/subrange/advance/)
- [prev](/cpp/iterator/prev/)
- [ranges::prev](/cpp/iterator/ranges/prev/)
