---
title: "Copy assignment operator"
source_path: "cpp/language/as_operator"
category: "language"
---

A copy assignment operator is a non-template [non-static member function](/cpp/language/member_functions/) with the name operator= that can be called with an argument of the same class type and copies the content of the argument without mutating the argument.

## Notes
If both copy and move assignment operators are provided, overload resolution selects the move assignment if the argument is an [rvalue](/cpp/language/value_category/) (either a [prvalue](/cpp/language/value_category/) such as a nameless temporary or an [xvalue](/cpp/language/value_category/) such as the result of [std::move](/cpp/utility/move/)), and selects the copy assignment if the argument is an [lvalue](/cpp/language/value_category/) (named object or a function/operator returning lvalue reference). If only the copy assignment is provided, all argument categories select it (as long as it takes its argument by value or as reference to const, since rvalues can bind to const references), which makes copy assignment the fallback for move assignment, when move is unavailable.

It is unspecified whether virtual base class subobjects that are accessible through more than one path in the inheritance lattice, are assigned more than once by the implicitly-defined copy assignment operator (same applies to [move assignment](/cpp/language/move_operator/)).

See [assignment operator overloading](/cpp/language/operators/#Assignment_operator) for additional detail on the expected behavior of a user-defined copy-assignment operator.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <memory>
#include <string>
 
struct A
{
    int n;
    std::string s1;
 
    A() = default;
    A(A const&) = default;
 
    // user-defined copy assignment (copy-and-swap idiom)
    A& operator=(A other)
    {
        std::cout << "copy assignment of A\n";
        std::swap(n, other.n);
        std::swap(s1, other.s1);
        return *this;
    }
};
 
struct B : A
{
    std::string s2;
    // implicitly-defined copy assignment
};
 
struct C
{
    std::unique_ptr<int[]> data;
    std::size_t size;
 
    // user-defined copy assignment (non copy-and-swap idiom)
    // note: copy-and-swap would always reallocate resources
    C& operator=(const C& other)
    {
        if (this != &other) // not a self-assignment
        {
            if (size != other.size) // resource cannot be reused
            {
                data.reset(new int[other.size]);
                size = other.size;
            }
            std::copy(&other.data[0], &other.data[0] + size, &data[0]);
        }
        return *this;
    }
};
 
int main()
{
    A a1, a2;
    std::cout << "a1 = a2 calls ";
    a1 = a2; // user-defined copy assignment
 
    B b1, b2;
    b2.s1 = "foo";
    b2.s2 = "bar";
    std::cout << "b1 = b2 calls ";
    b1 = b2; // implicitly-defined copy assignment
 
    std::cout << "b1.s1 = " << b1.s1 << "; b1.s2 = " << b1.s2 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1353 | C++98 | the conditions where implicitly-declared copy assignment operatorsare undefined did not consider multi-dimensional array types | consider these types |
| CWG 2094 | C++11 | a volatile subobject made defaulted copyassignment operators non-trivial (CWG issue 496) | triviality not affected |
| CWG 2171 | C++11 | operator=(X&) = default was non-trivial | made trivial |
| CWG 2180 | C++11 | a defaulted copy assignment operator for class T was not defined as deletedif T is abstract and has non-copy-assignable direct virtual base classes | the operator is definedas deleted in this case |
| CWG 2595 | C++20 | a copy assignment operator was not eligible if thereis another copy assignment operator which is moreconstrained but does not satisfy its associated constraints | it can be eligiblein this case |

## See also
- [converting constructor](/cpp/language/converting_constructor/)
- [copy constructor](/cpp/language/copy_constructor/)
- [copy elision](/cpp/language/copy_elision/)
- [default constructor](/cpp/language/default_constructor/)
- [destructor](/cpp/language/destructor/)
- [explicit](/cpp/language/explicit/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [copy initialization](/cpp/language/copy_initialization/)
- [default initialization](/cpp/language/default_initialization/)
- [direct initialization](/cpp/language/direct_initialization/)
- [initializer list](/cpp/language/initializer_list/)
- [list initialization](/cpp/language/list_initialization/)
- [reference initialization](/cpp/language/reference_initialization/)
- [value initialization](/cpp/language/value_initialization/)
- [zero initialization](/cpp/language/zero_initialization/)
- [move assignment](/cpp/language/move_operator/)
- [move constructor](/cpp/language/move_constructor/)
- [new](/cpp/language/new/)
