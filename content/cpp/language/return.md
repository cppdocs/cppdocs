---
title: "return statement"
source_path: "cpp/language/return"
category: "language"
---

Terminates the current function and returns the specified value (if any) to the caller.

## Notes
Returning by value may involve construction and copy/move of a temporary object, unless [copy elision](/cpp/language/copy_elision/) is used. Specifically, the conditions for copy/move are as follows:

The expression is move-eligible if it is a (possibly parenthesized) [identifier expression](/cpp/language/name/) that names a variable of automatic storage duration whose type is

and that variable is declared

If the expression is move-eligible, [overload resolution](/cpp/language/overload_resolution/) to select the constructor to use for initialization of the returned value or, for co_return, to select the overload of promise.return_value()(since C++20) is performed twice ﻿:

If the expression is move-eligible, it is treated as an xvalue (thus overload resolution may select the [move constructor](/cpp/language/move_constructor/)).

If expression is a prvalue, the result object is initialized directly by that expression. This does not involve a copy or move constructor when the types match (see [copy elision](/cpp/language/copy_elision/)).

## Example
```cpp
#include <iostream>
#include <string>
#include <utility>
 
void fa(int i)
{
    if (i == 2)
        return;
    std::cout << "fa("<< i << ")\n";
} // implied return;
 
int fb(int i)
{
    if (i > 4)
        return 4;
    std::cout << "fb(" << i << ")\n";
    return 2;
}
 
std::pair<std::string, int> fc(const char* p, int x)
{
    return {p, x};
}
 
void fd()
{
    return fa(10); // fa(10) is a void expression
}
 
int main()
{
    fa(1); // prints its argument, then returns
    fa(2); // does nothing when i == 2, just returns
 
    int i = fb(5); // returns 4
    i = fb(i);     // prints its argument, returns 2
    std::cout << "i = " << i << '\n'
              << "fc(~).second = " << fc("Hello", 7).second << '\n';
 
    fd();
}
 
struct MoveOnly
{
    MoveOnly() = default;
    MoveOnly(MoveOnly&&) = default;
};
 
MoveOnly move_11(MoveOnly arg)
{
    return arg; // OK. implicit move
}
 
MoveOnly move_11(MoveOnly&& arg)
{
    return arg; // OK since C++20. implicit move
}
 
MoveOnly&& move_23(MoveOnly&& arg)
{
    return arg; // OK since C++23. implicit move
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1541 | C++98 | expression could not be omitted if the return type is cv-qualified void | it can be omitted |
| CWG 1579 | C++11 | return by converting move constructor was not allowed | converting moveconstructor lookup enabled |
| CWG 1885 | C++98 | sequencing of the destruction of automatic variables was not explicit | sequencing rules added |

## See also
- [copy elision](/cpp/language/copy_elision/)
- [C documentation](/c/language/return/)
