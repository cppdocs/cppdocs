---
title: "C++ named requirements: FunctionObject"
source_path: "cpp/named_req/FunctionObject"
category: "named_req"
---

A FunctionObject type is the type of an object that can be used on the left of the function call operator.

## Notes
Functions and references to functions are not function object types, but can be used where function object types are expected due to function-to-pointer [implicit conversion](/cpp/language/implicit_cast/).

## Example
```cpp
#include <functional>
#include <iostream>
 
void foo(int x) { std::cout << "foo(" << x << ")\n"; }
void bar(int x) { std::cout << "bar(" << x << ")\n"; }
 
int main()
{
    void(*fp)(int) = foo;
    fp(1); // calls foo using the pointer to function
 
    std::invoke(fp, 2); // all FunctionObject types are Callable
 
    auto fn = std::function(foo); // see also the rest of <functional>
    fn(3);
    fn.operator()(3); // the same effect as fn(3)
 
    struct S
    {
        void operator()(int x) const { std::cout << "S::operator(" << x << ")\n"; }
    } s;
    s(4); // calls s.operator()
    s.operator()(4); // the same as s(4)
 
    auto lam = [](int x) { std::cout << "lambda(" << x << ")\n"; };
    lam(5); // calls the lambda
    lam.operator()(5); // the same as lam(5)
 
    struct T
    {
        using FP = void (*)(int);
        operator FP() const { return bar; }
    } t;
    t(6); // t is converted to a function pointer
    static_cast<void (*)(int)>(t)(6); // the same as t(6)
    t.operator T::FP()(6); // the same as t(6) 
}
```

## See also
- [Callable](/cpp/named_req/callable/)
