---
title: "std::ranges::end"
source_path: "cpp/ranges/end"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Returns a sentinel indicating the end of a range.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ end = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr std::sentinel_for<ranges::iterator_t<T>> auto end( T&& t );
```
_(since C++20)_

## Notes
If the argument is an rvalue (i.e. T is an object type) and [ranges::enable_borrowed_range](/cpp/ranges/borrowed_range/)<[std::remove_cv_t](/cpp/types/remove_cv/)<T>> is false, or if it is of an array type of unknown bound, the call to ranges::end is ill-formed, which also results in substitution failure.

If ranges::end([std::forward](/cpp/utility/forward/)<T>(t)) is valid, then decltype(ranges::end([std::forward](/cpp/utility/forward/)<T>(t))) and decltype([ranges::begin](/cpp/ranges/begin/)([std::forward](/cpp/utility/forward/)<T>(t))) model [std::sentinel_for](/cpp/iterator/sentinel_for/) in all cases, while T models [std::ranges::range](/cpp/ranges/range/).

The C++20 standard requires that if the underlying end function call returns a prvalue, the return value is move-constructed from the materialized temporary object. All implementations directly return the prvalue instead. The requirement is corrected by the post-C++20 proposal [P0849R8](https://wg21.link/P0849R8) to match the implementations.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <ranges>
#include <vector>
 
int main()
{
    std::vector<int> vec{3, 1, 4};
    if (std::ranges::find(vec, 5) != std::ranges::end(vec))
        std::cout << "found a 5 in vector vec!\n";
 
    int arr[]{5, 10, 15};
    if (std::ranges::find(arr, 5) != std::ranges::end(arr))
        std::cout << "found a 5 in array arr!\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2602R2 | C++20 | there's machinery to prohibit certain non-member end found by ADL | removed such machinery |

## See also
- [ranges::cend](/cpp/ranges/cend/)
- [ranges::begin](/cpp/ranges/begin/)
- [endcend](/cpp/iterator/end/)
