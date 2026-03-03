---
title: "Other operators"
source_path: "cpp/language/operator"
category: "language"
---

The function call operator provides function semantics for any object.

## Declarations
```cpp
LR operator?:(bool, L, R);
```

```cpp
P operator?:(bool, P, P);
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 446 | C++98 | it was unspecified whether a temporary is created for anlvalue-to-rvalue conversion on the conditional operator | always creates a temporary ifthe operator returns a class rvalue |
| CWG 462 | C++98 | if the second operand of a comma operator is a temporary,it was unspecified whether its lifetime will be extended whenthe result of the comma expression is bound to a reference | the result of the comma expressionis the temporary in this case(hence its lifetime is extended) |
| CWG 587 | C++98 | when the second and third operands of a conditionaloperator are lvalues of the same type except forcv-qualification, the result was an lvalue if theseoperands have class types or an rvalue otherwise | the result is alwaysan lvalue in this case |
| CWG 1029 | C++98 | the type of a destructor call was unspecified | specified as void |
| CWG 1550 | C++98 | parenthesized throw expressions were not allowed inconditional expressions if other operand is non-void | accepted |
| CWG 1560 | C++98 | void operand of conditional operators causedgratuitous lvalue-to-rvalue conversion on theother operand, always resulting in rvalue | a conditional expressionwith a void can be lvalue |
| CWG 1642 | C++98 | the expression function in a function callexpression could be a function pointer lvalue | not allowed |
| CWG 1805 | C++98 | when determining the target type for the implicit conversionsequence, the way to convert Y to Z was unclear | made clear |
| CWG 1895 | C++98C++11 | unclear if deleted (C++11) or inaccessible (C++98)conversion function prevents conversion inconditional expressions, and conversions from baseclass to derived class prvalue were not considered | handled likeoverload resolution |
| CWG 1932 | C++98 | same-type bit-fields were missing in conditional expressions | handled by underlying types |
| CWG 2226 | C++11 | when determining the target type of the otheroperand of a conditional operator, reference couldnot bind to an xvalue if that operand is an lvalue | allowed |
| CWG 2283 | C++17 | the type completeness requirement for function calloperator was accidently removed by P0135R1 | restored the requirement |
| CWG 2321 | C++98 | when determining the target type of the other operandof a conditional operator, a derived class type couldnot be converted to a less cv-qualified base class type | allowed to convert to the baseclass type with the cv-qualificationfrom the derived class operand |
| CWG 2715 | C++98 | the initialization and destruction of eachparameter would occur within the context ofthe calling function, which might not exist[1] | occurs within the context ofthe enclosing full-expression |
| CWG 2850 | C++98 | the destruction order of parameters was unclear | made clear |
| CWG 2865 | C++98 | if TX and TY are the same class type and TX ismore cv-qualified than TY, an implicit conversionsequence could still be formed from a prvalue Y | no conversion sequencewill be formed in this case |
| CWG 2906 | C++98 | lvalue-to-rvalue conversions were unconditionally appliedin the rvalue result case for the conditional operator | only applied in some cases |

## See also
- [Operator precedence](/cpp/language/operator_precedence/)
- [Operator overloading](/cpp/language/operators/)
- [assignment](/cpp/language/operator_assignment/)
- [incrementdecrement](/cpp/language/operator_incdec/)
- [arithmetic](/cpp/language/operator_arithmetic/)
- [logical](/cpp/language/operator_logical/)
- [comparison](/cpp/language/operator_comparison/)
- [memberaccess](/cpp/language/operator_member_access/)
- [static_cast](/cpp/language/static_cast/)
- [dynamic_cast](/cpp/language/dynamic_cast/)
- [const_cast](/cpp/language/const_cast/)
- [cv](/cpp/language/cv/)
- [reinterpret_cast](/cpp/language/reinterpret_cast/)
- [C-style cast](/cpp/language/explicit_cast/)
- [new](/cpp/language/new/)
- [delete](/cpp/language/delete/)
- [sizeof](/cpp/language/sizeof/)
- [sizeof...](/cpp/language/sizeof.../)
- [pack](/cpp/language/parameter_pack/)
- [typeid](/cpp/language/typeid/)
- [noexcept](/cpp/language/noexcept/)
- [alignof](/cpp/language/alignof/)
- [C documentation](/c/language/operator_other/)
