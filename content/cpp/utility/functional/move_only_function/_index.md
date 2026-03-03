---
title: "std::move_only_function"
source_path: "cpp/utility/functional/move_only_function"
header: "<functional>"
---

Class template std::move_only_function is a general-purpose polymorphic function wrapper. std::move_only_function objects can store and invoke any constructible (not required to be move constructible) [Callable](/cpp/named_req/Callable/) target — functions, [lambda expressions](/cpp/language/lambda/), [bind expressions](/cpp/utility/functional/bind/), or other function objects, as well as pointers to member functions and pointers to member objects.

## Declarations
```cpp
template< class... >
class move_only_function; // not defined
```
_(since C++23)_

```cpp
template< class R, class... Args >
class move_only_function<R(Args...)>;
template< class R, class... Args >
class move_only_function<R(Args...) noexcept>;
template< class R, class... Args >
class move_only_function<R(Args...) &>;
template< class R, class... Args >
class move_only_function<R(Args...) & noexcept>;
template< class R, class... Args >
class move_only_function<R(Args...) &&>;
template< class R, class... Args >
class move_only_function<R(Args...) && noexcept>;
template< class R, class... Args >
class move_only_function<R(Args...) const>;
template< class R, class... Args >
class move_only_function<R(Args...) const noexcept>;
template< class R, class... Args >
class move_only_function<R(Args...) const &>;
template< class R, class... Args >
class move_only_function<R(Args...) const & noexcept>;
template< class R, class... Args >
class move_only_function<R(Args...) const &&>;
template< class R, class... Args >
class move_only_function<R(Args...) const && noexcept>;
```
_(since C++23)_

## Notes
Implementations may store a callable object of small size within the std::move_only_function object. Such small object optimization is effectively required for function pointers and [std::reference_wrapper](/cpp/utility/functional/reference_wrapper/) specializations, and can only be applied to types T for which [std::is_nothrow_move_constructible_v](/cpp/types/is_move_constructible/)<T> is true.

If a std::move_only_function returning a reference is initialized from a function or function object returning a prvalue (including a lambda expression without a trailing-return-type), the program is ill-formed because binding the returned reference to a temporary object is forbidden. See also [std::function](/cpp/utility/functional/function/#Notes) Notes.

## Example
```cpp
#include <functional>
#include <future>
#include <iostream>
 
int main()
{
    std::packaged_task<double()> packaged_task([](){ return 3.14159; });
 
    std::future<double> future = packaged_task.get_future();
 
    auto lambda = [task = std::move(packaged_task)]() mutable { task(); };
 
//  std::function<void()> function = std::move(lambda); // Error
    std::move_only_function<void()> function = std::move(lambda); // OK
 
    function();
 
    std::cout << future.get();
}
```

## See also
- [function](/cpp/utility/functional/function/)
- [function_ref](/cpp/utility/functional/function_ref/)
- [copyable_function](/cpp/utility/functional/copyable_function/)
