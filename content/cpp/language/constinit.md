---
title: "constinit specifier (since C++20)"
source_path: "cpp/language/constinit"
category: "language"
since: "C++20"
---

constinit - asserts that a variable has static initialization, i.e. [zero initialization](/cpp/language/zero_initialization/) and [constant initialization](/cpp/language/constant_initialization/), otherwise the program is ill-formed.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_constinit
201907L
(C++20)
constinit

## Example
```cpp
#include <cassert>
 
constexpr int square(int i)
{
    return i * i;
}
 
int twice(int i)
{
    return i + i;
}
 
constinit int sq = square(2);    // OK: initialization is done at compile time
// constinit int x_x = twice(2); // Error: compile time initializer required
 
int square_4_gen()
{
    static constinit int pow = square(4);
 
    // constinit int prev = pow; // Error: constinit can only be applied to a
                                 // variable with static or thread storage duration
    int prev = pow;
    pow = pow * pow;
    return prev;
}
 
int main()
{
    assert(sq == 4);
    sq = twice(1); // Unlike constexpr this value can be changed later at runtime
    assert(sq == 2);
 
    assert(square_4_gen() == 16);
    assert(square_4_gen() == 256);
    assert(square_4_gen() == 65536);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2543 | C++20 | the behavior was unclear if the variable declared with constinitis dynamically initialized as part of static initialization | the program is ill-formed in this case |

## See also
- [consteval specifier](/cpp/language/consteval/)
- [constexpr specifier](/cpp/language/constexpr/)
- [constant expression](/cpp/language/constant_expression/)
- [expression](/cpp/language/expressions/)
- [constant initialization](/cpp/language/constant_initialization/)
- [static](/cpp/language/storage_duration/)
- [zero initialization](/cpp/language/zero_initialization/)
