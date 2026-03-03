---
title: "C++ attribute: assume (since C++23)"
source_path: "cpp/language/attributes/assume"
category: "language"
since: "C++23"
---

Specifies that the given expression is assumed to always evaluate to true at a given point in order to allow compiler optimizations based on the information given.

## Notes
Since assumptions cause runtime-undefined behavior if they do not hold, they should be used sparingly.

One correct way to use them is to follow assertions with assumptions:

## Example
```cpp
#include <cmath>
 
void f(int& x, int y)
{
    void g(int);
    void h();
 
    [[assume(x > 0)]]; // Compiler may assume x is positive
 
    g(x / 2); // More efficient code possibly generated
 
    x = 3;
    int z = x;
 
    [[assume((h(), x == z))]]; // Compiler may assume x would have the same value after
                               // calling h
                               // The assumption does not cause a call to h
 
    h();
    g(x); // Compiler may replace this with g(3);
 
    h();
    g(x); // Compiler may NOT replace this with g(3);
          // An assumption applies only at the point where it appears
 
    z = std::abs(y);
 
    [[assume((g(z), true))]]; // Compiler may assume g(z) will return
 
    g(z); // Due to above and below assumptions, compiler may replace this with g(10);
 
    [[assume(y == -10)]]; // Undefined behavior if y != -10 at this point
 
    [[assume((x - 1) * 3 == 12)]];
 
    g(x); // Compiler may replace this with g(5);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2924 | C++23 | violating an assumption would result in undefined behavior | results in runtime-undefined behavior |

## See also
- [unreachable](/cpp/utility/unreachable/)
