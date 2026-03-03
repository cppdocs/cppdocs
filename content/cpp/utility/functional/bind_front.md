---
title: "std::bind_front, std::bind_back"
source_path: "cpp/utility/functional/bind_front"
header: "<functional>"
category: "utility"
since: "C++20"
---

Function templates std::bind_front and std::bind_back generate a perfect forwarding call wrapper which allows to invoke the callable target with its (1,2) first or (3,4) last sizeof...(Args) parameters bound to args.

## Declarations
```cpp
std::bind_front
```

```cpp
template< class F, class... Args >
constexpr /* unspecified */ bind_front( F&& f, Args&&... args );
```
_(since C++20)_

```cpp
template< auto ConstFn, class... Args >
constexpr /* unspecified */ bind_front( Args&&... args );
```
_(since C++26)_

```cpp
std::bind_back
```

```cpp
template< class F, class... Args >
constexpr /* unspecified */ bind_back( F&& f, Args&&... args );
```
_(since C++23)_

```cpp
template< auto ConstFn, class... Args >
constexpr /* unspecified */ bind_back( Args&&... args );
```
_(since C++26)_

## Parameters
- `f`: Callable object (function object, pointer to function, reference to function, pointer to member function, or pointer to data member) that will be bound to some arguments
- `args`: list of the arguments to bind to the (1,2) first or (3,4) last sizeof...(Args) parameters of the callable target

## Return value
A function object (the call wrapper) of type T that is unspecified, except that the types of objects returned by two calls to std::bind_front or std::bind_back with the same arguments are the same.

## Notes
These function templates are intended to replace [std::bind](/cpp/utility/functional/bind/). Unlike std::bind, they do not support arbitrary argument rearrangement and have no special treatment for nested bind-expressions or [std::reference_wrapper](/cpp/utility/functional/reference_wrapper/)s. On the other hand, they pay attention to the value category of the call wrapper object and propagate exception specification of the underlying call operator.

As described in [std::invoke](/cpp/utility/functional/invoke/), when invoking a pointer to non-static member function or pointer to non-static data member, the first argument has to be a reference or pointer (including, possibly, smart pointer such as [std::shared_ptr](/cpp/memory/shared_ptr/) and [std::unique_ptr](/cpp/memory/unique_ptr/)) to an object whose member will be accessed.

The arguments to std::bind_front or std::bind_back are copied or moved, and are never passed by reference unless wrapped in [std::ref](/cpp/utility/functional/ref/) or [std::cref](/cpp/utility/functional/ref/).

Typically, binding arguments to a function or a member function using ([1](#Version_1)) std::bind_front and ([3](#Version_3)) std::bind_back requires storing a function pointer along with the arguments, even though the language knows precisely which function to call without a need to dereference the pointer. To guarantee "zero cost" in those cases, C++26 introduces the versions ([2,4](#Version_2)) (that accept the callable object as an argument for [non-type template parameter](/cpp/language/template_parameters/#Non-type_template_parameter)).

## Example
```cpp
#include <cassert>
#include <functional>
 
int minus(int a, int b)
{
    return a - b;
}
 
struct S
{
    int val;
    int minus(int arg) const noexcept { return val - arg; }
};
 
int main()
{
    auto fifty_minus = std::bind_front(minus, 50);
    assert(fifty_minus(3) == 47); // equivalent to: minus(50, 3) == 47
 
    auto member_minus = std::bind_front(&S::minus, S{50});
    assert(member_minus(3) == 47); //: S tmp{50}; tmp.minus(3) == 47
 
    // Noexcept-specification is preserved:
    static_assert(!noexcept(fifty_minus(3)));
    static_assert(noexcept(member_minus(3)));
 
    // Binding of a lambda:
    auto plus = [](int a, int b) { return a + b; };
    auto forty_plus = std::bind_front(plus, 40);
    assert(forty_plus(7) == 47); // equivalent to: plus(40, 7) == 47
 
#if __cpp_lib_bind_front >= 202306L
    auto fifty_minus_cpp26 = std::bind_front<minus>(50);
    assert(fifty_minus_cpp26(3) == 47);
 
    auto member_minus_cpp26 = std::bind_front<&S::minus>(S{50});
    assert(member_minus_cpp26(3) == 47);
 
    auto forty_plus_cpp26 = std::bind_front<plus>(40);
    assert(forty_plus(7) == 47);
#endif
 
#if __cpp_lib_bind_back >= 202202L
    auto madd = [](int a, int b, int c) { return a * b + c; };
    auto mul_plus_seven = std::bind_back(madd, 7);
    assert(mul_plus_seven(4, 10) == 47); //: madd(4, 10, 7) == 47
#endif
 
#if __cpp_lib_bind_back >= 202306L
    auto mul_plus_seven_cpp26 = std::bind_back<madd>(7);
    assert(mul_plus_seven_cpp26(4, 10) == 47);
#endif
}
```

## See also
- [bind](/cpp/utility/functional/bind/)
- [mem_fn](/cpp/utility/functional/mem_fn/)
