---
title: "typedef specifier"
source_path: "cpp/language/typedef"
category: "language"
---

typedef - creates an alias that can be used anywhere in place of a (possibly complex) type name.

## Notes
[Type aliases](/cpp/language/type_alias/) provide the same functionality as typedef declarations using a different syntax, and are also applicable to template names.

## Example
```cpp
// simple typedef
typedef unsigned long ulong;
 
// the following two objects have the same type
unsigned long l1;
ulong l2;
 
// more complicated typedef
typedef int int_t, *intp_t, (&fp)(int, ulong), arr_t[10];
 
// the following two objects have the same type
int a1[10];
arr_t a2;
 
// beware: the following two objects do not have the same type
const intp_t p1 = 0; // int *const p1 = 0
const int *p2;
 
// common C idiom to avoid having to write "struct S"
typedef struct { int a; int b; } S, *pS;
 
// the following two objects have the same type
pS ps1;
S* ps2;
 
// error: storage-class-specifier cannot appear in a typedef declaration
// typedef static unsigned int uint;
 
// typedef can be used anywhere in the decl-specifier-seq
long unsigned typedef int long ullong;
// more conventionally spelled "typedef unsigned long long int ullong;"
 
// std::add_const, like many other metafunctions, use member typedefs
template<class T>
struct add_const
{
    typedef const T type;
};
 
typedef struct Node
{
    struct listNode* next; // declares a new (incomplete) struct type named listNode
} listNode; // error: conflicts with the previously declared struct name
 
// C++20 error: "struct with typedef name for linkage" has member functions
typedef struct { void f() {} } C_Incompatible;
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 576 | C++98 | typedef was not allowed in the entire function definition | allowed in function body |
| CWG 2071 | C++98 | typedef could appear in a declaration that does not contain a declarator | now disallowed |

## See also
- [Type alias](/cpp/language/type_alias/)
- [Alias template](/cpp/language/type_alias/)
- [C documentation](/c/language/typedef/)
