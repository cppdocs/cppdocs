---
title: "std::strong_order"
source_path: "cpp/utility/compare/strong_order"
header: "<compare>"
category: "utility"
since: "C++20"
---

Compares two values using 3-way comparison and produces a result of type [std::strong_ordering](/cpp/utility/compare/strong_ordering/).

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ strong_order = /* unspecified */;
}
```
_(since C++20)_

```cpp
Call signature
```

```cpp
template< class T, class U >
requires /* see below */
constexpr std::strong_ordering strong_order( T&& t, U&& u ) noexcept(/* see below */);
```

## Example
This section is incompleteReason: no example

## See also
- [strong_ordering](/cpp/utility/compare/strong_ordering/)
- [weak_order](/cpp/utility/compare/weak_order/)
- [partial_order](/cpp/utility/compare/partial_order/)
- [compare_strong_order_fallback](/cpp/utility/compare/compare_strong_order_fallback/)
