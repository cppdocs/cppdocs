---
title: "std::experimental::ranges::greater_equal"
source_path: "cpp/experimental/ranges/functional/greater_equal"
header: "<experimental/ranges/functional>"
category: "experimental"
---

Function object for performing comparisons. The primary template invokes operator< on const lvalues of type T and negates the result. The specialization greater_equal<void> deduces the parameter types of the function call operator from the arguments (but not the return type).

## Declarations
```cpp
template< class T = void >
requires StrictTotallyOrdered<T> ||
Same<T, void> ||
/* < on two const T lvalues invokes a built-in operator comparing pointers */
struct greater_equal;
```
_(ranges TS)_

```cpp
template<>
struct greater_equal<void>;
```
_(ranges TS)_

## Notes
Unlike [std::greater_equal](/cpp/utility/functional/greater_equal/), ranges::greater_equal requires all six comparison operators <, <=, >, >=, == and != to be valid (via the [StrictTotallyOrdered](/cpp/experimental/ranges/concepts/stricttotallyordered/) and [StrictTotallyOrderedWith](/cpp/experimental/ranges/concepts/stricttotallyordered/) constraints) and is entirely defined in terms of ranges::less. However, the implementation is free to use operator>= directly, because those concepts require the results of the comparison operators to be consistent.

## Example
This section is incompleteReason: no example

## See also
- [greater_equal](/cpp/utility/functional/greater_equal/)
