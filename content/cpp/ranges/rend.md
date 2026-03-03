---
title: "std::ranges::rend"
source_path: "cpp/ranges/rend"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Returns a sentinel indicating the end of a reversed range.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ rend = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr std::sentinel_for<
decltype(ranges::rbegin(std::declval<T>()))> auto rend( T&& t );
```
_(since C++20)_

## Notes
If the argument is an rvalue (i.e. T is an object type) and [ranges::enable_borrowed_range](/cpp/ranges/borrowed_range/)<[std::remove_cv_t](/cpp/types/remove_cv/)<T>> is false, or if it is of an array type of unknown bound, the call to ranges::rend is ill-formed, which also results in substitution failure.

If ranges::rend([std::forward](/cpp/utility/forward/)<T>(t)) is valid, then decltype(ranges::rend([std::forward](/cpp/utility/forward/)<T>(t))) and decltype([ranges::begin](/cpp/ranges/begin/)([std::forward](/cpp/utility/forward/)<T>(t))) model [std::sentinel_for](/cpp/iterator/sentinel_for/) in all cases, while T models [std::ranges::range](/cpp/ranges/range/).

The C++20 standard requires that if the underlying rend function call returns a prvalue, the return value is move-constructed from the materialized temporary object. All implementations directly return the prvalue instead. The requirement is corrected by the post-C++20 proposal [P0849R8](https://wg21.link/P0849R8) to match the implementations.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <vector>
 
int main()
{
    std::vector<int> v = {3, 1, 4};
    namespace ranges = std::ranges;
    if (ranges::find(ranges::rbegin(v), ranges::rend(v), 5) != ranges::rend(v))
        std::cout << "found a 5 in vector v!\n";
 
    int a[] = {5, 10, 15};
    if (ranges::find(ranges::rbegin(a), ranges::rend(a), 5) != ranges::rend(a))
        std::cout << "found a 5 in array a!\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2602R2 | C++20 | there's machinery to prohibit certain non-member rend found by ADL | removed such machinery |

## See also
- [ranges::crend](/cpp/ranges/crend/)
- [ranges::rbegin](/cpp/ranges/rbegin/)
- [rendcrend](/cpp/iterator/rend/)
