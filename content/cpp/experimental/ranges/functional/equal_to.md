---
title: "std::experimental::ranges::equal_to"
source_path: "cpp/experimental/ranges/functional/equal_to"
header: "<experimental/ranges/functional>"
category: "experimental"
---

Function object for performing comparisons. The primary template invokes operator == on const lvalues of type T. The specialization equal_to<void> deduces the parameter types of the function call operator from the arguments (but not the return type).

## Declarations
```cpp
template< class T = void >
requires EqualityComparable<T> ||
Same<T, void> ||
/* == on two const T lvalues invokes a built-in operator comparing pointers */
struct equal_to;
```
_(ranges TS)_

```cpp
template<>
struct equal_to<void>;
```
_(ranges TS)_

## Notes
Unlike [std::equal_to](/cpp/utility/functional/equal_to/), ranges::equal_to requires both == and != to be valid (via the [EqualityComparable](/cpp/experimental/ranges/concepts/equalitycomparable/) and [EqualityComparableWith](/cpp/experimental/ranges/concepts/equalitycomparable/) constraints).

## Example
This section is incompleteReason: no example

## See also
- [equal_to](/cpp/utility/functional/equal_to/)
