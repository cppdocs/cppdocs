---
title: "Other operators"
source_path: "c/language/operator_other"
category: "c"
---

A collection of operators that do not fit into any of the other major categories.

## Notes
The evaluations of expression that designates the function to be called and all arguments are [unsequenced](/c/language/eval_order/) with respect to each other (but there is a sequence point before the body of the function begins executing)

Although function call is only defined for pointers to functions, it works with function designators due to the [function-to-pointer implicit conversion](/c/language/conversion/#Function_to_pointer_conversion).

Functions that ignore unused arguments, such as [printf](/c/io/fprintf/), must be called with a prototype in scope (the prototype of such functions necessarily uses the [trailing ellipsis](/c/language/variadic/) parameter) to avoid invoking undefined behavior.

The current standard wording of the semantics of preparing function parameters is defective, because it specifies that parameters are assigned from arguments while calling, which incorrectly rejects const-qualified parameter or member types, and inappropriately applies the semantics of volatile which is unimplementable for function parameters on many platforms. A post-C11 defect report [DR427](https://open-std.org/JTC1/SC22/WG14/www/docs/n2396.htm#dr_427) proposed change of such semantics from assignment to initialization, but was closed as not-a-defect.

A function call expression where expression consists entirely of an identifier and that identifier is undeclared acts as though the identifier is declared as

So the following complete program is valid C89:

## See also
- [Operator precedence](/c/language/operator_precedence/)
- [assignment](/c/language/operator_assignment/)
- [incrementdecrement](/c/language/operator_incdec/)
- [arithmetic](/c/language/operator_arithmetic/)
- [logical](/c/language/operator_logical/)
- [comparison](/c/language/operator_comparison/)
- [memberaccess](/c/language/operator_member_access/)
- [C++ documentation](/cpp/language/operator_other/)
