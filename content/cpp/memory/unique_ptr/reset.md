---
title: "std::unique_ptr<T,Deleter>::reset"
source_path: "cpp/memory/unique_ptr/reset"
category: "memory"
---

Replaces the managed object.

## Declarations
```cpp
members of the primary template, unique_ptr<T>
```

```cpp
void reset( pointer ptr = pointer() ) noexcept;
```
_(constexpr since C++23)_

```cpp
members of the specialization unique_ptr<T[]>
```

```cpp
template< class U >
void reset( U ptr ) noexcept;
```
_(constexpr since C++23)_

```cpp
void reset( std::nullptr_t = nullptr ) noexcept;
```
_(constexpr since C++23)_

## Parameters
- `ptr`: pointer to a new object to manage

## Notes
To replace the managed object while supplying a new deleter as well, move assignment operator may be used.

A test for self-reset, i.e. whether ptr points to an object already managed by *this, is not performed, except where provided as a compiler extension or as a debugging assert. Note that code such as p.reset(p.release()) does not involve self-reset, only code like p.reset(p.get()) does.

## Example
```cpp
#include <iostream>
#include <memory>
 
struct Foo // object to manage
{
    Foo() { std::cout << "Foo...\n"; }
    ~Foo() { std::cout << "~Foo...\n"; }
};
 
struct D // deleter
{
    void operator() (Foo* p)
    {
        std::cout << "Calling delete for Foo object... \n";
        delete p;
    }
};
 
int main()
{
    std::cout << "Creating new Foo...\n";
    std::unique_ptr<Foo, D> up(new Foo(), D()); // up owns the Foo pointer (deleter D)
 
    std::cout << "Replace owned Foo with a new Foo...\n";
    up.reset(new Foo());  // calls deleter for the old one
 
    std::cout << "Release and delete the owned Foo...\n";
    up.reset(nullptr);      
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2118 | C++11 | unique_ptr<T[]>::reset rejected qualification conversions | accepts |
| LWG 2169 | C++11 | the overload unique_ptr<T[]>::reset(pointer) existed | removed the overload |

## See also
- [release](/cpp/memory/unique_ptr/release/)
