---
title: "std::shared_ptr<T>::swap"
source_path: "cpp/memory/shared_ptr/swap"
category: "memory"
since: "C++11"
---

Exchanges the stored pointer values and the ownerships of *this and r. Reference counts, if any, are not adjusted.

## Declarations
```cpp
void swap( shared_ptr& r ) noexcept;
```
_(since C++11)_

## Parameters
- `r`: smart pointer to exchange the contents with

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <memory>
#include <string>
 
struct Foo
{
    Foo(int _val) : val(_val) { std::cout << "Foo...\n"; }
    ~Foo() { std::cout << "~Foo...\n"; }
    std::string print() { return std::to_string(val); }
    int val;
};
 
int main()
{
    std::shared_ptr<Foo> p1 = std::make_shared<Foo>(100);
    std::shared_ptr<Foo> p2 = std::make_shared<Foo>(200);
    auto print = [&]()
    {
        std::cout << " p1=" << (p1 ? p1->print() : "nullptr");
        std::cout << " p2=" << (p2 ? p2->print() : "nullptr") << '\n';  
    };
    print();
 
    p1.swap(p2);
    print();
 
    p1.reset();
    print();
 
    p1.swap(p2);
    print();   
}
```
