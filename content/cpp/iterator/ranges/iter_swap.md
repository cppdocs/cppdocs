---
title: "std::ranges::iter_swap"
source_path: "cpp/iterator/ranges/iter_swap"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Swaps values denoted by two iterators.

## Declarations
```cpp
namespace ranges {
inline namespace /* unspecified */ {
inline constexpr /* unspecified */
iter_swap = /* unspecified */;
}
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class I1, class I2 >
constexpr void iter_swap( I1&& i1, I2&& i2 ) noexcept(/* see below */);
```
_(since C++20)_

```cpp
Helper function
```

```cpp
template< class X, class Y >
constexpr std::iter_value_t<X>
iter-exchange-move( X&& x, Y&& y )
noexcept(noexcept(std::iter_value_t<X>(std::ranges::iter_move(x))) &&
noexcept(*x = std::ranges::iter_move(y)));
```
_(exposition only*)_

## Example
This section is incompleteReason: no example

## See also
- [iter_swap](/cpp/iterator/reverse_iterator/iter_swap/)
- [iter_swap](/cpp/iterator/move_iterator/iter_swap/)
- [iter_swap](/cpp/algorithm/iter_swap/)
