---
title: "std::experimental::lcm"
source_path: "cpp/experimental/lcm"
header: "<experimental/numeric>"
category: "experimental"
---

Computes the least common multiple of the integers m and n.

## Declarations
```cpp
template< class M, class N >
constexpr std::common_type_t<M, N> lcm( M m, N n );
```
_(library fundamentals TS v2)_

## Parameters
- `m, n`: integer values

## Return value
If either m or n is zero, returns zero. Otherwise, return the least common multiple of |m| and |n|.

## See also
- [gcd](/cpp/experimental/gcd/)
