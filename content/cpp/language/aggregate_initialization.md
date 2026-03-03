---
title: "Aggregate initialization"
source_path: "cpp/language/aggregate_initialization"
category: "language"
---

Initializes an aggregate from an initializer list. It is a form of [list-initialization](/cpp/language/list_initialization/)(since C++11).

## Notes
An aggregate class or array may include non-aggregatepublic bases(since C++17), members, or elements, which are initialized as described above (e.g. copy-initialization from the corresponding initializer clause).

Until C++11, narrowing conversions were permitted in aggregate initialization, but they are no longer allowed.

Until C++11, aggregate initialization could only be used in variable definition, and could not be used in a [constructor initializer list](/cpp/language/initializer_list/), a [new-expression](/cpp/language/new/), or temporary object creation due to syntax restrictions.

In C, character array of size one less than the size of the string literal may be initialized from a string literal; the resulting array is not null-terminated. This is not allowed in C++.

## Example
```cpp
#include <array>
#include <cstdio>
#include <string>
 
struct S
{
    int x;
 
    struct Foo
    {
        int i;
        int j;
        int a[3];
    } b;
};
 
int main()
{
    S s1 = {1, {2, 3, {4, 5, 6}}};
    S s2 = {1, 2, 3, 4, 5, 6}; // same, but with brace elision
    S s3{1, {2, 3, {4, 5, 6}}}; // same, using direct-list-initialization syntax
    S s4{1, 2, 3, 4, 5, 6}; // error until CWG 1270:
                            // brace elision only allowed with equals sign
 
    int ar[] = {1, 2, 3}; // ar is int[3]
//  char cr[3] = {'a', 'b', 'c', 'd'}; // too many initializer clauses
    char cr[3] = {'a'}; // array initialized as {'a', '\0', '\0'}
 
    int ar2d1[2][2] = {{1, 2}, {3, 4}}; // fully-braced 2D array: {1, 2}
                                        //                        {3, 4}
    int ar2d2[2][2] = {1, 2, 3, 4}; // brace elision: {1, 2}
                                    //                {3, 4}
    int ar2d3[2][2] = {{1}, {2}};   // only first column: {1, 0}
                                    //                    {2, 0}
 
    std::array<int, 3> std_ar2{{1, 2, 3}};  // std::array is an aggregate
    std::array<int, 3> std_ar1 = {1, 2, 3}; // brace-elision okay
 
//  int ai[] = {1, 2.0}; // narrowing conversion from double to int:
                         // error in C++11, okay in C++03
 
    std::string ars[] = {std::string("one"), // copy-initialization
                         "two",              // conversion, then copy-initialization
                         {'t', 'h', 'r', 'e', 'e'}}; // list-initialization
    union U
    {
        int a;
        const char* b;
    };
    U u1 = {1};         // OK, first member of the union
//  U u2 = {0, "asdf"}; // error: too many initializers for union
//  U u3 = {"asdf"};    // error: invalid conversion to int
 
    [](...) { std::puts("Garbage collecting unused variables... Done."); }
    (
        s1, s2, s3, s4, ar, cr, ar2d1, ar2d2, ar2d3, std_ar2, std_ar1, u1
    );
}
 
// aggregate
struct base1 { int b1, b2 = 42; };
 
// non-aggregate
struct base2
{
    base2() : b3(42) {}
 
    int b3;
};
 
// aggregate in C++17
struct derived : base1, base2 { int d; };
 
derived d1{{1, 2}, {}, 4}; // d1.b1 = 1, d1.b2 = 2,  d1.b3 = 42, d1.d = 4
derived d2{{}, {}, 4};     // d2.b1 = 0, d2.b2 = 42, d2.b3 = 42, d2.d = 4
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 413 | C++98 | anonymous bit-fields were initialized in aggregate initialization | they are ignored |
| CWG 737 | C++98 | when a character array is initialized with a string literalhaving fewer characters than the array size, the characterelements after the trailing '\0' was uninitialized | they arezero-initialized |
| CWG 1270 | C++11 | brace elision was only allowed to be used in copy-list-initialization | allowed elsewhere |
| CWG 1518 | C++11 | a class that declares an explicit default constructor orhas inherited constructors should could be an aggregate | it is not anaggregate |
| CWG 1622 | C++98 | a union could not be initialized with {} | allowed |
| CWG 2149(P3106R1) | C++98 | it was unclear whether brace elision isapplicable during array size deduction | applicable |
| CWG 2272 | C++98 | a non-static reference member that is not explicitlyinitialized was copy-initialized from an empty initializer list | the program is ill-formed in this case |
| CWG 2610 | C++17 | aggregate types could not have private or protected indirect base classes | allowed |
| CWG 2619 | C++20 | the kind of the initialization from designated initializers was unclear | it depends on thekind of the initializer |
| P2513R4 | C++20 | a UTF-8 string literal could not initialize an array of charor unsigned char, which was incompatible with C or C++17 | such initializationis valid |

## See also
- [copy elision](/cpp/language/copy_elision/)
- [initialization](/cpp/language/initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [list initialization](/cpp/language/list_initialization/)
- [reference initialization](/cpp/language/reference_initialization/)
- [value initialization](/cpp/language/value_initialization/)
- [zero initialization](/cpp/language/zero_initialization/)
- [C documentation](/c/language/struct_initialization/)
