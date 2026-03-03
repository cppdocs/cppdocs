---
title: "C++ attribute: noreturn (since C++11)"
source_path: "cpp/language/attributes/noreturn"
category: "language"
since: "C++11"
---

Indicates that the function does not return.

## Example
```cpp
[[noreturn]] void f()
{
    throw "error";
    // OK
}
 
void q [[noreturn]] (int i)
{
    // behavior is undefined if called with an argument <= 0
    if (i > 0)
        throw "positive";
}
 
// void h() [[noreturn]]; // error: attribute applied to function type of h, not h itself
 
int main()
{
    try { f(); } catch(...) {}
    try { q(42); } catch(...) {}
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2924 | C++11 | returning from a [[noreturn]] functionwould result in undefined behavior | results in runtime-undefined behavior |

## See also
- [C documentation](/c/language/_Noreturn/)
- [C documentation](/c/language/attributes/noreturn/)
