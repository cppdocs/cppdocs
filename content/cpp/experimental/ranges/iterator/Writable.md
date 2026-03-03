---
title: "std::experimental::ranges::Writable"
source_path: "cpp/experimental/ranges/iterator/Writable"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

The concept Writable<Out, T> specifies the requirements for writing a value whose type and value category are encoded by T into an iterator Out's referenced object.

## Declarations
```cpp
template< class Out, class T >
concept bool Writable =
requires(Out&& o, T&& t) {
*o = std::forward<T>(t);
*std::forward<Out>(o) = std::forward<T>(t);
const_cast<const ranges::reference_t<Out>&&>(*o) =
std::forward<T>(t);
const_cast<const ranges::reference_t<Out>&&>(*std::forward<Out>(o)) =
std::forward<T>(t);
};
/* none of the four expressions above are required to be equality-preserving */
```
_(ranges TS)_

## Notes
The only valid use of operator* is on the left side of an assignment expression. Assignment through the same value of a writable type may happen only once.

The required expressions with const_cast prevent [Readable](/cpp/experimental/ranges/iterator/readable/) objects with prvalue reference types from satisfying the syntactic requirements of Writable by accident, while permitting proxy references to continue to work as long as their constness is shallow. See [Ranges TS issue 381](https://github.com/ericniebler/stl2/issues/381).
