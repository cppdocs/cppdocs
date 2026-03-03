---
title: "ckd_add"
source_path: "c/numeric/ckd_add"
header: "<stdckdint.h>"
category: "c"
---

Computes the addition x + y and stores the result into *result. The addition is performed as if both operands were represented in a signed integer type with infinite range, and the result was then converted from this integer type to type1. If the value assigned to *result correctly represents the mathematical result of the operation, it returns false. Otherwise, it returns true. In this case, the value assigned to *result is the mathematical result of the operation wrapped around to the width of *result.

## Declarations
```cpp
#define ckd_add( result, a, b ) /* implementation-defined */
// exposed interface:
bool ckd_add( type1* result, type2 a, type3 b );
```
_(since C23)_

## Parameters
- `a, b`: integer values
- `result`: address of where result should be stored

## Return value
false if the value assigned to *result correctly represents the mathematical result of the addition, true otherwise.

## Example
This section is incompleteReason: no example

## See also
- [ckd_sub](/c/numeric/ckd_sub/)
- [ckd_mul](/c/numeric/ckd_mul/)
