---
title: "std::indirectly_copyable"
source_path: "cpp/iterator/indirectly_copyable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The indirectly_copyable concept specifies the relationship between an [indirectly_readable](/cpp/iterator/indirectly_readable/) type and a type that is [indirectly_writable](/cpp/iterator/indirectly_writable/). The indirectly_writable type must be able to directly copy the object that the indirectly_readable type references.

## Declarations
```cpp
template< class In, class Out >
concept indirectly_copyable =
std::indirectly_readable<In> &&
std::indirectly_writable<Out, std::iter_reference_t<In>>;
```
_(since C++20)_

## See also
- [indirectly_movable](/cpp/iterator/indirectly_movable/)
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [indirectly_writable](/cpp/iterator/indirectly_writable/)
- [indirectly_copyable_storable](/cpp/iterator/indirectly_copyable_storable/)
- [indirectly_readable](/cpp/iterator/indirectly_readable/)
- [indirectly_writable](/cpp/iterator/indirectly_writable/)
