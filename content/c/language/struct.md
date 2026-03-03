---
title: "Struct declaration"
source_path: "c/language/struct"
category: "c"
---

A struct is a type consisting of a sequence of members whose storage is allocated in an ordered sequence (as opposed to union, which is a type consisting of a sequence of members whose storage overlaps).

## Notes
See [struct initialization](/c/language/struct_initialization/) for the rules regarding the initializers for structs.

Because members of incomplete type are not allowed, and a struct type is not complete until the end of the definition, a struct cannot have a member of its own type. A pointer to its own type is allowed, and is commonly used to implement nodes in linked lists or trees.

Because a struct declaration does not establish [scope](/c/language/scope/), nested types, enumerations and enumerators introduced by declarations within struct-declaration-list are visible in the surrounding scope where the struct is defined.

## Example
```cpp
#include <stddef.h>
#include <stdio.h>
 
int main(void)
{
    // Declare the struct type.
    struct car
    {
        char* make;
        int year;
    };
    // Declare and initialize an object of a previously-declared struct type.
    struct car c = {.year = 1923, .make = "Nash"};
    printf("1) Car: %d %s\n", c.year, c.make);
 
    // Declare a struct type, an object of that type, and a pointer to it.
    struct spaceship
    {
        char* model;
        int max_speed;
    } ship = {"T-65 X-wing starfighter", 1050},
    *pship = &ship;
    printf("2) Spaceship: %s. Max speed: %d km/h\n\n", ship.model, ship.max_speed);
 
    // Address increase in order of definition. Padding may be inserted.
    struct A { char a; double b; char c; };
    printf(
        "3) Offset of char a = %zu\n"
        "4) Offset of double b = %zu\n"
        "5) Offset of char c = %zu\n"
        "6) Size of struct A = %zu\n\n",
        offsetof(struct A, a),
        offsetof(struct A, b),
        offsetof(struct A, c),
        sizeof(struct A)
    );
    struct B { char a; char b; double c; };
    printf(
        "7) Offset of char a = %zu\n"
        "8) Offset of char b = %zu\n"
        "9) Offset of double c = %zu\n"
        "A) Size of struct B = %zu\n\n",
        offsetof(struct B, a),
        offsetof(struct B, b),
        offsetof(struct B, c),
        sizeof(struct B)
    );
 
    // A pointer to a struct can be cast to a pointer
    // to its first member and vice versa.
    char** pmodel = (char **)pship;
    printf("B) %s\n", *pmodel);
    pship = (struct spaceship *)pmodel;
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| DR 499 | C11 | members of anonymous structs/unions were considered members of the enclosing struct/union | they retain their memory layout |

## See also
- [struct and union member access](/c/language/operator_member_access/)
- [bit-field](/c/language/bit_field/)
- [struct initialization](/c/language/struct_initialization/)
- [C++ documentation](/cpp/language/class/)
