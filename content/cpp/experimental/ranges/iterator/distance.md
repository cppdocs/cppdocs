---
title: "std::experimental::ranges::distance"
source_path: "cpp/experimental/ranges/iterator/distance"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

Returns the distance between first and last, or between the beginning and the end of the range r.

## Declarations
```cpp
namespace {
constexpr /* unspecified */ distance = /* unspecified */;
}
```
_(ranges TS) (customization point object)_

```cpp
Call signature
```

```cpp
template< Iterator I, Sentinel<I> S >
constexpr ranges::difference_type_t<I> distance( I first, S last );
```

```cpp
template< Range R >
constexpr ranges::difference_type_t<ranges::iterator_t<R>> distance( R&& r );
```

```cpp
template< SizedRange R >
constexpr ranges::difference_type_t<ranges::iterator_t<R>> distance( R&& r );
```

## Return value
The distance between first and last, or between the beginning and the end of the range r.

## Example
This section is incompleteReason: no example

## See also
- [distance](/cpp/iterator/distance/)
- [advance](/cpp/experimental/ranges/iterator/advance/)
- [next](/cpp/experimental/ranges/iterator/next/)
- [prev](/cpp/experimental/ranges/iterator/prev/)
