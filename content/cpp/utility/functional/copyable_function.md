---
title: "std::copyable_function"
source_path: "cpp/utility/functional/copyable_function"
header: "<functional>"
category: "utility"
since: "C++26"
---

Class template std::copyable_function is a general-purpose polymorphic function wrapper. std::copyable_function objects can store and invoke any [CopyConstructible](/cpp/named_req/copyconstructible/) [Callable](/cpp/named_req/callable/) target — functions, [lambda expressions](/cpp/language/lambda/), [bind expressions](/cpp/utility/functional/bind/), or other function objects, as well as pointers to member functions and pointers to member objects.

## Declarations
```cpp
template< class... >
class copyable_function; // not defined
```
_(since C++26)_

```cpp
template< class R, class... Args >
class copyable_function<R(Args...)>;
template< class R, class... Args >
class copyable_function<R(Args...) noexcept>;
template< class R, class... Args >
class copyable_function<R(Args...) &>;
template< class R, class... Args >
class copyable_function<R(Args...) & noexcept>;
template< class R, class... Args >
class copyable_function<R(Args...) &&>;
template< class R, class... Args >
class copyable_function<R(Args...) && noexcept>;
template< class R, class... Args >
class copyable_function<R(Args...) const>;
template< class R, class... Args >
class copyable_function<R(Args...) const noexcept>;
template< class R, class... Args >
class copyable_function<R(Args...) const &>;
template< class R, class... Args >
class copyable_function<R(Args...) const & noexcept>;
template< class R, class... Args >
class copyable_function<R(Args...) const &&>;
template< class R, class... Args >
class copyable_function<R(Args...) const && noexcept>;
```
_(since C++26)_

## Notes
Implementations may store a callable object of small size within the std::copyable_function object. Such small object optimization is effectively required for function pointers and [std::reference_wrapper](/cpp/utility/functional/reference_wrapper/) specializations, and can only be applied to types T for which [std::is_nothrow_move_constructible_v](/cpp/types/is_move_constructible/)<T> is true.

## Example
This section is incompleteReason: no example

## See also
- [function](/cpp/utility/functional/function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [function_ref](/cpp/utility/functional/function_ref/)
