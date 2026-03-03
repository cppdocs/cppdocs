---
title: "goto statement"
source_path: "cpp/language/goto"
category: "language"
---

Transfers control unconditionally.

## Notes
In the C programming language, the goto statement has fewer restrictions and can enter the scope of any variable other than [variable-length array](/c/language/array/#Variable-length_arrays) or variably-modified pointer.

## Example
```cpp
#include <iostream>
 
struct Object
{
    // non-trivial destructor
    ~Object() { std::cout << 'd'; }
};
 
struct Trivial
{
    double d1;
    double d2;
}; // trivial ctor and dtor
 
int main()
{
    int a = 10;
 
    // loop using goto
label:
    Object obj;
    std::cout << a << ' ';
    a -= 2;
 
    if (a != 0)
        goto label;  // jumps out of scope of obj, calls obj destructor
    std::cout << '\n';
 
    // goto can be used to efficiently leave a multi-level (nested) loops
    for (int x = 0; x < 3; ++x)
        for (int y = 0; y < 3; ++y)
        {
            std::cout << '(' << x << ',' << y << ") " << '\n';
            if (x + y >= 3)
                goto endloop;
        }
 
endloop:
    std::cout << '\n';
 
    goto label2; // jumps into the scope of n and t
 
    [[maybe_unused]] int n; // no initializer
 
    [[maybe_unused]] Trivial t; // trivial ctor/dtor, no initializer
 
//  int x = 1;   // error: has initializer
//  Object obj2; // error: non-trivial dtor
 
label2:
    {
        Object obj3;
        goto label3; // jumps forward, out of scope of obj3
    }
 
label3:
    std::cout << '\n';
}
```

## See also
- [C documentation](/c/language/goto/)
