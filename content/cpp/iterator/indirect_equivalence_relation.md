---
title: "std::indirect_equivalence_relation"
source_path: "cpp/iterator/indirect_equivalence_relation"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The concept indirect_equivalence_relation specifies requirements for algorithms that call equivalence relations as their arguments. The key difference between this concept and [std::equivalence_relation](/cpp/concepts/equivalence_relation/) is that it is applied to the types that I1 and I2 references, rather than I1 and I2 themselves.

## Declarations
```cpp
template< class F, class I1, class I2 = I1 >
concept indirect_equivalence_relation =
std::indirectly_readable<I1> &&
std::indirectly_readable<I2> &&
std::copy_constructible<F> &&
std::equivalence_relation
<F&, /*indirect-value-t*/<I1>, /*indirect-value-t*/<I2>> &&
std::equivalence_relation
<F&, /*indirect-value-t*/<I1>, std::iter_reference_t<I2>> &&
std::equivalence_relation
<F&, std::iter_reference_t<I1>, /*indirect-value-t*/<I2>> &&
std::equivalence_relation
<F&, std::iter_reference_t<I1>, std::iter_reference_t<I2>>;
```
_(since C++20)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2609R3 | C++20 | some requirements were defined in terms of std::iter_value_t<I>&which mishandled projections resulting in incompatibility with equivalence relation F& | defined in terms of /*indirect-value-t*/<I>to correctly handle such projections |
| P2997R1 | C++20 | indirect_equivalence_relation required F& to satisfy equivalence_relation withstd::iter_common_reference_t<I> | does not require |
