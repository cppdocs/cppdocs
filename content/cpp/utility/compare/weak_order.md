---
title: "std::weak_order"
source_path: "cpp/utility/compare/weak_order"
header: "<compare>"
category: "utility"
since: "C++20"
---

Compares two values using 3-way comparison and produces a result of type [std::weak_ordering](/cpp/utility/compare/weak_ordering/).

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ weak_order = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< class T, class U >
requires /* see below */
constexpr std::weak_ordering weak_order(T&& t, U&& u) noexcept(/* see below */);
```

## Example
This section is incompleteReason: no example

## See also
- [weak_ordering](/cpp/utility/compare/weak_ordering/)
- [strong_order](/cpp/utility/compare/strong_order/)
- [partial_order](/cpp/utility/compare/partial_order/)
- [compare_weak_order_fallback](/cpp/utility/compare/compare_weak_order_fallback/)
