---
title: "std::partial_order"
source_path: "cpp/utility/compare/partial_order"
header: "<compare>"
category: "utility"
since: "C++20"
---

Compares two values using 3-way comparison and produces a result of type [std::partial_ordering](/cpp/utility/compare/partial_ordering/).

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ partial_order = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< class T, class U >
requires /* see below */
constexpr std::partial_ordering
partial_order( T&& t, U&& u ) noexcept(/* see below */);
```

## Example
This section is incompleteReason: no example

## See also
- [partial_ordering](/cpp/utility/compare/partial_ordering/)
- [strong_order](/cpp/utility/compare/strong_order/)
- [weak_order](/cpp/utility/compare/weak_order/)
- [compare_partial_order_fallback](/cpp/utility/compare/compare_partial_order_fallback/)
