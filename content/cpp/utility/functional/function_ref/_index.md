---
title: "std::function_ref"
source_path: "cpp/utility/functional/function_ref"
header: "<functional>"
---

Class template std::function_ref is a non-owning function wrapper. std::function_ref objects can store and invoke reference to [Callable](/cpp/named_req/Callable/) target - functions, [lambda expressions](/cpp/language/lambda/), [bind expressions](/cpp/utility/functional/bind/), or other function objects, but not pointers to member functions and pointers to member objects. [std::nontype](/cpp/utility/nontype/) can be used to construct std::function_ref by passing function pointers, pointers to member functions, and pointers to member objects.

## Declarations
```cpp
template< class... >
class function_ref; // not defined
```
_(since C++26)_

```cpp
template< class R, class... Args >
class function_ref<R(Args...)>;
template< class R, class... Args >
class function_ref<R(Args...) noexcept>;
template< class R, class... Args >
class function_ref<R(Args...) const>;
template< class R, class... Args >
class function_ref<R(Args...) const noexcept>;
```
_(since C++26)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_function_ref
202306L
(C++26)
std::function_ref

## Example
This section is incompleteReason: example

## See also
- [function](/cpp/utility/functional/function/)
- [copyable_function](/cpp/utility/functional/copyable_function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [nontype nontype_t](/cpp/utility/nontype/)
