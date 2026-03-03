---
title: "std::unique_ptr<T,Deleter>::get_deleter"
source_path: "cpp/memory/unique_ptr/get_deleter"
category: "memory"
---

Returns the deleter object which would be used for destruction of the managed object.

## Declarations
```cpp
Deleter& get_deleter() noexcept;
```
_(since C++11) (constexpr since C++23)_

```cpp
const Deleter& get_deleter() const noexcept;
```
_(since C++11) (constexpr since C++23)_

## Return value
The stored deleter object.

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo
{
    Foo() { std::cout << "Foo() 0x" << std::hex << (void*)this << '\n'; }
    ~Foo() { std::cout << "~Foo() 0x" << std::hex << (void*)this << '\n'; }
};
 
struct D
{
    int number;
 
    void bar()
    {
        std::cout << "call D::bar(), my number is: " << std::dec << number << '\n';
    }
 
    void operator()(Foo* p) const
    {
        std::cout << "call deleter for Foo object 0x" << std::hex << (void*)p << '\n';
        delete p;
    }
};
 
int main()
{
    std::cout << "main start\n";
 
    std::unique_ptr<Foo, D> up1(new Foo(), D(42));
    D& del1 = up1.get_deleter();
    del1.bar();
 
    std::unique_ptr<Foo, D> up2(new Foo(), D(43));
    D& del2 = up2.get_deleter();
    auto* released = up2.release();
    del2(released);
 
    std::cout << "main end\n";
}
```

## See also
- [get_deleter](/cpp/memory/shared_ptr/get_deleter/)
