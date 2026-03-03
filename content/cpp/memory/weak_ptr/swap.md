---
title: "std::weak_ptr<T>::swap"
source_path: "cpp/memory/weak_ptr/swap"
category: "memory"
since: "C++11"
---

Exchanges the stored pointer values and the ownerships of *this and r. Reference counts, if any, are not adjusted.

## Declarations
```cpp
void swap( weak_ptr& r ) noexcept;
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
    std::shared_ptr<Foo> sp1 = std::make_shared<Foo>(100);
    std::shared_ptr<Foo> sp2 = std::make_shared<Foo>(200);
    std::weak_ptr<Foo> wp1 = sp1;
    std::weak_ptr<Foo> wp2 = sp2;
    auto print = [&]()
    {
        auto p1 = wp1.lock();
        auto p2 = wp2.lock();
        std::cout << " p1=" << (p1 ? p1->print() : "nullptr");
        std::cout << " p2=" << (p2 ? p2->print() : "nullptr") << '\n';  
    };
    print();
 
    wp1.swap(wp2);
    print();
 
    wp1.reset();
    print();
 
    wp1.swap(wp2);
    print();   
}
```
