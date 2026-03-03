---
title: "Lookup and name spaces"
source_path: "c/language/name_space"
category: "c"
---

When an [identifier](/c/language/identifier/) is encountered in a C program, a lookup is performed to locate the [declaration](/c/language/declarations/) that introduced that identifier and that is currently [in scope](/c/language/scope/). C allows more than one declaration for the same identifier to be in scope simultaneously if these identifiers belong to different categories, called name spaces:

## Notes
The names of [macros](/c/preprocessor/replace/) are not part of any name space because they are replaced by the preprocessor prior to semantic analysis.

It is common practice to inject struct/union/enum names into the name space of the ordinary identifiers using a [typedef](/c/language/typedef/) declaration:

A well-known example of the same identifier being used across two name spaces is the identifier stat from the POSIX header sys/stat.h. It [names a function](http://pubs.opengroup.org/onlinepubs/9699919799/) when used as an ordinary identifier and [indicates a struct](http://pubs.opengroup.org/onlinepubs/9699919799/basedefs/sys_stat.h.html) when used as a tag.

Unlike in C++, enumeration constants are not struct members, and their name space is the name space of ordinary identifiers, and since there is no struct scope in C, their scope is the scope in which the struct declaration appears:

If a standard attribute, an attribute prefix, or a non-standard attribute name is not supported, the invalid attribute itself is ignored without causing an error.

## Example
```cpp
void foo (void) { return; } // ordinary name space, file scope
struct foo {      // tag name space, file scope
    int foo;      // member name space for this struct foo, file scope
    enum bar {    // tag name space, file scope
        RED       // ordinary name space, file scope
    } bar;        // member name space for this struct foo, file scope
    struct foo* p; // OK: uses tag/file scope name "foo"
};
enum bar x; // OK: uses tag/file-scope bar
// int foo; // Error: ordinary name space foo already in scope 
//union foo { int a, b; }; // Error: tag name space foo in scope
 
int main(void)
{
    goto foo; // OK uses "foo" from label name space/function scope
 
    struct foo { // tag name space, block scope (hides file scope)
       enum bar x; // OK, uses "bar" from tag name space/file scope
    };
    typedef struct foo foo; // OK: uses foo from tag name space/block scope
                            // defines block-scope ordinary foo (hides file scope)
    (foo){.x=RED}; // uses ordinary/block-scope foo and ordinary/file-scope RED
 
foo:; // label name space, function scope
}
```

## See also
- [C++ documentation](/cpp/language/lookup/)
