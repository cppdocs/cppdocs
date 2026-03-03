---
title: "cv (const and volatile) type qualifiers"
source_path: "cpp/language/cv"
category: "language"
---

Appear in any type specifier, including decl-specifier-seq of [declaration grammar](/cpp/language/declarations/), to specify constness or volatility of the object being declared or of the type being named.

## Notes
The const qualifier used on a declaration of a non-local non-volatile non-[template](/cpp/language/variable_template/)(since C++14)non-[inline](/cpp/language/inline/)(since C++17) variable that is not declared extern gives it [internal linkage](/cpp/language/storage_duration/#Linkage). This is different from C where const file scope variables have external linkage.

The C++ language grammar treats mutable as a [storage-class-specifier](/cpp/language/storage_duration/), rather than a type qualifier, but it does not affect storage class or linkage.

Some uses of volatile are deprecated:

## Example
```cpp
#include <cstdlib>
 
int main()
{
    int n1 = 0;          // non-const object
    const int n2 = 0;    // const object
    int const n3 = 0;    // const object (same as n2)
    volatile int n4 = 0; // volatile object
 
    const struct
    {
        int n1;
        mutable int n2;
    } x = {0, 0};        // const object with mutable member
 
    n1 = 1;   // OK: modifiable object
//  n2 = 2;   // error: non-modifiable object
    n4 = 3;   // OK: treated as a side-effect
//  x.n1 = 4; // error: member of a const object is const
    x.n2 = 4; // OK: mutable member of a const object isn't const
 
    const int& r1 = n1; // reference to const bound to non-const object
//  r1 = 2; // error: attempt to modify through reference to const
    const_cast<int&>(r1) = 2; // OK: modifies non-const object n1
 
    const int& r2 = n2; // reference to const bound to const object
//  r2 = 2; // error: attempt to modify through reference to const
//  const_cast<int&>(r2) = 2; // undefined behavior: attempt to modify const object n2
 
    [](...){}(n3, n4, x, r2); // see also: [[maybe_unused]]
 
    std::system("g++ -O3 -Wa,-adhln ./main.cpp"); // may issue asm on POSIX systems
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1428 | C++98 | the definition of 'const object' was based on declaration | based on object type |
| CWG 1528 | C++98 | there was no requirement on the number of occurrencesof each cv-qualifier in the same cv-qualifier sequence | at most once foreach cv-qualifier |
| CWG 1799 | C++98 | mutable could be applied to data members not declaredconst, but the members' types may still be const-qualified | cannot apply mutable to datamembers of const-qualified types |

## See also
- [C documentation](/c/language/const/)
- [C documentation](/c/language/volatile/)
