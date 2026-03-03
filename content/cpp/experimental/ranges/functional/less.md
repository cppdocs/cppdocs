---
title: "std::experimental::ranges::less"
source_path: "cpp/experimental/ranges/functional/less"
header: "<experimental/ranges/functional>"
category: "experimental"
---

Function object for performing comparisons. The primary template invokes operator< on const lvalues of type T. The specialization less<void> deduces the parameter types of the function call operator from the arguments (but not the return type).

## Declarations
```cpp
template< class T = void >
requires StrictTotallyOrdered<T> ||
Same<T, void> ||
/* < on two const T lvalues invokes a built-in operator comparing pointers */
struct less;
```
_(ranges TS)_

```cpp
template<>
struct less<void>;
```
_(ranges TS)_

## Notes
Unlike [std::less](/cpp/utility/functional/less/), ranges::less requires all six comparison operators <, <=, >, >=, == and != to be valid (via the [StrictTotallyOrdered](/cpp/experimental/ranges/concepts/stricttotallyordered/) and [StrictTotallyOrderedWith](/cpp/experimental/ranges/concepts/stricttotallyordered/) constraints).

## Example
This section is incompleteReason: no example

## See also
- [less](/cpp/utility/functional/less/)
