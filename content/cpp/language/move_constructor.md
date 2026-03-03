---
title: "Move constructors"
source_path: "cpp/language/move_constructor"
category: "language"
since: "C++11"
---

A move constructor is a [constructor](/cpp/language/initializer_list/) which can be called with an argument of the same class type and copies the content of the argument, possibly mutating the argument.

## Notes
To make the [strong exception guarantee](/cpp/language/exceptions/#Exception_safety) possible, user-defined move constructors should not throw exceptions. For example, [std::vector](/cpp/container/vector/) relies on [std::move_if_noexcept](/cpp/utility/move_if_noexcept/) to choose between move and copy when the elements need to be relocated.

If both copy and move constructors are provided and no other constructors are viable, overload resolution selects the move constructor if the argument is an [rvalue](/cpp/language/value_category/#rvalue) of the same type (an [xvalue](/cpp/language/value_category/#xvalue) such as the result of std::moveor a [prvalue](/cpp/language/value_category/#prvalue) such as a nameless temporary(until C++17)), and selects the copy constructor if the argument is an [lvalue](/cpp/language/value_category/#lvalue) (named object or a function/operator returning lvalue reference). If only the copy constructor is provided, all argument categories select it (as long as it takes a reference to const, since rvalues can bind to const references), which makes copying the fallback for moving, when moving is unavailable.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
#include <utility>
 
struct A
{
    std::string s;
    int k;
 
    A() : s("test"), k(-1) {}
    A(const A& o) : s(o.s), k(o.k) { std::cout << "move failed!\n"; }
    A(A&& o) noexcept :
        s(std::move(o.s)),       // explicit move of a member of class type
        k(std::exchange(o.k, 0)) // explicit move of a member of non-class type
    {}
};
 
A f(A a)
{
    return a;
}
 
struct B : A
{
    std::string s2;
    int n;
    // implicit move constructor B::(B&&)
    // calls A's move constructor
    // calls s2's move constructor
    // and makes a bitwise copy of n
};
 
struct C : B
{
    ~C() {} // destructor prevents implicit move constructor C::(C&&)
};
 
struct D : B
{
    D() {}
    ~D() {}           // destructor would prevent implicit move constructor D::(D&&)
    D(D&&) = default; // forces a move constructor anyway
};
 
int main()
{
    std::cout << "Trying to move A\n";
    A a1 = f(A()); // return by value move-constructs the target
                   // from the function parameter
 
    std::cout << "Before move, a1.s = " << std::quoted(a1.s)
        << " a1.k = " << a1.k << '\n';
 
    A a2 = std::move(a1); // move-constructs from xvalue
    std::cout << "After move, a1.s = " << std::quoted(a1.s)
        << " a1.k = " << a1.k << '\n';
 
 
    std::cout << "\nTrying to move B\n";
    B b1;
 
    std::cout << "Before move, b1.s = " << std::quoted(b1.s) << "\n";
 
    B b2 = std::move(b1); // calls implicit move constructor
    std::cout << "After move, b1.s = " << std::quoted(b1.s) << "\n";
 
 
    std::cout << "\nTrying to move C\n";
    C c1;
    C c2 = std::move(c1); // calls copy constructor
 
    std::cout << "\nTrying to move D\n";
    D d1;
    D d2 = std::move(d1);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1353 | C++11 | the conditions where defaulted move constructors aredefined as deleted did not consider multi-dimensional array types | consider these types |
| CWG 1402 | C++11 | a defaulted move constructor that would calla non-trivial copy constructor was defined asdeleted; a defaulted move constructor that isdeleted still participated in overload resolution | allows call to such copyconstructor; made ignoredin overload resolution |
| CWG 1491 | C++11 | a defaulted move constructor of a class with a non-static datamember of rvalue reference type was defined as deleted | not deleted in this case |
| CWG 2094 | C++11 | a volatile subobject made a defaultedmove constructor non-trivial (CWG issue 496) | triviality not affected |
| CWG 2595 | C++20 | a move constructor was not eligible if there isanother move constructor which is more constrainedbut does not satisfy its associated constraints | it can be eligible in this case |

## See also
- [converting constructor](/cpp/language/converting_constructor/)
- [copy assignment](/cpp/language/as_operator/)
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
- [new](/cpp/language/new/)
