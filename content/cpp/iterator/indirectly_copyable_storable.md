---
title: "std::indirectly_copyable_storable"
source_path: "cpp/iterator/indirectly_copyable_storable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The indirectly_copyable_storable concept specifies the relationship between an [indirectly_readable](/cpp/iterator/indirectly_readable/) type and an [indirectly_writable](/cpp/iterator/indirectly_writable/) type. In addition to [indirectly_copyable](/cpp/iterator/indirectly_copyable/), this concept specifies that the copy from the indirectly_readable type can be performed via an intermediate object.

## Declarations
```cpp
template< class In, class Out >
concept indirectly_copyable_storable =
std::indirectly_copyable<In, Out> &&
std::indirectly_writable<Out, std::iter_value_t<In>&> &&
std::indirectly_writable<Out, const std::iter_value_t<In>&> &&
std::indirectly_writable<Out, std::iter_value_t<In>&&> &&
std::indirectly_writable<Out, const std::iter_value_t<In>&&> &&
std::copyable<std::iter_value_t<In>> &&
std::constructible_from<std::iter_value_t<In>, std::iter_reference_t<In>> &&
std::assignable_from<std::iter_value_t<In>&, std::iter_reference_t<In>>;
```
_(since C++20)_

## See also
- [indirectly_copyable](/cpp/iterator/indirectly_copyable/)
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [indirectly_writable](/cpp/iterator/indirectly_writable/)
- [indirectly_movable_storable](/cpp/iterator/indirectly_movable_storable/)
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [indirectly_writable](/cpp/iterator/indirectly_writable/)
