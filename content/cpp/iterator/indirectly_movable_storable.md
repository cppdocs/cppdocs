---
title: "std::indirectly_movable_storable"
source_path: "cpp/iterator/indirectly_movable_storable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The indirectly_movable_storable concept specifies the relationship between an [indirectly_readable](/cpp/iterator/indirectly_readable/) type and an [indirectly_writable](/cpp/iterator/indirectly_writable/) type. In addition to [indirectly_movable](/cpp/iterator/indirectly_movable/), this concept specifies that the move from the indirectly_readable type can be performed via an intermediate object.

## Declarations
```cpp
template< class In, class Out >
concept indirectly_movable_storable =
std::indirectly_movable<In, Out> &&
std::indirectly_writable<Out, std::iter_value_t<In>> &&
std::movable<std::iter_value_t<In>> &&
std::constructible_from<std::iter_value_t<In>, std::iter_rvalue_reference_t<In>> &&
std::assignable_from<std::iter_value_t<In>&, std::iter_rvalue_reference_t<In>>;
```
_(since C++20)_

## See also
- [indirectly_movable](/cpp/iterator/indirectly_movable/)
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [indirectly_writable](/cpp/iterator/indirectly_writable/)
- [indirectly_copyable_storable](/cpp/iterator/indirectly_copyable_storable/)
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [indirectly_writable](/cpp/iterator/indirectly_writable/)
