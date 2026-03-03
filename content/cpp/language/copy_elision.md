---
title: "Copy elision"
source_path: "cpp/language/copy_elision"
category: "language"
---

When certain criteria are met, the creation of a class object from a source object of the same type (ignoring cv-qualification) can be omitted, even if the selected constructor and/or the destructor for the object have side effects. This elision of object creation is called copy elision ﻿.

## Notes
Copy elision is the only allowed form of optimization(until C++14) one of the two allowed forms of optimization, alongside [allocation elision and extension](/cpp/language/new/#Allocation),(since C++14) that can change observable side-effects. Because some compilers do not perform copy elision in every situation where it is allowed (e.g., in debug mode), programs that rely on the side-effects of copy/move constructors and destructors are not portable.

In a return statement or a throw expression, if the compiler cannot perform copy elision but the conditions for copy elision are met, or would be met except that the source is a function parameter, the compiler will attempt to use the move constructor even if the source operand is designated by an lvalue(until C++23) the source operand will be treated as an rvalue(since C++23); see [return statement](/cpp/language/return/#Notes) for details.

In [constant expression](/cpp/language/constant_expression/) and [constant initialization](/cpp/language/constant_initialization/), copy elision is never performed.

## Example
```cpp
#include <iostream>
 
struct Noisy
{
    Noisy() { std::cout << "constructed at " << this << '\n'; }
    Noisy(const Noisy&) { std::cout << "copy-constructed\n"; }
    Noisy(Noisy&&) { std::cout << "move-constructed\n"; }
    ~Noisy() { std::cout << "destructed at " << this << '\n'; }
};
 
Noisy f()
{
    Noisy v = Noisy(); // (until C++17) copy elision initializing v from a temporary;
                       //               the move constructor may be called
                       // (since C++17) "guaranteed copy elision"
    return v; // copy elision ("NRVO") from v to the result object;
              // the move constructor may be called
}
 
void g(Noisy arg)
{
    std::cout << "&arg = " << &arg << '\n';
}
 
int main()
{
    Noisy v = f(); // (until C++17) copy elision initializing v from the result of f()
                   // (since C++17) "guaranteed copy elision"
 
    std::cout << "&v = " << &v << '\n';
 
    g(f()); // (until C++17) copy elision initializing arg from the result of f()
            // (since C++17) "guaranteed copy elision"
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1967 | C++11 | when copy elision is done using a move constructor, thelifetime of the moved-from object was still considered | not considered |
| CWG 2426 | C++17 | destructor was not required when returning a prvalue | destructor is potentially invoked |
| CWG 2930 | C++98 | only copy(/move) operations could be elided, but anon-copy(/move) constructor can be selected by copy-initialization | elides any object constructionof related copy-initializations |

## See also
- [copy initialization](/cpp/language/copy_initialization/)
- [copy constructor](/cpp/language/copy_constructor/)
- [move constructor](/cpp/language/move_constructor/)
