---
title: "FLT_ROUNDS"
source_path: "cpp/types/climits/FLT_ROUNDS"
header: "<cfloat>"
category: "types"
---

Specifies the current rounding direction of floating-point arithmetic operations.

## Declarations
```cpp
#define FLT_ROUNDS /* implementation defined */
```

## Notes
The rounding mode can be changed with [std::fesetround](/cpp/numeric/fenv/feround/) and FLT_ROUNDS reflects that change.

The possible values of FLT_ROUNDS match the possible values of [std::float_round_style](/cpp/types/numeric_limits/float_round_style/), returned by [std::numeric_limits::round_style](/cpp/types/numeric_limits/round_style/).

## See also
- [float_round_style](/cpp/types/numeric_limits/float_round_style/)
- [fegetroundfesetround](/cpp/numeric/fenv/feround/)
- [FE_DOWNWARDFE_TONEARESTFE_TOWARDZEROFE_UPWARD](/cpp/numeric/fenv/fe_round/)
- [C documentation](/c/types/limits/FLT_ROUNDS/)
