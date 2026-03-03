---
title: "std::experimental::ranges::swap"
source_path: "cpp/experimental/ranges/utility/swap"
header: "<experimental/ranges/utility>"
category: "experimental"
---

Exchanges the values referenced by t and u.

## Declarations
```cpp
namespace {
constexpr /* unspecified */ swap = /* unspecified */;
}
```
_(ranges TS) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T, class U >
requires /* see below */
void swap( T&& t, U&& u ) noexcept(/* see below */);
```

## Example
This section is incompleteReason: no example

## See also
- [swap](/cpp/utility/swap/)
