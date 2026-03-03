---
title: "std::is_floating_point"
source_path: "cpp/types/is_floating_point"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_floating_point is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_floating_point;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
class A {};
static_assert(!std::is_floating_point_v<A>);
 
static_assert(std::is_floating_point_v<float>);
static_assert(!std::is_floating_point_v<float&>);
static_assert(std::is_floating_point_v<double>);
static_assert(!std::is_floating_point_v<double&>);
static_assert(!std::is_floating_point_v<int>);
 
int main() {}
```

## See also
- [is_iec559](/cpp/types/numeric_limits/is_iec559/)
- [is_integral](/cpp/types/is_integral/)
- [is_arithmetic](/cpp/types/is_arithmetic/)
- [floating_point](/cpp/concepts/floating_point/)
