---
title: "Fixed width integer types (since C99)"
source_path: "c/types/integer"
category: "c"
---

[1 Types](#Types)

## Example
```cpp
#include <inttypes.h>
#include <stdio.h>
 
int main(void)
{
    printf("%zu\n", sizeof(int64_t));
    printf("%s\n", PRId64);
    printf("%+" PRId64 "\n", INT64_MIN);
    printf("%+" PRId64 "\n", INT64_MAX);
 
    int64_t n = 7;
    printf("%+" PRId64 "\n", n);
}
```

## See also
- [Arithmetic types](/c/language/arithmetic_types/)
- [C++ documentation](/cpp/types/integer/)
- [C++ documentation](/cpp/language/user_literal/)
- [formatting macros note](/cpp/language/user_literal/#Notes)
