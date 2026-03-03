---
title: "std::experimental::void_t"
source_path: "cpp/experimental/void_t"
header: "<experimental/type_traits>"
category: "experimental"
---

A utility metafunction that maps a sequence of any types to the type void.

## Declarations
```cpp
template< class... >
using void_t = void;
```
_(library fundamentals TS v2)_

## Notes
This utility metafunction is used in template metaprogramming to detect ill-formed types in [SFINAE](/cpp/language/sfinae/) context. First voted into C++17 as [std::void_t](/cpp/types/void_t/), it was later added as well to the library fundamentals TS as std::experimental::void_t, because it is a dependency of the [detection idiom](/cpp/experimental/is_detected/) and the LFTS v2 is based on C++14.

## See also
- [void_t](/cpp/types/void_t/)
