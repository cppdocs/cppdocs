---
title: "std::ranges::data"
source_path: "cpp/ranges/data"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Returns a pointer to the first element of a contiguous range.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ data = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr std::remove_reference_t<
ranges::range_reference_t<T>>* data( T&& t );
```
_(since C++20)_

## Notes
If the argument is an rvalue (i.e. T is an object type) and [ranges::enable_borrowed_range](/cpp/ranges/borrowed_range/)<[std::remove_cv_t](/cpp/types/remove_cv/)<T>> is false, the call to ranges::data is ill-formed, which also results in substitution failure.

If ranges::data(e) is valid for an expression e, then it returns a pointer to an object.

The C++20 standard requires that if the underlying data function call returns a prvalue, the return value is move-constructed from the materialized temporary object. All implementations directly return the prvalue instead. The requirement is corrected by the post-C++20 proposal [P0849R8](https://wg21.link/P0849R8) to match the implementations.

## Example
```cpp
#include <cstring>
#include <iostream>
#include <ranges>
#include <string>
 
int main()
{
    std::string s{"Hello world!\n"};
 
    char a[20]; // storage for a C-style string
    std::strcpy(a, std::ranges::data(s));
    // [data(s), data(s) + size(s)] is guaranteed to be an NTBS
 
    std::cout << a;
}
```

## See also
- [ranges::cdata](/cpp/ranges/cdata/)
- [ranges::begin](/cpp/ranges/begin/)
- [data](/cpp/iterator/data/)
