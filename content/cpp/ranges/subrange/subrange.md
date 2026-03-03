---
title: "std::ranges::subrange<I,S,K>::subrange"
source_path: "cpp/ranges/subrange/subrange"
category: "ranges"
since: "C++20"
---

Constructs a subrange.

## Declarations
```cpp
subrange() requires std::default_initializable<I> = default;
```
_(since C++20)_

```cpp
constexpr subrange( /*convertible-to-non-slicing*/<I> auto i, S s )
requires (!/*StoreSize*/);
```
_(since C++20)_

```cpp
constexpr subrange( /*convertible-to-non-slicing*/<I> auto i, S s,
/*make-unsigned-like-t*/<std::iter_difference_t<I>> n )
requires (K == ranges::subrange_kind::sized);
```
_(since C++20)_

```cpp
template< /*different-from*/<subrange> R >
requires ranges::borrowed_range<R> &&
/*convertible-to-non-slicing*/<ranges::iterator_t<R>, I> &&
std::convertible_to<ranges::sentinel_t<R>, S>
constexpr subrange( R&& r )
requires (!/*StoreSize*/ || ranges::sized_range<R>);
```
_(since C++20)_

```cpp
template< ranges::borrowed_range R>
requires /*convertible-to-non-slicing*/<ranges::iterator_t<R>, I> &&
std::convertible_to<ranges::sentinel_t<R>, S>
constexpr subrange( R&& r,
/*make-unsigned-like-t*/<std::iter_difference_t<I>> n )
requires (K == ranges::subrange_kind::sized)
: subrange{ranges::begin(r), ranges::end(r), n} {}
```
_(since C++20)_

## Parameters
- `i`: iterator that denotes the beginning of the range
- `s`: sentinel that denotes the end of the range
- `r`: range
- `n`: size hint, must be equal to the size of the range

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2393R1 | C++20 | for overload (4), size_ might be initialized with ranges::size(r), but it isnot always implicitly convertible to the corresponding unsigned-integer-like type | made theconversion explicit |
