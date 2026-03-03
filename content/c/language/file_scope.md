---
title: "File scope"
source_path: "c/language/file_scope"
category: "c"
---

If the declarator or type specifier that declares the identifier appears outside of any block or list of parameters, the identifier has file scope, which terminates at the end of the translation unit.

## Example
```cpp
#include <stdio.h>
 
int a = 1;
static int b = 2;
 
void f (void) {printf("from function f()\n");}
static void g (void) {printf("from function g()\n");}
 
int main(void)
{
    f();
    g();
 
    return 0;
}
/* end of this translation unit, end of file scope */
```
