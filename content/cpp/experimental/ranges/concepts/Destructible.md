---
title: "std::experimental::ranges::Destructible"
source_path: "cpp/experimental/ranges/concepts/Destructible"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Destructible specifies the concept of all types whose instances can safely be destroyed at the end of their lifetime (including reference types).

## Declarations
```cpp
template< class T >
concept bool Destructible = std::is_nothrow_destructible<T>::value;
```
_(ranges TS)_

## Notes
Unlike the [Destructible](/cpp/named_req/destructible/) named requirement in the main C++ standard, Destructible requires the destructor to be noexcept(true), not merely non-throwing when invoked, and allows reference types and array types.

## See also
- [is_destructibleis_trivially_destructibleis_nothrow_destructible](/cpp/types/is_destructible/)
