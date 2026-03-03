---
title: "Function objects"
source_path: "cpp/utility/functional"
---

A function object is any object for which the function call operator is defined. C++ provides many built-in function objects as well as support for creation and manipulation of new function objects.

## Declarations
```cpp
template< class Fn, class... Args >
concept /*callable*/ =
requires (Fn&& fn, Args&&... args) {
std::forward<Fn>(fn)(std::forward<Args>(args)...);
};
```
_(exposition only*)_

```cpp
template< class Fn, class... Args >
concept /*nothrow-callable*/ =
/*callable*/<Fn, Args...> &&
requires (Fn&& fn, Args&&... args) {
{ std::forward<Fn>(fn)(std::forward<Args>(args)...) } noexcept;
};
```
_(exposition only*)_

```cpp
template< class Fn, class... Args >
using /*call-result-t*/ = decltype(std::declval<Fn>()(std::declval<Args>()...));
```
_(exposition only*)_

```cpp
template< const auto& T >
using /*decayed-typeof*/ = decltype(auto(T));
```
_(exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 185 | C++98 | using function objects improved the program efficiency | removed the claim |
| LWG 660 | C++98 | function objects for bitwise operations are missing | added |
| LWG 2149 | C++98 | function objects taking one or two arguments were required toprovide nested types to denote the argument and result types | not required |
| LWG 2219 | C++11 | INVOKE did not handle std::reference_wrapper correctly | handles correctly |
| LWG 2420 | C++11 | INVOKE<R> did not discard the return value if R is void | discards the return value in this case |
| LWG 2926(P0604R0) | C++11 | the syntax of the INVOKE operation with a returntype R was INVOKE(f, t1, t2, ..., tN, R) | changed toINVOKE<R>(f, t1, t2, ..., tN) |
| LWG 3655 | C++11 | INVOKE did not handle unions correctlydue to the resolution of LWG issue 2219 | handles correctly |
