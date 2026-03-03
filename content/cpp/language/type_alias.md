---
title: "Type alias, alias template (since C++11)"
source_path: "cpp/language/type_alias"
category: "language"
since: "C++11"
---

Type alias is a name that refers to a previously defined type (similar to [typedef](/cpp/language/typedef/)).

## Notes
Feature-test macro
Value
Std
Feature
__cpp_alias_templates
200704L
(C++11)
Alias templates

## Example
```cpp
#include <iostream>
#include <string>
#include <type_traits>
#include <typeinfo>
 
// type alias, identical to
// typedef std::ios_base::fmtflags flags;
using flags = std::ios_base::fmtflags;
// the name 'flags' now denotes a type:
flags fl = std::ios_base::dec;
 
// type alias, identical to
// typedef void (*func)(int, int);
using func = void (*) (int, int);
 
// the name 'func' now denotes a pointer to function:
void example(int, int) {}
func f = example;
 
// alias template
template<class T>
using ptr = T*;
// the name 'ptr<T>' is now an alias for pointer to T
ptr<int> x;
 
// type alias used to hide a template parameter
template<class CharT>
using mystring = std::basic_string<CharT, std::char_traits<CharT>>;
 
mystring<char> str;
 
// type alias can introduce a member typedef name
template<typename T>
struct Container { using value_type = T; };
 
// which can be used in generic programming
template<typename ContainerT>
void info(const ContainerT& c)
{
    typename ContainerT::value_type T;
    std::cout << "ContainerT is `" << typeid(decltype(c)).name() << "`\n"
                 "value_type is `" << typeid(T).name() << "`\n";
}
 
// type alias used to simplify the syntax of std::enable_if
template<typename T>
using Invoke = typename T::type;
 
template<typename Condition>
using EnableIf = Invoke<std::enable_if<Condition::value>>;
 
template<typename T, typename = EnableIf<std::is_polymorphic<T>>>
int fpoly_only(T) { return 1; }
 
struct S { virtual ~S() {} };
 
int main()
{
    Container<int> c;
    info(c); // Container::value_type will be int in this function
//  fpoly_only(c); // error: enable_if prohibits this
    S s;
    fpoly_only(s); // okay: enable_if allows this
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1558 | C++11 | whether unused arguments in an alias specializationparticipate in substitution was not specified | substitutionis performed |

## See also
- [typedef declaration](/cpp/language/typedef/)
- [namespace alias](/cpp/language/namespace_alias/)
