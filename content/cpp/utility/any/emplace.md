---
title: "std::any::emplace"
source_path: "cpp/utility/any/emplace"
category: "utility"
since: "C++17"
---

Changes the contained object to one of type [std::decay_t](/cpp/types/decay/)<ValueType> constructed from the arguments.

## Declarations
```cpp
template< class ValueType, class... Args >
std::decay_t<ValueType>& emplace( Args&&... args );
```
_(since C++17)_

```cpp
template< class ValueType, class U, class... Args >
std::decay_t<ValueType>& emplace( std::initializer_list<U> il, Args&&... args );
```
_(since C++17)_

## Return value
A reference to the new contained object.

## Example
```cpp
#include <algorithm>
#include <any>
#include <iostream>
#include <string>
#include <vector>
 
class Star
{
    std::string name;
    int id;
 
public:
    Star(std::string name, int id) : name{name}, id{id}
    {
        std::cout << "Star::Star(string, int)\n";
    }
 
    void print() const
    {
        std::cout << "Star{\"" << name << "\" : " << id << "};\n";
    }
};
 
int main()
{
    std::any celestial;
    // (1) emplace(Args&&... args);
    celestial.emplace<Star>("Procyon", 2943);
    const auto* star = std::any_cast<Star>(&celestial);
    star->print();
 
    std::any av;
    // (2) emplace(std::initializer_list<U> il, Args&&... args);
    av.emplace<std::vector<char>>({'C', '+', '+', '1', '7'} /* no args */);
    std::cout << av.type().name() << '\n';
    const auto* va = std::any_cast<std::vector<char>>(&av);
    std::for_each(va->cbegin(), va->cend(), [](char const& c) { std::cout << c; });
    std::cout << '\n';
}
```

## See also
- [(constructor)](/cpp/utility/any/any/)
- [reset](/cpp/utility/any/reset/)
