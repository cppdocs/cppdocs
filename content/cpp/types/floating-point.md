---
title: "Fixed width floating-point types (since C++23)"
source_path: "cpp/types/floating-point"
category: "types"
since: "C++23"
---

If the implementation supports any of the following [ISO 60559](https://en.wikipedia.org/wiki/IEEE_754) types as an extended floating-point type, then:

## Notes
The type std::bfloat16_t is known as [Brain Floating-Point](https://en.wikipedia.org/wiki/Bfloat16_floating-point_format).

Unlike the [fixed width integer types](/cpp/types/integer/), which may be aliases to [standard integer types](/cpp/language/types/#Standard_integer_types), the fixed width floating-point types must be aliases to extended floating-point types (not float / double / long double).

## Example
```cpp
#include <stdfloat>
 
#if __STDCPP_FLOAT64_T__ != 1
    #error "64-bit float type required"
#endif
 
int main()
{
    std::float64_t f = 0.1f64;
}
```

## See also
- [Fundamental types](/cpp/language/types/)
