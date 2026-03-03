---
title: "std::enable_shared_from_this<T>::shared_from_this"
source_path: "cpp/memory/enable_shared_from_this/shared_from_this"
category: "memory"
since: "C++11"
---

Returns a [std::shared_ptr](/cpp/memory/shared_ptr/)<T> that shares ownership of *this with all existing [std::shared_ptr](/cpp/memory/shared_ptr/) that refer to *this.

## Declarations
```cpp
std::shared_ptr<T> shared_from_this();
```
_(since C++11)_

```cpp
std::shared_ptr<T const> shared_from_this() const;
```
_(since C++11)_

## Return value
[std::shared_ptr](/cpp/memory/shared_ptr/)<T>([weak_this](/cpp/memory/enable_shared_from_this/#weak_this) ﻿)

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo : public std::enable_shared_from_this<Foo>
{
    Foo() { std::cout << "Foo::Foo\n"; }
    ~Foo() { std::cout << "Foo::~Foo\n"; } 
    std::shared_ptr<Foo> getFoo() { return shared_from_this(); }
};
 
int main()
{
    Foo *f = new Foo;
    std::shared_ptr<Foo> pf1;
 
    {
        std::shared_ptr<Foo> pf2(f);
        pf1 = pf2->getFoo(); // shares ownership of object with pf2
    }
 
    std::cout << "pf2 is gone\n";   
}
```

## See also
- [shared_ptr](/cpp/memory/shared_ptr/)
