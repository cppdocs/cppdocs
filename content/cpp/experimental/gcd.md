---
title: "std::experimental::gcd"
source_path: "cpp/experimental/gcd"
header: "<experimental/numeric>"
category: "experimental"
---

Computes the greatest common divisor of the integers m and n.

## Declarations
```cpp
template< class M, class N>
constexpr std::common_type_t<M, N> gcd( M m, N n );
```
_(library fundamentals TS v2)_

## Parameters
- `m, n`: integer values

## Return value
If both m and n are zero, returns zero. Otherwise, returns the greatest common divisor of |m| and |n|.

## See also
- [lcm](/cpp/experimental/lcm/)
