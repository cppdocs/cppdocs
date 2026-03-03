---
title: "std::bind"
source_path: "cpp/utility/functional/bind"
header: "<functional>"
category: "utility"
---

The function template std::bind generates a forwarding call wrapper for f. Calling this wrapper is equivalent to invoking f with some of its arguments [bound](#Bound_arguments) to args.

## Declarations
```cpp
template< class F, class... Args >
/* unspecified */ bind( F&& f, Args&&... args );
```
_(since C++11) (constexpr since C++20)_

```cpp
template< class R, class F, class... Args >
/* unspecified */ bind( F&& f, Args&&... args );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `f`: Callable object (function object, pointer to function, reference to function, pointer to member function, or pointer to data member) that will be bound to some arguments
- `args`: list of arguments to bind, with the unbound arguments replaced by the placeholders _1, _2, _3... of namespace std::placeholders

## Return value
A function object g of unspecified type T, for which [std::is_bind_expression](/cpp/utility/functional/is_bind_expression/)<T>::value is true. It has the following members:

## Notes
As described in [Callable](/cpp/named_req/callable/), when invoking a pointer to non-static member function or pointer to non-static data member, the first argument has to be a reference or pointer (including, possibly, smart pointer such as [std::shared_ptr](/cpp/memory/shared_ptr/) and [std::unique_ptr](/cpp/memory/unique_ptr/)) to an object whose member will be accessed.

The arguments to bind are copied or moved, and are never passed by reference unless wrapped in [std::ref](/cpp/utility/functional/ref/) or [std::cref](/cpp/utility/functional/ref/).

Duplicate placeholders in the same bind expression (multiple _1's for example) are allowed, but the results are only well defined if the corresponding argument (u1) is an lvalue or non-movable rvalue.

## Example
```cpp
#include <functional>
#include <iostream>
#include <memory>
#include <random>
 
void f(int n1, int n2, int n3, const int& n4, int n5)
{
    std::cout << n1 << ' ' << n2 << ' ' << n3 << ' ' << n4 << ' ' << n5 << '\n';
}
 
int g(int n1)
{
    return n1;
}
 
struct Foo
{
    void print_sum(int n1, int n2)
    {
        std::cout << n1 + n2 << '\n';
    }
 
    int data = 10;
};
 
int main()
{
    using namespace std::placeholders;  // for _1, _2, _3...
 
    std::cout << "1) argument reordering and pass-by-reference: ";
    int n = 7;
    // (_1 and _2 are from std::placeholders, and represent future
    // arguments that will be passed to f1)
    auto f1 = std::bind(f, _2, 42, _1, std::cref(n), n);
    n = 10;
    f1(1, 2, 1001); // 1 is bound by _1, 2 is bound by _2, 1001 is unused
                    // makes a call to f(2, 42, 1, n, 7)
 
    std::cout << "2) achieving the same effect using a lambda: ";
    n = 7;
    auto lambda = [&ncref = n, n](auto a, auto b, auto /*unused*/)
    {
        f(b, 42, a, ncref, n);
    };
    n = 10;
    lambda(1, 2, 1001); // same as a call to f1(1, 2, 1001)
 
    std::cout << "3) nested bind subexpressions share the placeholders: ";
    auto f2 = std::bind(f, _3, std::bind(g, _3), _3, 4, 5);
    f2(10, 11, 12); // makes a call to f(12, g(12), 12, 4, 5);
 
    std::cout << "4) bind a RNG with a distribution: ";
    std::default_random_engine e;
    std::uniform_int_distribution<> d(0, 10);
    auto rnd = std::bind(d, e); // a copy of e is stored in rnd
    for (int n = 0; n < 10; ++n)
        std::cout << rnd() << ' ';
    std::cout << '\n';
 
    std::cout << "5) bind to a pointer to member function: ";
    Foo foo;
    auto f3 = std::bind(&Foo::print_sum, &foo, 95, _1);
    f3(5);
 
    std::cout << "6) bind to a mem_fn that is a pointer to member function: ";
    auto ptr_to_print_sum = std::mem_fn(&Foo::print_sum);
    auto f4 = std::bind(ptr_to_print_sum, &foo, 95, _1);
    f4(5);
 
    std::cout << "7) bind to a pointer to data member: ";
    auto f5 = std::bind(&Foo::data, _1);
    std::cout << f5(foo) << '\n';
 
    std::cout << "8) bind to a mem_fn that is a pointer to data member: ";
    auto ptr_to_data = std::mem_fn(&Foo::data);
    auto f6 = std::bind(ptr_to_data, _1);
    std::cout << f6(foo) << '\n';
 
    std::cout << "9) use smart pointers to call members of the referenced objects: ";
    std::cout << f6(std::make_shared<Foo>(foo)) << ' '
              << f6(std::make_unique<Foo>(foo)) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2021 | C++11 | 1. the bounded arguments were not forwarded to fd2. in case 2, the type of V_i was std::result_of<T cv ﻿(Uj...)>::type | 1. forwarded2. changed to std::result_of<T cv ﻿&(Uj&&...)>::type&& |

## See also
- [bind_frontbind_back](/cpp/utility/functional/bind_front/)
- [_1, _2, _3, _4, ...](/cpp/utility/functional/placeholders/)
- [mem_fn](/cpp/utility/functional/mem_fn/)
