---
title: "Friend declaration"
source_path: "cpp/language/friend"
category: "language"
---

The friend declaration appears in a [class body](/cpp/language/class/) and grants a function or another class access to private and protected members of the class where the friend declaration appears.

## Notes
Friendship is not transitive (a friend of your friend is not your friend).

Friendship is not inherited (your friend's children are not your friends, and your friends are not your children's friends).

[Access specifiers](/cpp/language/access/) have no effect on the meaning of friend declarations (they can appear in private: or in public: sections, with no difference).

A friend class declaration cannot define a new class (friend class X {}; is an error).

When a local class declares an unqualified function or class as a friend, only functions and classes in the innermost non-class scope are [looked up](/cpp/language/lookup/), not the global functions:

A name first declared in a friend declaration within a class or class template X becomes a member of the innermost enclosing namespace of X, but is not visible for lookup (except argument-dependent lookup that considers X) unless a matching declaration at namespace scope is provided - see [namespaces](/cpp/language/namespace/#Namespaces) for details.

## Example
```cpp
#include <iostream>
#include <sstream>
 
class MyClass
{
    int i;                   // friends have access to non-public, non-static
    static inline int id{6}; // and static (possibly inline) members
 
    friend std::ostream& operator<<(std::ostream& out, const MyClass&);
    friend std::istream& operator>>(std::istream& in, MyClass&);
    friend void change_id(int);
public:
    MyClass(int i = 0) : i(i) {}
};
 
std::ostream& operator<<(std::ostream& out, const MyClass& mc)
{
    return out << "MyClass::id = " << MyClass::id << "; i = " << mc.i;
}
 
std::istream& operator>>(std::istream& in, MyClass& mc)
{
    return in >> mc.i;
}
 
void change_id(int id) { MyClass::id = id; }
 
int main()
{
    MyClass mc(7);
    std::cout << mc << '\n';
//  mc.i = 333*2;  // error: i is a private member
    std::istringstream("100") >> mc;
    std::cout << mc << '\n';
//  MyClass::id = 222*3;  // error: id is a private member
    change_id(9);
    std::cout << mc << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 45 | C++98 | members of a class nested in a friendclass of T have no special access to T | a nested class has the sameaccess as the enclosing class |
| CWG 500 | C++98 | friend class of T cannot inherit from private orprotected members of T, but its nested class can | both can inheritfrom such members |
| CWG 1439 | C++98 | the rule targeting friend declarations in non-localclasses did not cover template declarations | covered |
| CWG 1477 | C++98 | a name first declared in a friend declaration within a classor class template was not visible for lookup if the matchingdeclaration is provided in another namespace scope | it is visible forlookup in this case |
| CWG 1804 | C++98 | when a member of a class template is friended, the correspondingmember of specializations of partial specializations of the classtemplate was not a friend of the class granting friendship | such membersare also friends |
| CWG 2379 | C++11 | friend declarations referring to full specializationsof function templates could be declared constexpr | prohibited |
| CWG 2588 | C++98 | the linkages of names introduced by friend declarations were unclear | made clear |

## See also
- [Class types](/cpp/language/class/)
- [Access specifiers](/cpp/language/access/)
