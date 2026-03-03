---
title: "std::any::~any"
source_path: "cpp/utility/any/~any"
category: "utility"
since: "C++17"
---

Destroys the contained object, if any, as if by a call to [reset()](/cpp/utility/any/reset/).

## Declarations
```cpp
~any();
```
_(since C++17)_

## Example
```cpp
#include <any>
#include <cstdio>
 
struct X
{
    X() { std::puts("X::X()"); }
    X(const X&) { std::puts("X::X(const X&)"); }
    ~X() { std::puts("X::~X()"); }
};
 
int main()
{
    std::any a{X{}};
    std::puts("Leaving main()...");
}
```

## See also
- [reset](/cpp/utility/any/reset/)
