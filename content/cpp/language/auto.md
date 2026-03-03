---
title: "Placeholder type specifiers (since C++11)"
source_path: "cpp/language/auto"
category: "language"
since: "C++11"
---

A placeholder type specifier designates a placeholder type that will be replaced later, typically by deduction from an [initializer](/cpp/language/initialization/).

## Notes
Until C++11, auto had the semantic of a [storage duration specifier](/cpp/language/storage_duration/).

A program that uses a placeholder type in a context not explicitly stated above is ill-formed.

If a declaration declares multiple entities, and the declaration specifier sequence uses a placeholder type, the program is ill-formed if any of the following conditions is satisfied:

The auto keyword may also be used in a nested name specifier. A nested name specifier of the form auto:: is a placeholder that is replaced by a class or enumeration type following the rules for [constrained type](/cpp/experimental/constraints/) placeholder deduction.

## Example
```cpp
#include <iostream>
#include <utility>
 
template<class T, class U>
auto add(T t, U u) { return t + u; } // the return type is the type of operator+(T, U)
 
// perfect forwarding of a function call must use decltype(auto)
// in case the function it calls returns by reference
template<class F, class... Args>
decltype(auto) PerfectForward(F fun, Args&&... args) 
{ 
    return fun(std::forward<Args>(args)...); 
}
 
template<auto n> // C++17 auto parameter declaration
auto f() -> std::pair<decltype(n), decltype(n)> // auto can't deduce from brace-init-list
{
    return {n, n};
}
 
int main()
{
    auto a = 1 + 2;          // type of a is int
    auto b = add(1, 1.2);    // type of b is double
    static_assert(std::is_same_v<decltype(a), int>);
    static_assert(std::is_same_v<decltype(b), double>);
 
    auto c0 = a;             // type of c0 is int, holding a copy of a
    decltype(auto) c1 = a;   // type of c1 is int, holding a copy of a
    decltype(auto) c2 = (a); // type of c2 is int&, an alias of a
    std::cout << "before modification through c2, a = " << a << '\n';
    ++c2;
    std::cout << " after modification through c2, a = " << a << '\n';
 
    auto [v, w] = f<0>(); //structured binding declaration
 
    auto d = {1, 2}; // OK: type of d is std::initializer_list<int>
    auto n = {5};    // OK: type of n is std::initializer_list<int>
//  auto e{1, 2};    // Error as of DR n3922, std::initializer_list<int> before
    auto m{5};       // OK: type of m is int as of DR n3922, initializer_list<int> before
//  decltype(auto) z = { 1, 2 } // Error: {1, 2} is not an expression
 
    // auto is commonly used for unnamed types such as the types of lambda expressions
    auto lambda = [](int x) { return x + 3; };
 
//  auto int x; // valid C++98, error as of C++11
//  auto x;     // valid C, error in C++
 
    [](...){}(c0, c1, v, w, d, n, m, lambda); // suppresses "unused variable" warnings
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1265 | C++11 | the auto specifier could be used to declare a function with a trailingreturn type and define a variable in one declaration statement | prohibited |
| CWG 1346 | C++11 | a parenthesized expression list could not be assigned to an auto variable | allowed |
| CWG 1347 | C++11 | a declaration with the auto specifier could define two variableswith types T and std::initializer_list<T> respectively | prohibited |
| CWG 1852 | C++14 | the auto specifier in decltype(auto) was also a placeholder | not a placeholderin this case |
| CWG 1892 | C++11 | the return type of a function pointer type-id could be auto | prohibited |
| CWG 2476 | C++11 | the resolution of CWG issue 1892 prohibited the deductionof the return type of function pointer variables from initializers | allowed |
