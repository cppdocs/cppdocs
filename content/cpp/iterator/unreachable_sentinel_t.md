---
title: "std::unreachable_sentinel_t, std::unreachable_sentinel"
source_path: "cpp/iterator/unreachable_sentinel_t"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

1) unreachable_sentinel_t is an empty class type that can be used to denote the “upper bound” of an unbounded interval.

## Declarations
```cpp
struct unreachable_sentinel_t;
```
_(since C++20)_

```cpp
inline constexpr unreachable_sentinel_t unreachable_sentinel{};
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <cstddef>
#include <iostream>
#include <iterator>
 
template<class CharT>
constexpr std::size_t strlen(const CharT* s)
{
    return std::ranges::find(s, std::unreachable_sentinel, CharT{}) - s;
}
 
template<class CharT>
constexpr std::size_t find_first(const CharT* haystack, const CharT* needle)
{
    const char* needle_end = needle + strlen(needle);
    // search(begin, unreachable_sentinel) is usually more efficient than
    // search(begin, end) due to one less comparison per cycle.
    // But "needle" MUST BE PRESENT in the "haystack", otherwise the call
    // is UB (which is a compile-time error in constexpr context).
    auto found = std::ranges::search(haystack, std::unreachable_sentinel,
                                     needle, needle_end);
    return found.begin() - haystack;
}
 
int main()
{
    static_assert(strlen("The quick brown fox jumps over a lazy dog.") == 42);
    static_assert(find_first("unsigned short int", "short") == 9);
//  static_assert(find_first("long int", "float")); // compile-time error
}
```

## See also
- [ranges::iota_viewviews::iota](/cpp/ranges/iota_view/)
- [view](/cpp/ranges/view/)
