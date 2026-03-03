---
title: "std::ranges::ssize"
source_path: "cpp/ranges/ssize"
header: "<ranges>"
category: "ranges"
since: "C++20"
---

Calculates the number of elements in t in constant time, and converts the result to a signed type.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ ssize = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr auto ssize( T&& t );
```
_(since C++20)_

## Notes
If ranges::ssize(e) is valid for an expression e, the return type is a [signed-integer-like type](/cpp/iterator/is-integer-like/).

## Example
```cpp
#include <array>
#include <iostream>
#include <ranges>
#include <type_traits>
 
int main()
{
    std::array arr{1, 2, 3, 4, 5};
    auto s = std::ranges::ssize(arr);
 
    std::cout << "ranges::ssize(arr) = " << s << '\n'
              << "ranges::ssize is "
              << (std::is_signed_v<decltype(s)> ? "signed" : "unsigned")
              << '\n';
 
    std::cout << "reversed arr: ";
 
    for (--s; s >= 0; --s)
        std::cout << arr[s] << ' ';
 
    std::cout << "\n" "s = " << s << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3403 | C++20 | ranges::size worked for some non-range types but ranges::ssize did not | made work |

## See also
- [ranges::size](/cpp/ranges/size/)
- [ranges::sized_range](/cpp/ranges/sized_range/)
- [ranges::distance](/cpp/iterator/ranges/distance/)
- [sizessize](/cpp/iterator/size/)
