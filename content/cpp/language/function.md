---
title: "Function declaration"
source_path: "cpp/language/function"
category: "language"
---

A function declaration introduces the function name and its type. A function definition associates the function name/type with the function body.

## Notes
In case of ambiguity between a variable declaration using the direct-initialization syntax and a function declaration, the compiler always chooses function declaration; see [direct-initialization](/cpp/language/direct_initialization/#Notes).

## Example
```cpp
#include <iostream>
#include <string>
 
// simple function with a default argument, returning nothing
void f0(const std::string& arg = "world!")
{
    std::cout << "Hello, " << arg << '\n';
}
 
// the declaration is in namespace (file) scope
// (the definition is provided later)
int f1();
 
// function returning a pointer to f0, pre-C++11 style
void (*fp03())(const std::string&)
{
    return f0;
}
 
// function returning a pointer to f0, with C++11 trailing return type
auto fp11() -> void(*)(const std::string&)
{
    return f0;
}
 
int main()
{
    f0();
    fp03()("test!");
    fp11()("again!");
    int f2(std::string) noexcept; // declaration in function scope
    std::cout << "f2(\"bad\"): " << f2("bad") << '\n';
    std::cout << "f2(\"42\"): " << f2("42") << '\n';
}
 
// simple non-member function returning int
int f1()
{
    return 007;
}
 
// function with an exception specification and a function try block
int f2(std::string str) noexcept
try
{
    return std::stoi(str);
}
catch (const std::exception& e)
{
    std::cerr << "stoi() failed!\n";
    return 0;
}
 
// deleted function, an attempt to call it results in a compilation error
void bar() = delete
#   if __cpp_deleted_function
    ("reason")
#   endif
;
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 135 | C++98 | member functions defined in classcould not have a parameter of or returnits own class because it is incomplete | allowed |
| CWG 332 | C++98 | a parameter could have cv-qualified void type | prohibited |
| CWG 393 | C++98 | types that include pointers/references toarray of unknown bound could not be parameters | such types are allowed |
| CWG 452 | C++98 | member initializer list was not a part of function body | it is |
| CWG 577 | C++98 | dependent type void could be used todeclare a function taking no parameters | only non-dependentvoid is allowed |
| CWG 1327 | C++11 | defaulted or deleted functions could notbe specified with override or final | allowed |
| CWG 1355 | C++11 | only special member functions could be user-provided | extended to all functions |
| CWG 1394 | C++11 | deleted functions could not have any parameter ofan incomplete type or return an incomplete type | incomplete type allowed |
| CWG 1824 | C++98 | the completeness check on parameter type andreturn type of a function definition could be madeoutside the context of the function definition | only check in thecontext of thefunction definition |
| CWG 1877 | C++14 | return type deduction treated return; as return void(); | simply deduce the returntype as void in this case |
| CWG 2015 | C++11 | the implicit odr-use of a deletedvirtual function was ill-formed | such odr-uses are exemptfrom the use prohibition |
| CWG 2044 | C++14 | return type deduction on functions returning voidwould fail if the declared return type is decltype(auto) | updated the deductionrule to handle this case |
| CWG 2081 | C++14 | function redeclarations could use return typededuction even if the initial declaration does not | not allowed |
| CWG 2144 | C++11 | {} could be a function body or an initializer at the same place | differentiated by the typeof the declarator identifier |
| CWG 2145 | C++98 | the declarator in function definition could not be parenthesized | allowed |
| CWG 2259 | C++11 | the ambiguity resolution rule regarding parenthesizedtype names did not cover lambda expressions | covered |
| CWG 2430 | C++98 | in the definition of a member function in a class definition,the type of that class could not be the return type orparameter type due to the resolution of CWG issue 1824 | only check in thefunction body |
| CWG 2760 | C++98 | the function body of a constructor did not include the initializationsnot specified in the constructor's regular function body | also includes theseinitializations |
| CWG 2831 | C++20 | a function definition with a requires-clausecould define a non-templated function | prohibited |
| CWG 2846 | C++23 | explicit object member functions could not have out-of-class definitions | allowed |
| CWG 2915 | C++23 | unnamed explicit object parameters could have type void | prohibited |

## See also
- [C documentation](/c/language/function_declaration/)
