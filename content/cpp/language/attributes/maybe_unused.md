---
title: "C++ attribute: maybe_unused (since C++17)"
source_path: "cpp/language/attributes/maybe_unused"
category: "language"
since: "C++17"
---

Suppresses warnings on unused entities.

## Example
```cpp
#include <cassert>
 
[[maybe_unused]] void f([[maybe_unused]] bool thing1,
                        [[maybe_unused]] bool thing2)
{
    [[maybe_unused]] lb: // the label “lb” is not used, no warning
    [[maybe_unused]] bool b = thing1 && thing2;
    assert(b); // in release mode, assert is compiled out, and “b” is unused
               // no warning because it is declared [[maybe_unused]]
} // parameters “thing1” and “thing2” are not used, no warning
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2360 | C++17 | could not apply [[maybe_unused]] to structured bindings | allowed |

## See also
- [C documentation](/c/language/attributes/maybe_unused/)
