---
title: "std::type_index"
source_path: "cpp/types/type_index"
header: "<typeindex>"
category: "types"
since: "C++11"
---

The type_index class is a wrapper class around a [std::type_info](/cpp/types/type_info/) object, that can be used as index in associative and unordered associative containers. The relationship with type_info object is maintained through a pointer, therefore type_index is [CopyConstructible](/cpp/named_req/copyconstructible/) and [CopyAssignable](/cpp/named_req/copyassignable/).

## Declarations
```cpp
class type_index;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <memory>
#include <string>
#include <typeindex>
#include <typeinfo>
#include <unordered_map>
 
struct A
{
    virtual ~A() {}
};
 
struct B : A {};
struct C : A {};
 
int main()
{
    std::unordered_map<std::type_index, std::string> type_names;
 
    type_names[std::type_index(typeid(int))] = "int";
    type_names[std::type_index(typeid(double))] = "double";
    type_names[std::type_index(typeid(A))] = "A";
    type_names[std::type_index(typeid(B))] = "B";
    type_names[std::type_index(typeid(C))] = "C";
 
    int i;
    double d;
    A a;
 
    // note that we're storing pointer to type A
    std::unique_ptr<A> b(new B);
    std::unique_ptr<A> c(new C);
 
    std::cout << "i is " << type_names[std::type_index(typeid(i))] << '\n';
    std::cout << "d is " << type_names[std::type_index(typeid(d))] << '\n';
    std::cout << "a is " << type_names[std::type_index(typeid(a))] << '\n';
    std::cout << "*b is " << type_names[std::type_index(typeid(*b))] << '\n';
    std::cout << "*c is " << type_names[std::type_index(typeid(*c))] << '\n';
}
```

## See also
- [type_info](/cpp/types/type_info/)
