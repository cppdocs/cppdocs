---
title: "std::ranges::cend"
source_path: "cpp/ranges/cend"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Returns a sentinelfor the constant iterator(since C++23) indicating the end of a const-qualified(until C++23) range.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ cend = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr /* see below */ auto cend( T&& t );
```
_(since C++20)_

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <ranges>
#include <vector>
 
int main()
{
    std::vector vec{3, 1, 4};
    int arr[]{5, 10, 15};
 
    assert(std::ranges::find(vec, 5) == std::ranges::cend(vec));
    assert(std::ranges::find(arr, 5) != std::ranges::cend(arr));
}
```

## See also
- [ranges::end](/cpp/ranges/end/)
- [endcend](/cpp/iterator/end/)
