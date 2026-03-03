---
title: "std::ranges::construct_at"
source_path: "cpp/memory/ranges/construct_at"
header: "<memory>"
category: "memory"
since: "C++20"
---

Creates a T object initialized with the arguments in args at given address location.

## Declarations
```cpp
Call signature
```

```cpp
template< class T, class... Args >
constexpr T* construct_at( T* location, Args&&... args );
```
_(since C++20)_

## Parameters
- `location`: pointer to the uninitialized storage on which a T object will be constructed
- `args...`: arguments used for initialization

## Return value
location

## Notes
std::ranges::construct_at behaves exactly same as [std::construct_at](/cpp/memory/construct_at/), except that it is invisible to argument-dependent lookup.

## Example
```cpp
#include <iostream>
#include <memory>
 
struct S
{
    int x;
    float y;
    double z;
 
    S(int x, float y, double z) : x{x}, y{y}, z{z} { std::cout << "S::S();\n"; }
 
    ~S() { std::cout << "S::~S();\n"; }
 
    void print() const
    {
        std::cout << "S { x=" << x << "; y=" << y << "; z=" << z << "; };\n";
    }
};
 
int main()
{
    alignas(S) unsigned char buf[sizeof(S)];
 
    S* ptr = std::ranges::construct_at(reinterpret_cast<S*>(buf), 42, 2.71828f, 3.1415);
    ptr->print();
 
    std::ranges::destroy_at(ptr);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3436 | C++20 | construct_at could not create objects of array types | can value-initialize bounded arrays |
| LWG 3870 | C++20 | construct_at could create objects of cv-qualified types | only cv-unqualified types are permitted |

## See also
- [ranges::destroy_at](/cpp/memory/ranges/destroy_at/)
- [construct_at](/cpp/memory/construct_at/)
