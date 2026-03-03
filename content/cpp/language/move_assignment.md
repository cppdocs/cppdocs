---
title: "Move assignment operator"
source_path: "cpp/language/move_assignment"
category: "language"
since: "C++11"
---

A move assignment operator is a non-template [non-static member function](/cpp/language/member_functions/) with the name operator= that can be called with an argument of the same class type and copies the content of the argument, possibly mutating the argument.

## Notes
If both copy and move assignment operators are provided, overload resolution selects the move assignment if the argument is an [rvalue](/cpp/language/value_category/) (either a [prvalue](/cpp/language/value_category/) such as a nameless temporary or an [xvalue](/cpp/language/value_category/) such as the result of std::move), and selects the copy assignment if the argument is an [lvalue](/cpp/language/value_category/) (named object or a function/operator returning lvalue reference). If only the copy assignment is provided, all argument categories select it (as long as it takes its argument by value or as reference to const, since rvalues can bind to const references), which makes copy assignment the fallback for move assignment, when move is unavailable.

It is unspecified whether virtual base class subobjects that are accessible through more than one path in the inheritance lattice, are assigned more than once by the implicitly-defined move assignment operator (same applies to [copy assignment](/cpp/language/as_operator/)).

See [assignment operator overloading](/cpp/language/operators/#Assignment_operator) for additional detail on the expected behavior of a user-defined move-assignment operator.

## Example
```cpp
#include <iostream>
#include <string>
#include <utility>
 
struct A
{
    std::string s;
 
    A() : s("test") {}
 
    A(const A& o) : s(o.s) { std::cout << "move failed!\n"; }
 
    A(A&& o) : s(std::move(o.s)) {}
 
    A& operator=(const A& other)
    {
         s = other.s;
         std::cout << "copy assigned\n";
         return *this;
    }
 
    A& operator=(A&& other)
    {
         s = std::move(other.s);
         std::cout << "move assigned\n";
         return *this;
    }
};
 
A f(A a) { return a; }
 
struct B : A
{
    std::string s2; 
    int n;
    // implicit move assignment operator B& B::operator=(B&&)
    // calls A's move assignment operator
    // calls s2's move assignment operator
    // and makes a bitwise copy of n
};
 
struct C : B
{
    ~C() {} // destructor prevents implicit move assignment
};
 
struct D : B
{
    D() {}
    ~D() {} // destructor would prevent implicit move assignment
    D& operator=(D&&) = default; // force a move assignment anyway 
};
 
int main()
{
    A a1, a2;
    std::cout << "Trying to move-assign A from rvalue temporary\n";
    a1 = f(A()); // move-assignment from rvalue temporary
    std::cout << "Trying to move-assign A from xvalue\n";
    a2 = std::move(a1); // move-assignment from xvalue
 
    std::cout << "\nTrying to move-assign B\n";
    B b1, b2;
    std::cout << "Before move, b1.s = \"" << b1.s << "\"\n";
    b2 = std::move(b1); // calls implicit move assignment
    std::cout << "After move, b1.s = \"" << b1.s << "\"\n";
 
    std::cout << "\nTrying to move-assign C\n";
    C c1, c2;
    c2 = std::move(c1); // calls the copy assignment operator
 
    std::cout << "\nTrying to move-assign D\n";
    D d1, d2;
    d2 = std::move(d1);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1353 | C++11 | the conditions where defaulted move assignment operators aredefined as deleted did not consider multi-dimensional array types | consider these types |
| CWG 1402 | C++11 | a defaulted move assignment operator that wouldcall a non-trivial copy assignment operator wasdeleted; a defaulted move assignment operator thatis deleted still participated in overload resolution | allows call to suchcopy assignmentoperator; made ignoredin overload resolution |
| CWG 1806 | C++11 | specification for a defaulted move assignment operatorinvolving a virtual base class was missing | added |
| CWG 2094 | C++11 | a volatile subobject made of a defaultedmove assignment operator non-trivial (CWG issue 496) | triviality not affected |
| CWG 2180 | C++11 | a defaulted move assignment operator for class Twas not defined as deleted if T is abstract and hasnon-move-assignable direct virtual base classes | the operator is definedas deleted in this case |
| CWG 2595 | C++20 | a move assignment operator was not eligible if thereis another move assignment operator which is moreconstrained but does not satisfy its associated constraints | it can be eligible in this case |
| CWG 2690 | C++11 | the implicitly-defined move assignment operator forunion types did not copy the object representation | they copy the objectrepresentation |

## See also
- [constructor](/cpp/language/initializer_list/)
- [converting constructor](/cpp/language/converting_constructor/)
- [copy assignment](/cpp/language/as_operator/)
- [copy constructor](/cpp/language/copy_constructor/)
- [default constructor](/cpp/language/default_constructor/)
- [destructor](/cpp/language/destructor/)
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
- [move constructor](/cpp/language/move_constructor/)
