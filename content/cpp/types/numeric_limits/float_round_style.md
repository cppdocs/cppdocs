---
title: "std::float_round_style"
source_path: "cpp/types/numeric_limits/float_round_style"
header: "<limits>"
category: "types"
---

Enumeration constants of type std::float_round_style indicate the rounding style used by floating-point arithmetic whenever a result of an expression is stored in an object of a floating-point type. The values are:

## Declarations
```cpp
enum float_round_style {
round_indeterminate = -1,
round_toward_zero = 0,
round_to_nearest = 1,
round_toward_infinity = 2,
round_toward_neg_infinity = 3
};
```

## See also
- [round_style](/cpp/types/numeric_limits/round_style/)
- [FE_DOWNWARDFE_TONEARESTFE_TOWARDZEROFE_UPWARD](/cpp/numeric/fenv/fe_round/)
