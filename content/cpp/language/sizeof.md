---
title: "sizeof operator"
source_path: "cpp/language/sizeof"
category: "language"
---

Queries size of the object or type.

## Notes
Depending on the computer architecture, a [byte](https://en.wikipedia.org/wiki/byte) may consist of 8 or more bits, the exact number being recorded in [CHAR_BIT](/cpp/types/climits/).

The following sizeof expressions always evaluate to 1:

sizeof cannot be used with function types, incomplete types, or bit-field lvalues(until C++11)glvalues(since C++11).

When applied to a reference type, the result is the size of the referenced type.

When applied to a class type, the result is the number of bytes occupied by a complete object of that class, including any additional padding required to place such object in an array. The number of bytes occupied by a [potentially-overlapping subobject](/cpp/language/objects/#Subobjects) may be less than the size of that object.

The result of sizeof is always nonzero, even if applied to an empty class type.

When applied to an expression, sizeof does [not evaluate the expression](/cpp/language/expressions/#Potentially-evaluated_expressions)(i.e. the expression is an unevaluated operand)(since C++11), and even if the expression designates a polymorphic object, the result is the size of the static type of the expression. Lvalue-to-rvalue, array-to-pointer, or function-to-pointer conversions are not performed.[Temporary materialization](/cpp/language/implicit_cast/#Temporary_materialization), however, is (formally) performed for prvalue arguments: the program is ill-formed if the argument is not destructible.(since C++17)

## Example
```cpp
#include <cstdlib>
#include <iostream>
 
struct Empty          { };
struct Base           { int a; };
struct Derived : Base { int b; };
struct Bit            { unsigned bit: 1; };
struct CharChar       { char c; char c2; };
struct CharCharInt    { char c; char c2; int i; };
struct IntCharChar    { int i;  char c;  char c2; };
struct CharIntChar    { char c; int i;   char c2; };
struct CharShortChar  { char c; short s; char c2; };
 
int main()
{
    Empty e;
    Derived d;
    Base& b = d;
    [[maybe_unused]] Bit bit;
    int a[10];
 
    auto f = [&]() { return sizeof(int[10]) == sizeof a ? throw 1 : e; };
//  f(); // the return type is Empty, but always throws 1
 
    auto println = [](auto rem, std::size_t size) { std::cout << rem << size << '\n'; };
 
    println( "1) sizeof empty class:              ", sizeof e                     );
    println( "2) sizeof pointer:                  ", sizeof &e                    );
    println( "3) sizeof(Bit) class:               ", sizeof(Bit)                  );
    println( "4) sizeof(int[10]) array of 10 int: ", sizeof(int[10])              );
    println( "5) sizeof a        array of 10 int: ", sizeof a                     );
    println( "6) length of array of 10 int:       ", ((sizeof a) / (sizeof *a))   );
    println( "7) length of array of 10 int (2):   ", ((sizeof a) / (sizeof a[0])) );
    println( "8) sizeof the Derived class:        ", sizeof d                     );
    println( "9) sizeof the Derived through Base: ", sizeof b                     );
    println( "A) sizeof(unsigned):                ", sizeof(unsigned)             );
    println( "B) sizeof(int):                     ", sizeof(int)                  );
    println( "C) sizeof(short):                   ", sizeof(short)                );
    println( "D) sizeof(char):                    ", sizeof(char)                 );
    println( "E) sizeof(CharChar):                ", sizeof(CharChar)             );
    println( "F) sizeof(CharCharInt):             ", sizeof(CharCharInt)          );
    println( "G) sizeof(IntCharChar):             ", sizeof(IntCharChar)          );
    println( "H) sizeof(CharIntChar):             ", sizeof(CharIntChar)          );
    println( "I) sizeof(CharShortChar):           ", sizeof(CharShortChar)        );
    println( "J) sizeof f():                      ", sizeof f()                   );
    println( "K) sizeof Base::a:                  ", sizeof Base::a               );
 
//  println( "sizeof function:        ", sizeof(void()) ); // error
//  println( "sizeof incomplete type: ", sizeof(int[])  ); // error
//  println( "sizeof bit-field:       ", sizeof bit.bit ); // error
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1553 | C++11 | sizeof could be used with bit-field xvalues | prohibited |

## See also
- [alignof](/cpp/language/alignof/)
- [sizeof... operator](/cpp/language/sizeof.../)
- [pack](/cpp/language/parameter_pack/)
- [numeric_limits](/cpp/types/numeric_limits/)
- [C documentation](/c/language/sizeof/)
