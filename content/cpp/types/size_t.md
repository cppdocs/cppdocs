---
title: "std::size_t"
source_path: "cpp/types/size_t"
header: "<cstddef>"
category: "types"
---

std::size_t is the unsigned integer type of the result of the following operators:

## Declarations
```cpp
typedef /* implementation-defined */ size_t;
```

## Notes
std::size_t can store the maximum size of a theoretically possible object of any type (including array). On many platforms (an exception is systems with segmented addressing) std::size_t can safely store the value of any non-member pointer, in which case it is synonymous with [std::uintptr_t](/cpp/types/integer/).

std::size_t is commonly used for array indexing and loop counting. Programs that use other types, such as unsigned int, for array indexing may fail on, e.g. 64-bit systems when the index exceeds [UINT_MAX](/cpp/types/climits/) or if it relies on 32-bit modular arithmetic.

When indexing C++ containers, such as [std::string](/cpp/string/basic_string/), [std::vector](/cpp/container/vector/), etc, the appropriate type is the nested type size_type provided by such containers. It is usually defined as a synonym for std::size_t.

It is unspecified whether the declaration of std::size_t is available in any other standard library header. An implementation may avoid introducing this name even when the standard requires std::size_t to be used.

The [integer literal suffix](/cpp/language/integer_literal/) for std::size_t is any combination of z or Z with u or U (i.e. zu, zU, Zu, ZU, uz, uZ, Uz, or UZ).

## Example
```cpp
#include <array>
#include <cstddef>
#include <iostream>
 
int main()
{
    std::array<std::size_t, 10> a;
 
    // Example with C++23 std::size_t literal
    for (auto i = 0uz; i != a.size(); ++i)
        std::cout << (a[i] = i) << ' ';
    std::cout << '\n';
 
    // Example of decrementing loop
    for (std::size_t i = a.size(); i--;)
        std::cout << a[i] << ' ';
    std::cout << '\n';
 
    // Note the naive decrementing loop:
    //  for (std::size_t i = a.size() - 1; i >= 0; --i) ...
    // is an infinite loop, because unsigned numbers are always non-negative
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1122 | C++98 | std::size_t was circularly defined[1] | it is implementation-defined |
| CWG 1464 | C++98 | object size might be not representable in std::size_t | such type is ill-formed |

## See also
- [ptrdiff_t](/cpp/types/ptrdiff_t/)
- [offsetof](/cpp/types/offsetof/)
- [standard-layout](/cpp/named_req/standardlayouttype/)
- [integer literals](/cpp/language/integer_literal/)
- [C documentation](/c/types/size_t/)
