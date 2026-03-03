---
title: "std::float_denorm_style"
source_path: "cpp/types/numeric_limits/float_denorm_style"
header: "<limits>"
category: "types"
deprecated: "C++23"
---

Enumeration constants of type std::float_denorm_style indicate support of subnormal values by floating-point types.

## Declarations
```cpp
enum float_denorm_style {
denorm_indeterminate = -1,
denorm_absent = 0,
denorm_present = 1
};
```
_(deprecated in C++23)_

## See also
- [has_denorm](/cpp/types/numeric_limits/has_denorm/)
