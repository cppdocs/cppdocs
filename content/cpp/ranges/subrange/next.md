---
title: "std::ranges::subrange<I,S,K>::next"
source_path: "cpp/ranges/subrange/next"
category: "ranges"
since: "C++20"
---

Returns a [subrange](/cpp/ranges/subrange/) whose [begin_](/cpp/ranges/subrange/#begin) is incremented (or decremented if n is negative). The actual increment (or decrement) operation is performed by [advance()](/cpp/ranges/subrange/advance/).

## Declarations
```cpp
constexpr subrange next( std::iter_difference_t<I> n = 1 ) const&
requires std::forward_iterator<I>;
```
_(since C++20)_

```cpp
constexpr subrange next( std::iter_difference_t<I> n = 1 ) &&;
```
_(since C++20)_

## Return value
As described above.

## Notes
The difference between this function and [advance()](/cpp/ranges/subrange/advance/) is that the latter performs the increment (or decrement) in place.

## Example
```cpp
#include <array>
#include <iterator>
#include <print>
#include <ranges>
 
int main()
{
    std::array arr{1, 2, 3, 4, 5, 6, 7};
    std::ranges::subrange sub{std::next(arr.begin(), 2), std::prev(arr.end(), 2)};
    std::println("1) sub: {}", sub);
    std::println("2) sub: {}", sub.next());
    std::println("3) sub: {}", sub.next(2));
}
```

## See also
- [prev](/cpp/ranges/subrange/prev/)
- [advance](/cpp/ranges/subrange/advance/)
- [next](/cpp/iterator/next/)
- [ranges::next](/cpp/iterator/ranges/next/)
