---
title: "Constant expressions"
source_path: "cpp/language/constant_expression"
category: "language"
---

Defines an [expression](/cpp/language/expressions/) that can be evaluated at compile time.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_constexpr_in_decltype
201711L
(C++20)(DR11)
Generation of function and variable definitions when needed for constant evaluation
__cpp_constexpr_dynamic_alloc
201907L
(C++20)
Operations for dynamic storage duration in constexpr functions
__cpp_constexpr
202306L
(C++26)
constexpr cast from void*: towards constexpr type-erasure
202406L
(C++26)
constexpr placement new and new[]
__cpp_constexpr_exceptions
202411L
(C++26)
constexpr exceptions

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 94 | C++98 | arithmetic constant expressions could notinvolve variables and static data members | they can |
| CWG 366 | C++98 | expressions involving string literalscould be integral constant expressions | they are not |
| CWG 457 | C++98 | expressions involving volatile variablescould be integral constant expressions | they are not |
| CWG 1293 | C++11 | it was unclear whether string literalsare usable in constant expressions | they are usable |
| CWG 1311 | C++11 | volatile glvalues could be used in constant expressions | prohibited |
| CWG 1312 | C++11 | reinterpret_cast is prohibited in constant expressions,but casting to and from void* could achieve the same effect | prohibited conversionsfrom type cv void* toa pointer-to-object type |
| CWG 1313 | C++11 | undefined behavior was permitted;all pointer subtraction was prohibited | UB prohibited; same-arraypointer subtraction OK |
| CWG 1405 | C++11 | for objects that are usable in constant expressions,their mutable subobjects were also usable | they are not usable |
| CWG 1454 | C++11 | passing constants through constexprfunctions via references was not allowed | allowed |
| CWG 1455 | C++11 | converted constant expressions could only be prvalues | can be lvalues |
| CWG 1456 | C++11 | an address constant expression could notdesignate the address one past the end of an array | allowed |
| CWG 1535 | C++11 | a typeid expression whose operand is of apolymorphic class type was not a core constantexpression even if no runtime check is involved | the operand constraintis limited to glvalues ofpolymorphic class types |
| CWG 1581 | C++11 | functions needed for constant evaluation werenot required to be defined or instantiated | required |
| CWG 1613 | C++11 | core constant expressions could evaluate anyODR-used reference inside lambda expressions | some references couldnot be evaluated |
| CWG 1694 | C++11 | binding the value of a temporary to a static storageduration reference was a constant expression | it is not aconstant expression |
| CWG 1872 | C++11 | core constant expressions could invoke constexpr function templateinsantiations that do not satisfy the constexpr function requirements | such instantiationscannot be invoked |
| CWG 1952 | C++11 | standard library undefined behaviorswere required to be diagnosed | unspecified whetherthey are diagnosed |
| CWG 2022 | C++98 | the determination of constant expression mightdepend on whether copy elision is performed | assume that copy elisionis always performed |
| CWG 2126 | C++11 | constant initialized lifetime-extended temporaries of const-qualified literal types were not usable in constant expressions | usable |
| CWG 2129 | C++11 | integer literals were not constant expressions | they are |
| CWG 2167 | C++11 | non-member references local to an evaluationmade the evaluation non-constexpr | non-memberreferences allowed |
| CWG 2278 | C++98 | the resolution of CWG issue 2022 was not implementable | assume that copy elisionis never performed |
| CWG 2299 | C++14 | it was unclear whether macros in <cstdarg>can be used in constant evaluation | va_arg forbidden,va_start unspecified |
| CWG 2400 | C++11 | invoking a constexpr virtual function on an object not usablein constant expressions and whose lifetime began outside theexpression containing the invocation could be a constant expression | it is not aconstant expression |
| CWG 2490 | C++20 | (pseudo) destructor calls lackedrestrictions in constant evaluation | restriction added |
| CWG 2552 | C++23 | when evaluating a core constant expression, the controlflow could not pass through a declaration of a non-block variable | it can |
| CWG 2558 | C++11 | an indeterminate value could be a constant expression | not a constant expression |
| CWG 2647 | C++20 | variables of volatile-qualified types could be potentially-constant | they are not |
| CWG 2763 | C++11 | the violation of [[noreturn]] was not requiredto be detected during constant evaluation | required |
| CWG 2851 | C++11 | converted constant expressions didnot allow floating-point conversions | allow non-narrowingfloating-point conversions |
| CWG 2907 | C++11 | core constant expressions could not applylvalue-to-rvalue conversions to std::nullptr_t glvalues | can apply suchconversions |
| CWG 2909 | C++20 | a variable without an initializer could only beconstant-initialized if its default-initializationresults in some initialization being performed | can only be constant-initialized if its type isconst-default-initializable |
| CWG 2924 | C++11C++23 | it was unspecified whether an expression violatingthe constraints of [[noreturn]] (C++11) or[[assume]] (C++23) is a core constant expression | it isimplementation-defined |
| P2280R4 | C++11 | evaluating an expression containing an identifier expressionor *this that refers to an object or reference whose lifetimebegan outside this evaluation is not a constant expression | it can be aconstant expression |

## See also
- [constexpr specifier](/cpp/language/constexpr/)
- [is_literal_type](/cpp/types/is_literal_type/)
- [C documentation](/c/language/constant_expression/)
