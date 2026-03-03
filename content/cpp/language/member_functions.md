---
title: "Non-static member functions"
source_path: "cpp/language/member_functions"
category: "language"
---

A non-static member function is a function that is declared in a [member specification](/cpp/language/class/) of a class without a [static](/cpp/language/static/) or [friend](/cpp/language/friend/) specifier
(see [static member functions](/cpp/language/static/#Static_member_functions) and [friend declaration](/cpp/language/friend/) for the effect of those keywords).

## Notes
Feature-test macro
Value
Std
Feature
__cpp_ref_qualifiers
200710L
(C++11)
ref-qualifiers
__cpp_explicit_this_parameter
202110L
(C++23)
explicit object parameter (deducing this)

## Example
```cpp
#include <exception>
#include <iostream>
#include <string>
#include <utility>
 
struct S
{
    int data;
 
    // simple converting constructor (declaration)
    S(int val);
 
    // simple explicit constructor (declaration)
    explicit S(std::string str);
 
    // const member function (definition)
    virtual int getData() const { return data; }
};
 
// definition of the constructor
S::S(int val) : data(val)
{
    std::cout << "ctor1 called, data = " << data << '\n';
}
 
// this constructor has a catch clause
S::S(std::string str) try : data(std::stoi(str))
{
    std::cout << "ctor2 called, data = " << data << '\n';
}
catch(const std::exception&)
{
    std::cout << "ctor2 failed, string was '" << str << "'\n";
    throw; // ctor's catch clause should always rethrow
}
 
struct D : S
{
    int data2;
    // constructor with a default argument
    D(int v1, int v2 = 11) : S(v1), data2(v2) {}
 
    // virtual member function
    int getData() const override { return data * data2; }
 
    // lvalue-only assignment operator
    D& operator=(D other) &
    {
        std::swap(other.data, data);
        std::swap(other.data2, data2);
        return *this;
    }
};
 
int main()
{
    D d1 = 1;
    S s2("2");
 
    try
    {
        S s3("not a number");
    }
    catch(const std::exception&) {}
 
    std::cout << s2.getData() << '\n';
 
    D d2(3, 4);
    d2 = d1;   // OK: assignment to lvalue
//  D(5) = d1; // ERROR: no suitable overload of operator=
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 194 | C++98 | ambiguous whether a non-static member functioncould have the same name as the enclosing class name | explicit naming restriction added |

## See also
- [classes](/cpp/language/classes/)
- [non-static data members](/cpp/language/data_members/)
- [static data members](/cpp/language/static/)
