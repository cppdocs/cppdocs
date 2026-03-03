---
title: "C attribute: maybe_unused (since C23)"
source_path: "c/language/attributes/maybe_unused"
category: "c"
---

Suppresses warnings on unused entities.

## Example
```cpp
#include <assert.h>
 
[[maybe_unused]] void f([[maybe_unused]] _Bool cond1, [[maybe_unused]] _Bool cond2)
{
   [[maybe_unused]] _Bool b = cond1 && cond2;
   assert(b); // in release mode, assert is compiled out, and b is unused
              // no warning because it is declared [[maybe_unused]]
} // parameters cond1 and cond2 are not used, no warning
 
int main(void)
{
    f(1, 1);
}
```

## See also
- [C++ documentation](/cpp/language/attributes/maybe_unused/)
