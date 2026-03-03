---
title: "std::indirectly_readable"
source_path: "cpp/iterator/indirectly_readable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The concept indirectly_readable is modeled by types that are readable by applying operator*, such as pointers, smart pointers, and input iterators.

## Declarations
```cpp
template< class In >
concept __IndirectlyReadableImpl =
requires(const In in) {
typename std::iter_value_t<In>;
typename std::iter_reference_t<In>;
typename std::iter_rvalue_reference_t<In>;
{ *in } -> std::same_as<std::iter_reference_t<In>>;
{ ranges::iter_move(in) } -> std::same_as<std::iter_rvalue_reference_t<In>>;
} &&
std::common_reference_with<
std::iter_reference_t<In>&&, std::iter_value_t<In>&
> &&
std::common_reference_with<
std::iter_reference_t<In>&&, std::iter_rvalue_reference_t<In>&&
> &&
std::common_reference_with<
std::iter_rvalue_reference_t<In>&&, const std::iter_value_t<In>&
>;
```
_(exposition only*)_

```cpp
template< class In >
concept indirectly_readable =
__IndirectlyReadableImpl<std::remove_cvref_t<In>>;
```
_(since C++20)_
