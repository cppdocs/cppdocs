---
title: "std::is_function"
source_path: "cpp/types/is_function"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_function is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_function;
```
_(since C++11)_

## Notes
std::is_function can be implemented in much simpler ways. Implementations similar to the following one are used by new versions of [libc++](https://github.com/llvm-mirror/libcxx/blob/master/include/type_traits#L889), [libstdc++](https://github.com/gcc-mirror/gcc/blob/master/libstdc%2B%2B-v3/include/std/type_traits#L538) and [MS STL](https://github.com/microsoft/STL/pull/460):

The implementation shown below is for pedagogical purposes, since it exhibits the myriad kinds of function types.

## Example
```cpp
#include <functional>
#include <type_traits>
 
int f();
static_assert(std::is_function_v<decltype(f)>);
 
static_assert(std::is_function_v<int(int)>);
static_assert(!std::is_function_v<int>);
static_assert(!std::is_function_v<decltype([]{})>);
static_assert(!std::is_function_v<std::function<void()>>);
 
struct O { void operator()() {} };
static_assert(std::is_function_v<O()>);
 
struct A
{
    static int foo();
    int fun() const&;
};
static_assert(!std::is_function_v<A>);
static_assert(std::is_function_v<decltype(A::foo)>);
static_assert(!std::is_function_v<decltype(&A::fun)>);
 
template<typename>
struct PM_traits {};
template<class T, class U>
struct PM_traits<U T::*> { using member_type = U; };
 
int main()
{
    using T = PM_traits<decltype(&A::fun)>::member_type; // T is int() const&
    static_assert(std::is_function_v<T>);
}
```

## See also
- [is_invocableis_invocable_ris_nothrow_invocableis_nothrow_invocable_r](/cpp/types/is_invocable/)
- [std::invoke](/cpp/utility/functional/invoke/)
- [is_object](/cpp/types/is_object/)
- [is_class](/cpp/types/is_class/)
