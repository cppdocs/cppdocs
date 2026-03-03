---
title: "Throwing exceptions"
source_path: "cpp/language/throw"
category: "language"
---

Throwing an [exception](/cpp/language/exceptions/) transfers control to a [handler](/cpp/language/catch/).

## Notes
When rethrowing exceptions, the second form must be used to avoid object slicing in the (typical) case where exception objects use inheritance:

The throw-expression is classified as [prvalue expression](/cpp/language/value_category/) of type void. Like any other expression, it may be a sub-expression in another expression, most commonly in the [conditional operator](/cpp/language/operator_other/#Conditional_operator):

## Example
```cpp
#include <iostream>
#include <stdexcept>
 
struct A
{
    int n;
 
    A(int n = 0): n(n) { std::cout << "A(" << n << ") constructed successfully\n"; }
    ~A() { std::cout << "A(" << n << ") destroyed\n"; }
};
 
int foo()
{
    throw std::runtime_error("error");
}
 
struct B
{
    A a1, a2, a3;
 
    B() try : a1(1), a2(foo()), a3(3)
    {
        std::cout << "B constructed successfully\n";
    }
    catch(...)
    {
        std::cout << "B::B() exiting with exception\n";
    }
 
    ~B() { std::cout << "B destroyed\n"; }
};
 
struct C : A, B
{
    C() try
    {
        std::cout << "C::C() completed successfully\n";
    }
    catch(...)
    {
        std::cout << "C::C() exiting with exception\n";
    }
 
    ~C() { std::cout << "C destroyed\n"; }
};
 
int main () try
{
    // creates the A base subobject
    // creates the a1 member of B
    // fails to create the a2 member of B
    // unwinding destroys the a1 member of B
    // unwinding destroys the A base subobject
    C c;
}
catch (const std::exception& e)
{
    std::cout << "main() failed to create C with: " << e.what();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 499 | C++98 | an array with unknown bound could not be thrown becauseits type is incomplete, but an exception object can becreated from the decayed pointer without any problem | apply the type completionrequirement to theexception object instead |
| CWG 668 | C++98 | std::terminate was not called if an exception is thrownfrom the destructor of a local non-automatic object | call std::terminatein this case |
| CWG 1863 | C++11 | copy constructor was not required for move-onlyexception objects when thrown, but copying allowed later | copy constructor required |
| CWG 1866 | C++98 | variant members were leaked on stack unwinding from constructor | variant members destroyed |
| CWG 2176 | C++98 | throw from a local variable destructorcould skip return value destructor | function return valueadded to unwinding |
| CWG 2699 | C++98 | throw "EX" would actually throw char* rather than const char* | corrected |
| CWG 2711 | C++98 | the source of the copy-initialization ofthe exception object was not specified | copy-initializedfrom expression |
| CWG 2775 | C++98 | the exception object copy-initialization requirement was unclear | made clear |
| CWG 2854 | C++98 | the storage duration of exception objects was unclear | made clear |
| P1825R0 | C++11 | implicit move from parameters was forbidden in throw | allowed |

## See also
- [copy elision](/cpp/language/copy_elision/)
- [try block](/cpp/language/try/)
- [handler](/cpp/language/catch/)
- [noexcept specifier](/cpp/language/noexcept_spec/)
- [Exception handling](/cpp/error/#Exception_handling)
- [dynamic exception specifications](/cpp/language/except_spec/)
