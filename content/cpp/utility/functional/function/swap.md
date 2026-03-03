---
title: "std::function<R(Args...)>::swap"
source_path: "cpp/utility/functional/function/swap"
category: "utility"
since: "C++11"
---

Exchanges the stored callable objects of *this and other.

## Declarations
```cpp
void swap( function& other ) noexcept;
```
_(since C++11)_

## Parameters
- `other`: function wrapper to exchange the stored callable object with

## Return value
(none)

## Example
```cpp
#include <functional>
#include <iostream>
 
void foo(const char* str, int x)
{
    std::cout << "foo(\"" << str << "\", " << x << ")\n";
}
 
void bar(const char* str, int x)
{
    std::cout << "bar(\"" << str << "\", " << x << ")\n";
}
 
int main()
{
    std::function<void(const char*, int)> f1{foo};
    std::function<void(const char*, int)> f2{bar};
 
    f1("f1", 1);
    f2("f2", 2);
 
    std::cout << "f1.swap(f2);\n";
    f1.swap(f2);
 
    f1("f1", 1);
    f2("f2", 2);
}
```

## See also
- [swap](/cpp/utility/functional/move_only_function/swap/)
