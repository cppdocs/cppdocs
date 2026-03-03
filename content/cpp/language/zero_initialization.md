---
title: "Zero-initialization"
source_path: "cpp/language/zero_initialization"
category: "language"
---

Sets the initial value of an object to zero.

## Notes
As described in [non-local initialization](/cpp/language/initialization/#Non-local_variables), staticand thread-local(since C++11) variables that aren't constant-initialized are zero-initialized before any other initialization takes place. If the definition of a non-class non-local variable has no initializer, then default initialization does nothing, leaving the result of the earlier zero-initialization unmodified.

A zero-initialized pointer is the null pointer value of its type, even if the value of the null pointer is not integral zero.

## Example
```cpp
#include <iostream>
#include <string>
 
struct A
{
    int a, b, c;
};
 
double f[3];   // zero-initialized to three 0.0's
 
int* p;        // zero-initialized to null pointer value
               // (even if the value is not integral 0)
 
std::string s; // zero-initialized to indeterminate value, then
               // default-initialized to "" by the std::string default constructor
 
int main(int argc, char*[])
{
    delete p; // safe to delete a null pointer
 
    static int n = argc; // zero-initialized to 0 then copy-initialized to argc
    std::cout << "n = " << n << '\n';
 
    A a = A(); // the effect is same as: A a{}; or A a = {};
    std::cout << "a = {" << a.a << ' ' << a.b << ' ' << a.c << "}\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 277 | C++98 | pointers might be initialized with a non-constantexpression of value 0, which is not a null pointer constant | must initialize with an integralconstant expression of value 0 |
| CWG 694 | C++98 | zero-initialization for class types ignored padding | padding is initialized to zero bits |
| CWG 903 | C++98 | zero-initialization for scalar types set the initial value to the valueconverted from an integral constant expression with value 0 | the object is initialized to the valueconverted from the integer literal 0 |
| CWG 2026 | C++98 | zero-initialization was specified to alwaysoccur first, even before constant initialization | no zero-initialization ifconstant initialization applies |
| CWG 2196 | C++98 | zero-initialization for class types ignored base class subobjects | they are also zero-initialized |
| CWG 2253 | C++98 | it was unclear whether zero-initializationapplies to unnamed bit-fields | it applies (all padding bitsare initialized to zero bits) |

## See also
- [constructor](/cpp/language/initializer_list/)
- [copy assignment](/cpp/language/as_operator/)
- [default constructor](/cpp/language/default_constructor/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [copy initialization](/cpp/language/copy_initialization/)
- [default initialization](/cpp/language/default_initialization/)
- [direct initialization](/cpp/language/direct_initialization/)
- [list initialization](/cpp/language/list_initialization/)
- [value initialization](/cpp/language/value_initialization/)
- [move assignment](/cpp/language/move_operator/)
- [new](/cpp/language/new/)
