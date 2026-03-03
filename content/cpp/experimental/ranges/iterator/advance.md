---
title: "std::experimental::ranges::advance"
source_path: "cpp/experimental/ranges/iterator/advance"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

Advances the iterator i n times, or until bound is reached, whichever comes first.

## Declarations
```cpp
namespace {
constexpr /* unspecified */ advance = /* unspecified */;
}
```
_(ranges TS) (customization point object)_

```cpp
Call signature
```

```cpp
template< Iterator I >
constexpr void advance( I& i, ranges::difference_type_t<I> n );
```

```cpp
template< Iterator I, Sentinel<I> S >
constexpr void advance( I& i, S bound );
```

```cpp
template< Iterator I, Sentinel<I> S >
constexpr ranges::difference_type_t<I> advance( I& i, ranges::difference_type_t<I> n, S bound );
```

## Example
This section is incompleteReason: no example

## See also
- [advance](/cpp/iterator/advance/)
- [distance](/cpp/experimental/ranges/iterator/distance/)
- [next](/cpp/experimental/ranges/iterator/next/)
- [prev](/cpp/experimental/ranges/iterator/prev/)
