---
title: "std::indirect_strict_weak_order"
source_path: "cpp/iterator/indirect_strict_weak_order"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The concept indirect_strict_weak_order specifies requirements for algorithms that call strict weak orders as their arguments. The key difference between this concept and [std::strict_weak_order](/cpp/concepts/strict_weak_order/) is that it is applied to the types that I1 and I2 references, rather than I1 and I2 themselves.

## Declarations
```cpp
template< class F, class I1, class I2 = I1 >
concept indirect_strict_weak_order =
std::indirectly_readable<I1> &&
std::indirectly_readable<I2> &&
std::copy_constructible<F> &&
std::strict_weak_order
<F&, /*indirect-value-t*/<I1>, /*indirect-value-t*/<I2>> &&
std::strict_weak_order
<F&, /*indirect-value-t*/<I1>, std::iter_reference_t<I2>> &&
std::strict_weak_order
<F&, std::iter_reference_t<I1>, /*indirect-value-t*/<I2>> &&
std::strict_weak_order
<F&, std::iter_reference_t<I1>, std::iter_reference_t<I2>>;
```
_(since C++20)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2609R3 | C++20 | some requirements were defined in terms ofstd::iter_value_t<I>& which mishandled projectionsresulting in incompatibility with strict weak order F& | defined in terms of/*indirect-value-t*/<I> tocorrectly handle such projections |
| P2997R1 | C++20 | indirect_strict_weak_order required F& to satisfystrict_weak_order with std::iter_common_reference_t<I> | does not require |
