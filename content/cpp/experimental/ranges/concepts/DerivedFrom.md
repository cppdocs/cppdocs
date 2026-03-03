---
title: "std::experimental::ranges::DerivedFrom"
source_path: "cpp/experimental/ranges/concepts/DerivedFrom"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept DerivedFrom<T, U> is satisfied if and only if U is a class type that is either T or a public and unambiguous base of T.

## Declarations
```cpp
template< class T, class U >
concept bool DerivedFrom =
std::is_base_of<U, T>::value &&
std::is_convertible<std::remove_cv_t<T>*, std::remove_cv_t<U>*>::value;
```
_(ranges TS)_

## See also
- [is_base_of](/cpp/types/is_base_of/)
- [is_convertibleis_nothrow_convertible](/cpp/types/is_convertible/)
