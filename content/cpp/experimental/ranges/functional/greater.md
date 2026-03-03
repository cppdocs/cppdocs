---
title: "std::experimental::ranges::greater"
source_path: "cpp/experimental/ranges/functional/greater"
header: "<experimental/ranges/functional>"
category: "experimental"
---

Function object for performing comparisons. The primary template invokes operator< on const lvalues of type T with the argument order inverted. The specialization greater<void> deduces the parameter types of the function call operator from the arguments (but not the return type).

## Declarations
```cpp
template< class T = void >
requires StrictTotallyOrdered<T> ||
Same<T, void> ||
/* < on two const T lvalues invokes a built-in operator comparing pointers */
struct greater;
```
_(ranges TS)_

```cpp
template<>
struct greater<void>;
```
_(ranges TS)_

## Notes
Unlike [std::greater](/cpp/utility/functional/greater/), ranges::greater requires all six comparison operators <, <=, >, >=, == and != to be valid (via the [StrictTotallyOrdered](/cpp/experimental/ranges/concepts/stricttotallyordered/) and [StrictTotallyOrderedWith](/cpp/experimental/ranges/concepts/stricttotallyordered/) constraints) and is entirely defined in terms of ranges::less. However, the implementation is free to use operator> directly, because those concepts require the results of the comparison operators to be consistent.

## Example
This section is incompleteReason: no example

## See also
- [greater](/cpp/utility/functional/greater/)
