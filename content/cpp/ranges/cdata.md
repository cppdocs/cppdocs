---
title: "std::ranges::cdata"
source_path: "cpp/ranges/cdata"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Returns a pointer to the first element of constant type(since C++23) of a contiguous range denoted by a const-qualified(until C++23) argument.

## Declarations
```cpp
inline namespace /*unspecified*/ {
inline constexpr /*unspecified*/ cdata = /*unspecified*/;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr /* see below */ cdata( T&& t );
```
_(since C++20)_

## Example
```cpp
#include <cstring>
#include <iostream>
#include <ranges>
#include <string>
 
int main()
{
    std::string src {"hello world!\n"};
 
//  std::ranges::cdata(src)[0] = 'H'; // error, src.data() is treated as read-only
    std::ranges::data(src)[0] = 'H'; // OK, src.data() is a non-const storage
 
    char dst[20]; // storage for a C-style string
    std::strcpy(dst, std::ranges::cdata(src));
    // [data(src), data(src) + size(src)] is guaranteed to be an NTBS
 
    std::cout << dst;
}
```

## See also
- [ranges::data](/cpp/ranges/data/)
- [data](/cpp/iterator/data/)
