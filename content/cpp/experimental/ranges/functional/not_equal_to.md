---
title: "std::experimental::ranges::not_equal_to"
source_path: "cpp/experimental/ranges/functional/not_equal_to"
header: "<experimental/ranges/functional>"
category: "experimental"
---

Function object for performing comparisons. The primary template invokes operator == on const lvalues of type T and negates the result. The specialization not_equal_to<void> deduces the parameter types of the function call operator from the arguments (but not the return type).

## Declarations
```cpp
template< class T = void >
requires EqualityComparable<T> ||
Same<T, void> ||
/* == on two const T lvalues invokes a built-in operator comparing pointers */
struct not_equal_to;
```
_(ranges TS)_

```cpp
template<>
struct not_equal_to<void>;
```
_(ranges TS)_

## Notes
Unlike [std::not_equal_to](/cpp/utility/functional/not_equal_to/), ranges::not_equal_to requires both == and != to be valid (via the [EqualityComparable](/cpp/experimental/ranges/concepts/equalitycomparable/) and [EqualityComparableWith](/cpp/experimental/ranges/concepts/equalitycomparable/) constraints), and is entirely defined in terms of
ranges::equal_to. However, the implementation is free to use operator!= directly, because those concepts require the results of == and != to be consistent.

## Example
This section is incompleteReason: no example

## See also
- [not_equal_to](/cpp/utility/functional/not_equal_to/)
