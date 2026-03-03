---
title: "std::indirectly_writable"
source_path: "cpp/iterator/indirectly_writable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The concept indirectly_writable<Out, T> specifies the requirements for writing a value whose type and value category are encoded by T into an iterator Out's referenced object.

## Declarations
```cpp
template< class Out, class T >
concept indirectly_writable =
requires(Out&& o, T&& t) {
*o = std::forward<T>(t);
*std::forward<Out>(o) = std::forward<T>(t);
const_cast<const std::iter_reference_t<Out>&&>(*o) = std::forward<T>(t);
const_cast<const std::iter_reference_t<Out>&&>(*std::forward<Out>(o)) =
std::forward<T>(t);
};
/* none of the four expressions above are required to be equality-preserving */
```
_(since C++20)_

## Notes
The only valid use of operator* is on the left side of an assignment expression. Assignment through the same value of an indirectly writable type may happen only once.

The required expressions with const_cast prevent [indirectly_readable](/cpp/iterator/indirectly_readable/) objects with prvalue reference types from satisfying the syntactic requirements of indirectly_writable by accident, while permitting proxy references to continue to work as long as their constness is shallow. See [Ranges TS issue 381](https://github.com/ericniebler/stl2/issues/381).
