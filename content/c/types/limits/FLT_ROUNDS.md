---
title: "FLT_ROUNDS"
source_path: "c/types/limits/FLT_ROUNDS"
header: "<float.h>"
category: "c"
---

Returns the current rounding direction of floating-point arithmetic operations.

## Declarations
```cpp
#define FLT_ROUNDS /* implementation defined */
```

## Notes
The rounding mode can be changed with [fesetround](/c/numeric/fenv/feround/) and FLT_ROUNDS reflects that change.

## See also
- [fegetroundfesetround](/c/numeric/fenv/feround/)
- [FE_DOWNWARDFE_TONEARESTFE_TOWARDZEROFE_UPWARD](/c/numeric/fenv/FE_round/)
- [C++ documentation](/cpp/types/climits/flt_rounds/)
