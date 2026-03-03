---
title: "std::invoke, std::invoke_r"
source_path: "cpp/utility/functional/invoke"
header: "<functional>"
category: "utility"
since: "C++23"
---

1) Invoke the [Callable](/cpp/named_req/callable/) object f with the parameters args as by [INVOKE](/cpp/utility/functional/)([std::forward](/cpp/utility/forward/)<F>(f), [std::forward](/cpp/utility/forward/)<Args>(args)...). This overload participates in overload resolution only if [std::is_invocable_v](/cpp/types/is_invocable/)<F, Args...> is true.

## Declarations
```cpp
template< class F, class... Args >
std::invoke_result_t<F, Args...>
invoke( F&& f, Args&&... args ) noexcept(/* see below */);
```
_(since C++17) (constexpr since C++20)_

```cpp
template< class R, class F, class... Args >
constexpr R
invoke_r( F&& f, Args&&... args ) noexcept(/* see below */);
```
_(since C++23)_

## Parameters
- `f`: Callable object to be invoked
- `args`: arguments to pass to f

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_invoke
201411L
(C++17)
std::invoke, (1)
__cpp_lib_invoke_r
202106L
(C++23)
std::invoke_r, (2)

## Example
```cpp
#include <functional>
#include <iostream>
#include <type_traits>
 
struct Foo
{
    Foo(int num) : num_(num) {}
    void print_add(int i) const { std::cout << num_ + i << '\n'; }
    int num_;
};
 
void print_num(int i)
{
    std::cout << i << '\n';
}
 
struct PrintNum
{
    void operator()(int i) const
    {
        std::cout << i << '\n';
    }
};
 
int main()
{
    std::cout << "invoke a free function: ";
    std::invoke(print_num, -9);
 
    std::cout << "invoke a lambda: ";
    std::invoke([](){ print_num(42); });
 
    std::cout << "invoke a member function: ";
    const Foo foo(314159);
    std::invoke(&Foo::print_add, foo, 1);
 
    std::cout << "invoke (i.e., access) a data member num_: "
              << std::invoke(&Foo::num_, foo) << '\n';
 
    std::cout << "invoke a function object: ";
    std::invoke(PrintNum(), 18);
 
#if defined(__cpp_lib_invoke_r)
    auto add = [](int x, int y){ return x + y; };
    std::cout << "invoke a lambda converting result to float: ";
    auto ret = std::invoke_r<float>(add, 11, 22);
    static_assert(std::is_same<decltype(ret), float>());
    std::cout << std::fixed << ret << "\ninvoke print_num: ";
    std::invoke_r<void>(print_num, 44);
#endif
}
```

## See also
- [mem_fn](/cpp/utility/functional/mem_fn/)
- [result_ofinvoke_result](/cpp/types/result_of/)
- [is_invocableis_invocable_ris_nothrow_invocableis_nothrow_invocable_r](/cpp/types/is_invocable/)
- [apply](/cpp/utility/apply/)
