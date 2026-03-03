---
title: "C++ attribute: indeterminate (since C++26)"
source_path: "cpp/language/attributes/indeterminate"
category: "language"
since: "C++26"
---

Indicates that the variable or function parameter has an indeterminate value if it is not initialized.

## Notes
The [[indeterminate]] attribute restores the undefined behavior that was implicitly introduced until C++26. It may make compilers consider a code path reading an indeterminate value unreachable.

## Example
```cpp
void f(int);
 
void g()
{
    int x [[indeterminate]]; // indeterminate value
    int y;                   // erroneous value
 
    f(x); // undefined behavior
    f(y); // erroneous behavior
}
 
struct T
{
    T() {}
    int x;
};
 
void h(T a [[indeterminate]], T b)
{
    f(a.x); // undefined behavior when called below
    f(b.x); // erroneous behavior when called below
}
 
h(T(), T());
```
