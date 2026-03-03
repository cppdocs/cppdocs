---
title: "Constructors and member initializer lists"
source_path: "cpp/language/initializer_list"
category: "language"
---

Constructors are non-static [member functions](/cpp/language/member_functions/) declared with a special declarator syntax, they are used to initialize objects of their class types.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_delegating_constructors
200604L
(C++11)
Delegating constructors

## Example
```cpp
#include <fstream>
#include <string>
#include <mutex>
 
struct Base
{
    int n;
};   
 
struct Class : public Base
{
    unsigned char x;
    unsigned char y;
    std::mutex m;
    std::lock_guard<std::mutex> lg;
    std::fstream f;
    std::string s;
 
    Class(int x) : Base{123}, // initialize base class
        x(x),     // x (member) is initialized with x (parameter)
        y{0},     // y initialized to 0
        f{"test.cc", std::ios::app}, // this takes place after m and lg are initialized
        s(__func__), // __func__ is available because init-list is a part of constructor
        lg(m),    // lg uses m, which is already initialized
        m{}       // m is initialized before lg even though it appears last here
    {}            // empty compound statement
 
    Class(double a) : y(a + 1),
        x(y), // x will be initialized before y, its value here is indeterminate
        lg(m)
    {} // base class initializer does not appear in the list, it is
       // default-initialized (not the same as if Base() were used, which is value-init)
 
    Class()
    try // function try block begins before the function body, which includes init list
      : Class(0.0) // delegate constructor
    {
        // ...
    }
    catch (...)
    {
        // exception occurred on initialization
    }
};
 
int main()
{
    Class c;
    Class c1(1);
    Class c2(0.1);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 194 | C++98 | the declarator syntax of constructor only allowedat most one function specifier (e.g. a constructorcannot be declared inline explicit) | multiple functionspecifiers allowed |
| CWG 257 | C++98 | it was unspecified whether an abstract class shouldprovide member initializers for its virtual base classes | specified as not requiredand such member initializersare ignored during execution |
| CWG 263 | C++98 | the declarator syntax of constructorprohibited constructors from being friends | allowed constructorsto be friends |
| CWG 1345 | C++98 | anonymous union members without defaultmember initializers were default-initialized | they are not initialized |
| CWG 1435 | C++98 | the meaning of “class name” in thedeclarator syntax of constructor was unclear | changed the syntax to a specializedfunction declarator syntax |
| CWG 1696 | C++98 | reference members could be initialized to temporaries(whose lifetime would end at the end of constructor) | such initializationis ill-formed |

## See also
- [copy elision](/cpp/language/copy_elision/)
- [converting constructor](/cpp/language/converting_constructor/)
- [copy assignment](/cpp/language/as_operator/)
- [copy constructor](/cpp/language/copy_constructor/)
- [default constructor](/cpp/language/default_constructor/)
- [destructor](/cpp/language/destructor/)
- [explicit](/cpp/language/explicit/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [copy initialization](/cpp/language/copy_initialization/)
- [default initialization](/cpp/language/default_initialization/)
- [direct initialization](/cpp/language/direct_initialization/)
- [list initialization](/cpp/language/list_initialization/)
- [reference initialization](/cpp/language/reference_initialization/)
- [value initialization](/cpp/language/value_initialization/)
- [zero initialization](/cpp/language/zero_initialization/)
- [move assignment](/cpp/language/move_operator/)
- [move constructor](/cpp/language/move_constructor/)
- [new](/cpp/language/new/)
