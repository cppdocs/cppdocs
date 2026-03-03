---
title: "std::experimental::ranges::prev"
source_path: "cpp/experimental/ranges/iterator/prev"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

Decrements the iterator i n times, or until bound is reached, whichever comes first, and returns the decremented iterator.

## Declarations
```cpp
namespace {
constexpr /* unspecified */ prev = /* unspecified */;
}
```
_(ranges TS) (customization point object)_

```cpp
Call signature
```

```cpp
template< Iterator I >
constexpr I prev( I i );
```

```cpp
template< Iterator I >
constexpr I prev( I i, ranges::difference_type_t<I> n );
```

```cpp
template< Iterator I >
constexpr I prev( I i, ranges::difference_type_t<I> n, I bound );
```

## Return value
The decremented iterator.

## Example
This section is incompleteReason: no example

## See also
- [prev](/cpp/iterator/prev/)
- [advance](/cpp/experimental/ranges/iterator/advance/)
- [next](/cpp/experimental/ranges/iterator/next/)
- [distance](/cpp/experimental/ranges/iterator/distance/)
