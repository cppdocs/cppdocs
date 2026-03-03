---
title: "inline function specifier"
source_path: "c/language/inline"
category: "c"
---

Declares an [inline function](https://en.wikipedia.org/wiki/inline_function).

## Notes
The inline keyword was adopted from C++, but in C++, if a function is declared inline, it must be declared inline in every translation unit, and also every definition of an inline function must be exactly the same (in C, the definitions may be different, and depending on the differences only results in unspecified behavior). On the other hand, C++ allows non-const function-local statics and all function-local statics from different definitions of an inline function are the same in C++ but distinct in C.

## Example
```cpp
#ifndef TEST_H_INCLUDED
#define TEST_H_INCLUDED
 
inline int sum(int a, int b)
{
    return a + b;
}
 
#endif
```

## See also
- [C++ documentation](/cpp/language/inline/)
