---
title: "std::numeric_limits<T>::has_denorm"
source_path: "cpp/types/numeric_limits/has_denorm"
category: "types"
---

The value of [std::numeric_limits](/cpp/types/numeric_limits/)<T>::has_denorm identifies the floating-point types that support [subnormal values](https://en.wikipedia.org/wiki/Denormal_number).

## Declarations
```cpp
static const std::float_denorm_style has_denorm;
```
_(until C++11)_

```cpp
static constexpr std::float_denorm_style has_denorm;
```
_(since C++11) (deprecated in C++23)_

## See also
- [denorm_min](/cpp/types/numeric_limits/denorm_min/)
- [float_denorm_style](/cpp/types/numeric_limits/float_denorm_style/)
