---
title: "Lambda expressions (since C++11)"
source_path: "cpp/language/lambda"
category: "language"
since: "C++11"
---

Constructs a [closure](https://en.wikipedia.org/wiki/Closure_(computer_science)) (an unnamed function object capable of capturing variables in scope).

## Declarations
```cpp
ret operator()(params) { body }
```
_(static and const may be present, see below)_

```cpp
template<template-params>
ret operator()(params) { body }
```
_(since C++14) (generic lambda, static and const may be present, see below)_

## Notes
The rule for implicit lambda capture is slightly changed by defect report [P0588R1](https://wg21.link/P0588R1). As of 2023-10, some major implementations have not completely implemented the DR, and thus the old rule, which detects [odr-using](/cpp/language/definition/#ODR-use), is still used in some cases.

If a capture list has a capture-default and does not explicitly capture the enclosing object (as this or *this), or an automatic variable that is [odr-usable](/cpp/language/definition/#ODR-use) in the lambda body, or a [structured binding](/cpp/language/structured_binding/) whose corresponding variable has atomic storage duration(since C++20), it captures the entity implicitly if the entity is

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> c{1, 2, 3, 4, 5, 6, 7};
    int x = 5;
    c.erase(std::remove_if(c.begin(), c.end(), [x](int n) { return n < x; }), c.end());
 
    std::cout << "c: ";
    std::for_each(c.begin(), c.end(), [](int i) { std::cout << i << ' '; });
    std::cout << '\n';
 
    // the type of a closure cannot be named, but can be inferred with auto
    // since C++14, lambda could own default arguments
    auto func1 = [](int i = 6) { return i + 4; };
    std::cout << "func1: " << func1() << '\n';
 
    // like all callable objects, closures can be captured in std::function
    // (this may incur unnecessary overhead)
    std::function<int(int)> func2 = [](int i) { return i + 4; };
    std::cout << "func2: " << func2(6) << '\n';
 
    constexpr int fib_max {8};
    std::cout << "Emulate `recursive lambda` calls:\nFibonacci numbers: ";
    auto nth_fibonacci = [](int n)
    {
        std::function<int(int, int, int)> fib = [&](int n, int a, int b)
        {
            return n ? fib(n - 1, a + b, a) : b;
        };
        return fib(n, 0, 1);
    };
 
    for (int i{1}; i <= fib_max; ++i)
        std::cout << nth_fibonacci(i) << (i < fib_max ? ", " : "\n");
 
    std::cout << "Alternative approach to lambda recursion:\nFibonacci numbers: ";
    auto nth_fibonacci2 = [](auto self, int n, int a = 0, int b = 1) -> int
    {
        return n ? self(self, n - 1, a + b, a) : b;
    };
 
    for (int i{1}; i <= fib_max; ++i)
        std::cout << nth_fibonacci2(nth_fibonacci2, i) << (i < fib_max ? ", " : "\n");
 
#ifdef __cpp_explicit_this_parameter
    std::cout << "C++23 approach to lambda recursion:\n";
    auto nth_fibonacci3 = [](this auto self, int n, int a = 0, int b = 1) -> int
    {
         return n ? self(n - 1, a + b, a) : b;
    };
 
    for (int i{1}; i <= fib_max; ++i)
        std::cout << nth_fibonacci3(i) << (i < fib_max ? ", " : "\n");
#endif
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 974 | C++11 | default argument was not allowed in theparameter list of a lambda expression | allowed |
| CWG 1048(N3638) | C++11 | the return type could only be deduced for lambdabodies containing only one return statement | improved the returntype deduction |
| CWG 1249 | C++11 | it is not clear that whether the captured member of theenclosing non-mutable lambda is considered const or not | considered const |
| CWG 1557 | C++11 | the language linkage of the returned function type ofthe closure type's conversion function was not specified | it has C++language linkage |
| CWG 1607 | C++11 | lambda expressions could appear infunction and function template signatures | not allowed |
| CWG 1612 | C++11 | members of anonymous unions could be captured | not allowed |
| CWG 1722 | C++11 | the conversion function for capture-less lambdashad unspecified exception specification | conversion functionis noexcept |
| CWG 1772 | C++11 | the semantic of __func__ in lambda body was not clear | it refers to the closureclass's operator() |
| CWG 1780 | C++14 | it was unclear whether the members of the closure types of genericlambdas can be explicitly instantiated or explicitly specialized | neither is allowed |
| CWG 1891 | C++11 | closure had a deleted default constructorand implicit copy/move constructors | no default and defaultedcopy/move constructors |
| CWG 1937 | C++11 | as for the effect of invoking the result of theconversion function, it was unspecified on whichobject calling its operator() has the same effect | on a default-constructedinstance of the closure type |
| CWG 1973 | C++11 | the parameter list of the closure type's operator()could refer to the parameter list given in trailing-type | can only referto params |
| CWG 2011 | C++11 | for a reference captured by reference, it was unspecifiedwhich entity the identifier of the capture refers to | it refers to the originallyreferenced entity |
| CWG 2095 | C++11 | the behavior of capturing rvalue referencesto functions by copy was not clear | made clear |
| CWG 2211 | C++11 | the behavior was unspecified if a capturehas the same name as a parameter | the program is ill-formed in this case |
| CWG 2358 | C++14 | lambda expressions appearing in default arguments hadto be capture-less even if all captures are initialized withexpressions which can appear in default arguments | allow such lambdaexpressions with captures |
| CWG 2509 | C++17 | each specifier could have multipleoccurrences in the specifier sequence | each specifier can onlyappear at most once inthe specifier sequence |
| CWG 2561 | C++23 | a lambdas with explicit object parameter could have aconversion function to an undesired function pointer type | it does not have sucha conversion funtion |
| CWG 2881 | C++23 | operator() with explicit parameter could be instantiated fora derived class when the inheritance was not public or ambiguous | made ill-formed |
| P0588R1 | C++11 | the rule for implicit lambda capture detected odr-use | the detection is simplified |

## See also
- [auto specifier](/cpp/language/auto/)
- [function](/cpp/utility/functional/function/)
- [move_only_function](/cpp/utility/functional/move_only_function/)
