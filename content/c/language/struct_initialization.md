---
title: "Struct and union initialization"
source_path: "c/language/struct_initialization"
category: "c"
---

When [initializing](/c/language/initialization/) an object of [struct](/c/language/struct/) or [union](/c/language/union/) type, the initializer must be a non-empty,(until C23) brace-enclosed, comma-separated list of initializers for the members:

## Notes
The initializer list may have a trailing comma, which is ignored.

In C, the braced list of initializers cannot be empty (note that C++ allows empty lists, and also note that a [struct](/c/language/struct/) in C cannot be empty):

The initializer list can be empty in C as in C++:

Every expression in the initializer list must be a [constant expression](/c/language/constant_expression/) when initializing aggregates of any storage duration.

As with all other [initialization](/c/language/initialization/), every expression in the initializer list must be a [constant expression](/c/language/constant_expression/) when initializing aggregates of staticor thread-local(since C11) [storage duration](/c/language/storage_duration/):

The [order of evaluation](/c/language/eval_order/) of the subexpressions in any initializer is indeterminately sequenced (but not in C++ since C++11):

## Example
```cpp
#include <stdio.h>
#include <time.h>
 
int main(void)
{
    char buff[70];
    // designated initializers simplify the use of structs whose
    // order of members is unspecified
    struct tm my_time = { .tm_year=2012-1900, .tm_mon=9, .tm_mday=9,
                          .tm_hour=8, .tm_min=10, .tm_sec=20 };
    strftime(buff, sizeof buff, "%A %c", &my_time);
    puts(buff);
}
```

## See also
- [C++ documentation](/cpp/language/aggregate_initialization/)
