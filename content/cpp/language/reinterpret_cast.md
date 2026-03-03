---
title: "reinterpret_cast conversion"
source_path: "cpp/language/reinterpret_cast"
category: "language"
---

Converts between types by reinterpreting the underlying bit pattern.

## Notes
Assuming that alignment requirements are met, a reinterpret_cast does not change the [value of a pointer](/cpp/language/pointer/#Pointers) outside of a few limited cases dealing with [pointer-interconvertible](/cpp/language/static_cast/#pointer-interconvertible) objects:

Performing a class member access that designates a non-static data member or a non-static member function on a glvalue that does not actually designate an object of the appropriate type - such as one obtained through a reinterpret_cast - results in undefined behavior:

Many compilers issue "strict aliasing" warnings in such cases, even though technically such constructs run afoul of something other than the paragraph commonly known as the "strict aliasing rule".

The purpose of strict aliasing and related rules is to enable type-based alias analysis, which would be decimated if a program can validly create a situation where two pointers to unrelated types (e.g., an int* and a float*) could simultaneously exist and both can be used to load or store the same memory (see [this email on SG12 reflector](https://web.archive.org/web/20201128194944/http://www.open-std.org/pipermail/ub/2016-February/000565.html)). Thus, any technique that is seemingly capable of creating such a situation necessarily invokes undefined behavior.

When it is needed to interpret the bytes of an object as a value of a different type, [std::memcpy](/cpp/string/byte/memcpy/) or [std::bit_cast](/cpp/numeric/bit_cast/)(since C++20) can be used:

If the implementation provides [std::intptr_t](/cpp/types/integer/) and/or [std::uintptr_t](/cpp/types/integer/), then a cast from a pointer to an object type or cv void to these types is always well-defined. However, this is not guaranteed for a function pointer.

In C, aggregate copy and assignment access the aggregate object as a whole. But in C++ such actions are always performed through a member function call, which accesses the individual subobjects rather than the entire object (or, in the case of unions, copies the object representation, i.e., via unsigned char).

## Example
```cpp
#include <cassert>
#include <cstdint>
#include <iostream>
 
int f() { return 42; }
 
int main()
{
    int i = 7;
 
    // pointer to integer and back
    std::uintptr_t v1 = reinterpret_cast<std::uintptr_t>(&i); // static_cast is an error
    std::cout << "The value of &i is " << std::showbase << std::hex << v1 << '\n';
    int* p1 = reinterpret_cast<int*>(v1);
    assert(p1 == &i);
 
    // pointer to function to another and back
    void(*fp1)() = reinterpret_cast<void(*)()>(f);
    // fp1(); undefined behavior
    int(*fp2)() = reinterpret_cast<int(*)()>(fp1);
    std::cout << std::dec << fp2() << '\n'; // safe
 
    // type aliasing through pointer
    char* p2 = reinterpret_cast<char*>(&i);
    std::cout << (p2[0] == '\x7' ? "This system is little-endian\n"
                                 : "This system is big-endian\n");
 
    // type aliasing through reference
    reinterpret_cast<unsigned int&>(i) = 42;
    std::cout << i << '\n';
 
    [[maybe_unused]] const int &const_iref = i;
    // int &iref = reinterpret_cast<int&>(
    //     const_iref); // compiler error - can't get rid of const
    // Must use const_cast instead: int &iref = const_cast<int&>(const_iref);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 195 | C++98 | conversion between function pointersand object pointers not allowed | made conditionally-supported |
| CWG 658 | C++98 | the result of pointer conversions was unspecified(except for conversions back to the original type) | specification provided for pointerswhose pointed-to types satisfythe alignment requirements |
| CWG 799 | C++98 | it was unclear which identity conversioncan be done by reinterpret_cast | made clear |
| CWG 1268 | C++11 | reinterpret_cast could only castlvalues to reference types | xvalues also allowed |
| CWG 2780 | C++98 | reinterpret_cast could not castfunction lvalues to other reference types | allowed |
| CWG 2939 | C++17 | reinterpret_cast could castprvalues to rvalue reference types | not allowed |

## See also
- [const_cast conversion](/cpp/language/const_cast/)
- [static_cast conversion](/cpp/language/static_cast/)
- [dynamic_cast conversion](/cpp/language/dynamic_cast/)
- [explicit casts](/cpp/language/explicit_cast/)
- [standard conversions](/cpp/language/implicit_cast/)
- [bit_cast](/cpp/numeric/bit_cast/)
