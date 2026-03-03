---
title: "Comparison operators"
source_path: "cpp/language/operator"
category: "language"
---

Compares the arguments.

## Declarations
```cpp
bool operator<(L, R);
```

```cpp
bool operator>(L, R);
```

```cpp
bool operator<=(L, R);
```

```cpp
bool operator>=(L, R);
```

```cpp
bool operator==(L, R);
```

```cpp
bool operator!=(L, R);
```

## Notes
Because comparison operators group left-to-right, the expression a < b < c is parsed (a < b) < c, and not a < (b < c) or (a < b) && (b < c).

A common requirement for [user-defined operator<](/cpp/language/operators/#Comparison_operators) is [strict weak ordering](https://en.wikipedia.org/wiki/Strict_weak_ordering). In particular, this is required by the standard algorithms and containers that work with [Compare](/cpp/named_req/compare/) types: [std::sort](/cpp/algorithm/sort/), [std::max_element](/cpp/algorithm/max_element/), [std::map](/cpp/container/map/), etc.

The [comparison result](/cpp/language/operator_comparison/#Member_layout) of pointers to different non-static data members of the same class implies that non-static data membersin each of the three [member access modes](/cpp/language/access/)(until C++23) are positioned in memory in order of declaration.

Although the results of comparing pointers of random origin (e.g. not all pointing to members of the same array) is unspecified, many implementations provide [strict total ordering](https://en.wikipedia.org/wiki/Total_order#Strict_total_order) of pointers, e.g. if they are implemented as addresses within continuous virtual address space. Those implementations that do not (e.g. where not all bits of the pointer are part of a memory address and have to be ignored for comparison, or an additional calculation is required or otherwise pointer and integer is not a 1 to 1 relationship), provide a specialization of [std::less](/cpp/utility/functional/less/) for pointers that has that guarantee. This makes it possible to use all pointers of random origin as keys in standard associative containers such as [std::set](/cpp/container/set/) or [std::map](/cpp/container/map/).

For the types that are both [EqualityComparable](/cpp/named_req/equalitycomparable/) and [LessThanComparable](/cpp/named_req/lessthancomparable/), the C++ standard library makes a distinction between equality, which is the value of the expression a == b and equivalence, which is the value of the expression !(a < b) && !(b < a).

Comparison between pointers and null pointer constants was removed by the resolution of [CWG issue 583](https://cplusplus.github.io/CWG/issues/583.html) included in [N3624](https://wg21.link/N3624):

Three-way comparison can be automatically generated for class types, see [default comparisons](/cpp/language/default_comparisons/).

If both of the operands are arrays, three-way comparison is ill-formed.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 583(N3624) | C++98 | all six comparison operators could be used tocompare a pointer with a null pointer constant | only equality operatorsare allowed |
| CWG 661 | C++98 | the actual semantics of arithmetic comparisons (e.g.whether 1 < 2 yields true or false) were unspecified | specification added |
| CWG 879 | C++98 | pointers to function types and pointersto void did not have built-in comparisons | added comparisonspecification for these pointers |
| CWG 1596 | C++98 | non-array objects were considered to belong to arrays withone element only for the purpose of pointer arithmetic | the rule is alsoapplied to comparison |
| CWG 1598 | C++98 | two pointers to members of classes that are different andneither is the base class of the other did not compare equaleven if the offsets of the pointed members can be the same | the result isunspecifiedin this case |
| CWG 1858 | C++98 | it was not clear whether two pointers to membersthat refer to different members of the same unioncompare equal as if they refer to the same member | they compareequal in this case |
| CWG 2419 | C++98 | a pointer to non-array object was only treated as apointer to the first element of an array with size 1in pointer comparison if the pointer is obtained by & | applies to all pointersto non-array objects |
| CWG 2526 | C++98 | the definition of relational comparison (>, >=, < and <=) ofpointers to void and function pointers were removed by N3624 | restored |
| CWG 2796 | C++17 | function pointer conversions were not performed on the convertedpointer operands during built-in pointer relational comparisons | performs theseconversions in this case |

## See also
- [Operator precedence](/cpp/language/operator_precedence/)
- [Operator overloading](/cpp/language/operators/)
- [Compare](/cpp/named_req/compare/)
- [assignment](/cpp/language/operator_assignment/)
- [incrementdecrement](/cpp/language/operator_incdec/)
- [arithmetic](/cpp/language/operator_arithmetic/)
- [logical](/cpp/language/operator_logical/)
- [memberaccess](/cpp/language/operator_member_access/)
- [other](/cpp/language/operator_other/)
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
- [C documentation](/c/language/operator_comparison/)
