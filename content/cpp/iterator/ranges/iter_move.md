---
title: "std::ranges::iter_move"
source_path: "cpp/iterator/ranges/iter_move"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

Obtains an rvalue reference or a prvalue temporary from a given iterator.

## Declarations
```cpp
inline namespace /* unspecified */ {
inline constexpr /* unspecified */ iter_move = /* unspecified */;
}
```
_(since C++20) (customization point object)_

```cpp
Call signature
```

```cpp
template< class T >
requires /* see below */
constexpr decltype(auto) iter_move( T&& t ) noexcept(/* see below */);
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## See also
- [iter_move](/cpp/iterator/reverse_iterator/iter_move/)
- [iter_move](/cpp/iterator/move_iterator/iter_move/)
