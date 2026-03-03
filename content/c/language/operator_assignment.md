---
title: "Assignment operators"
source_path: "c/language/operator_assignment"
category: "c"
---

Assignment and compound assignment operators are binary operators that modify the variable to their left using the value to their right.

## Notes
If rhs and lhs overlap in memory (e.g. they are members of the same union), the behavior is undefined unless the overlap is exact and the types are [compatible](/c/language/compatible_type/#Compatible_types).

Although arrays are not assignable, an array wrapped in a struct is assignable to another object of the same (or compatible) struct type.

The side effect of updating lhs is [sequenced after](/c/language/eval_order/) the value computations, but not the side effects of lhs and rhs themselves and the evaluations of the operands are, as usual, unsequenced relative to each other (so the expressions such as i=++i; are undefined)

Assignment strips extra range and precision from floating-point expressions (see [FLT_EVAL_METHOD](/c/types/limits/FLT_EVAL_METHOD/)).

In C++, assignment operators are lvalue expressions, not so in C.

Output:
