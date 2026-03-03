---
title: "ckd_mul"
source_path: "c/numeric/ckd_mul"
header: "<stdckdint.h>"
category: "c"
---

Computes the multiplication x × y and stores the result into *result. The multiplication is performed as if both operands were represented in a signed integer type with infinite range, and the result was then converted from this integer type to type1. If the value assigned to *result correctly represents the mathematical result of the operation, it returns false. Otherwise, it returns true. In this case, the value assigned to *result is the mathematical result of the operation wrapped around to the width of *result.

## Declarations
```cpp
#define ckd_mul( result, a, b ) /* implementation-defined */
// exposed interface:
bool ckd_mul( type1* result, type2 a, type3 b );
```
_(since C23)_

## Parameters
- `a, b`: integer values
- `result`: address of where result should be stored

## Return value
false if the value assigned to *result correctly represents the mathematical result of the multiplication, true otherwise.

## Example
This section is incompleteReason: no example

## See also
- [ckd_add](/c/numeric/ckd_add/)
- [ckd_sub](/c/numeric/ckd_sub/)
