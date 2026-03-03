---
title: "offsetof"
source_path: "c/types/offsetof"
header: "<stddef.h>"
category: "c"
---

The macro offsetof expands to an [integer constant expression](/c/language/constant_expression/#Integer_constant_expression) of type [size_t](/c/types/size_t/), the value of which is the offset, in bytes, from the beginning of an object of specified type to its specified subobject, including padding if any.

## Declarations
```cpp
#define offsetof(type, member) /*implementation-defined*/
```

## Notes
If offsetof is applied to a bit-field member, the behavior is undefined, because the address of a bit-field cannot be taken.

member is not restricted to a direct member. It can denote a subobject of a given member, such as an element of an array member.

Even though it is specified in C23 that specifying a new type containing an unparenthesized comma in offsetof is undefined behavior, such usage is generally not supported even in earlier modes: offsetof(struct Foo { int a, b; }, a) generally fails to compile.

[typeof](/c/language/typeof_unqual/) can be used to avoid the bad effect of commas in the definition of a new type, e.g. offsetof(typeof(struct { int i, j; }), i) is well-defined.

## Example
```cpp
#include <stdio.h>
#include <stddef.h>
 
struct S {
    char c;
    double d;
};
 
int main(void)
{
    printf("the first element is at offset %zu\n", offsetof(struct S, c));
    printf("the double is at offset %zu\n", offsetof(struct S, d));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| DR 496 | C89 | only structs and struct members were mentioned | unions and other subobjects are also supported |

## See also
- [size_t](/c/types/size_t/)
- [sizeof](/c/language/sizeof/)
- [C++ documentation](/cpp/types/offsetof/)
