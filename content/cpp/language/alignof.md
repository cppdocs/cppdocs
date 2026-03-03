---
title: "alignof operator (since C++11)"
source_path: "cpp/language/alignof"
category: "language"
since: "C++11"
---

Queries alignment requirements of a type.

## Notes
See [alignment](/cpp/language/objects/#Alignment) for the meaning and properties of the value returned by alignof.

## Example
```cpp
#include <iostream>
 
struct Foo
{
    int   i;
    float f;
    char  c;
};
 
// Note: alignas(alignof(long double)) below can be
// simplified to alignas(long double) if desired.
struct alignas(alignof(long double)) Foo2
{
    // put your definition here
}; 
 
struct Empty {};
 
struct alignas(64) Empty64 {};
 
#define SHOW(expr) std::cout << #expr << " = " << (expr) << '\n'
 
int main()
{
    SHOW(alignof(char));
    SHOW(alignof(int*));
    SHOW(alignof(Foo));
    SHOW(alignof(Foo2));
    SHOW(alignof(Empty));
    SHOW(alignof(Empty64));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1305 | C++11 | type-id could not represent a reference to an arraywith an unknown bound but a complete element type | allowed |

## See also
- [Alignment requirement](/cpp/language/objects/#Alignment)
- [alignas](/cpp/language/alignas/)
- [alignment_of](/cpp/types/alignment_of/)
- [C documentation](/c/language/alignof/)
