---
title: "std::experimental::ranges::next"
source_path: "cpp/experimental/ranges/iterator/next"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

Advances the iterator i n times, or until bound is reached, whichever comes first, and returns the advanced iterator.

## Declarations
```cpp
namespace {
constexpr /* unspecified */ next = /* unspecified */;
}
```
_(ranges TS) (customization point object)_

```cpp
Call signature
```

```cpp
template< Iterator I >
constexpr I next( I i );
```

```cpp
template< Iterator I >
constexpr I next( I i, ranges::difference_type_t<I> n );
```

```cpp
template< Iterator I, Sentinel<I> S >
constexpr I next( I i, S bound );
```

```cpp
template< Iterator I, Sentinel<I> S >
constexpr I next( I i, ranges::difference_type_t<I> n, S bound );
```

## Return value
The advanced iterator.

## Notes
Even though omitting n for overload (2) behaves as if n is 1, omitting n for overload (4) effectively behaves as if n is infinity (always advance to bound).

## Example
This section is incompleteReason: no example

## See also
- [next](/cpp/iterator/next/)
- [advance](/cpp/experimental/ranges/iterator/advance/)
- [prev](/cpp/experimental/ranges/iterator/prev/)
- [distance](/cpp/experimental/ranges/iterator/distance/)
