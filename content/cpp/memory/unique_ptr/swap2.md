---
title: "std::swap(std::unique_ptr)"
source_path: "cpp/memory/unique_ptr/swap2"
header: "<memory>"
category: "memory"
---

Specializes the [std::swap](/cpp/utility/swap/) algorithm for [std::unique_ptr](/cpp/memory/unique_ptr/). Swaps the contents of lhs and rhs. Calls lhs.swap(rhs).

## Declarations
```cpp
template< class T, class D >
void swap( std::unique_ptr<T, D>& lhs, std::unique_ptr<T, D>& rhs ) noexcept;
```
_(since C++11) (constexpr since C++23)_

## Parameters
- `lhs, rhs`: smart pointers whose contents to swap

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <memory>
#include <string>
 
struct Foo {
    Foo(int _val) : val(_val) { std::cout << "Foo...\n"; }
    ~Foo() { std::cout << "~Foo...\n"; }
    std::string print() { return std::to_string(val); }
    int val;
};
 
int main()
{
    std::unique_ptr<Foo> p1 = std::make_unique<Foo>(100);
    std::unique_ptr<Foo> p2 = std::make_unique<Foo>(200);
    auto print = [&]() {
        std::cout << " p1=" << (p1 ? p1->print() : "nullptr");
        std::cout << " p2=" << (p2 ? p2->print() : "nullptr") << '\n';  
    };
    print();
 
    std::swap(p1, p2);
    print();
 
    p1.reset();
    print();
 
    std::swap(p1, p2);
    print();   
}
```

## See also
- [swap](/cpp/utility/swap/)
- [swap](/cpp/memory/unique_ptr/swap/)
