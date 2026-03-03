---
title: "std::function"
source_path: "cpp/utility/functional/function"
header: "<functional>"
category: "utility"
since: "C++11"
---

Class template std::function is a general-purpose polymorphic function wrapper. Instances of std::function can store, copy, and invoke any [CopyConstructible](/cpp/named_req/copyconstructible/) [Callable](/cpp/named_req/callable/) target -- functions (via pointers thereto), [lambda expressions](/cpp/language/lambda/), [bind expressions](/cpp/utility/functional/bind/), or other function objects, as well as pointers to member functions and pointers to data members.

## Declarations
```cpp
template< class >
class function; /* undefined */
```
_(since C++11)_

```cpp
template< class R, class... Args >
class function<R(Args...)>;
```
_(since C++11)_

## Notes
Care should be taken when a std::function, whose result type is a reference, is initialized from a lambda expression without a trailing-return-type. Due to the way auto deduction works, such lambda expression will always return a prvalue. Hence, the resulting reference will usually bind to a temporary whose lifetime ends when [std::function::operator()](/cpp/utility/functional/function/operator/) returns.

If a std::function returning a reference is initialized from a function or function object returning a prvalue (including a lambda expression without a trailing-return-type), the program is ill-formed because binding the returned reference to a temporary object is forbidden.

## Example
```cpp
#include <functional>
#include <iostream>
 
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
    // store a free function
    std::function<void(int)> f_display = print_num;
    f_display(-9);
 
    // store a lambda
    std::function<void()> f_display_42 = []() { print_num(42); };
    f_display_42();
 
    // store the result of a call to std::bind
    std::function<void()> f_display_31337 = std::bind(print_num, 31337);
    f_display_31337();
 
    // store a call to a member function
    std::function<void(const Foo&, int)> f_add_display = &Foo::print_add;
    const Foo foo(314159);
    f_add_display(foo, 1);
    f_add_display(314159, 1);
 
    // store a call to a data member accessor
    std::function<int(Foo const&)> f_num = &Foo::num_;
    std::cout << "num_: " << f_num(foo) << '\n';
 
    // store a call to a member function and object
    using std::placeholders::_1;
    std::function<void(int)> f_add_display2 = std::bind(&Foo::print_add, foo, _1);
    f_add_display2(2);
 
    // store a call to a member function and object ptr
    std::function<void(int)> f_add_display3 = std::bind(&Foo::print_add, &foo, _1);
    f_add_display3(3);
 
    // store a call to a function object
    std::function<void(int)> f_display_obj = PrintNum();
    f_display_obj(18);
 
    auto factorial = [](int n)
    {
        // store a lambda object to emulate "recursive lambda"; aware of extra overhead
        std::function<int(int)> fac = [&](int n) { return (n < 2) ? 1 : n * fac(n - 1); };
        // note that "auto fac = [&](int n) {...};" does not work in recursive calls
        return fac(n);
    };
    for (int i{5}; i != 8; ++i)
        std::cout << i << "! = " << factorial(i) << ";  ";
    std::cout << '\n';
}
```

## See also
- [move_only_function](/cpp/utility/functional/move_only_function/)
- [copyable_function](/cpp/utility/functional/copyable_function/)
- [function_ref](/cpp/utility/functional/function_ref/)
- [bad_function_call](/cpp/utility/functional/bad_function_call/)
- [mem_fn](/cpp/utility/functional/mem_fn/)
- [typeid](/cpp/language/typeid/)
- [std::type_info](/cpp/types/type_info/)
