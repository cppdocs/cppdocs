---
title: "C attribute: fallthrough (since C23)"
source_path: "c/language/attributes/fallthrough"
category: "c"
---

Indicates that the fall through from the previous case label is intentional and should not be diagnosed by a compiler that warns on fallthrough.

## Example
```cpp
#include <stdbool.h>
 
void g(void) {}
void h(void) {}
void i(void) {}
 
void f(int n) {
  switch (n) {
    case 1:
    case 2:
      g();
     [[fallthrough]];
    case 3: // no warning on fallthrough
      h();
    case 4: // compiler may warn on fallthrough
      if(n < 3) {
          i();
          [[fallthrough]]; // OK
      }
      else {
          return;
      }
    case 5:
      while (false) {
        [[fallthrough]]; // ill-formed: no subsequent case or default label
      }
    case 6:
      [[fallthrough]]; // ill-formed: no subsequent case or default label
  }
}
 
int main(void) {}
```

## See also
- [C++ documentation](/cpp/language/attributes/fallthrough/)
