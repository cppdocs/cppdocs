---
title: "Range-based for loop (since C++11)"
source_path: "cpp/language/range-for"
category: "language"
since: "C++11"
---

Executes a for loop over a range.

## Notes
If the range-initializer is a [braced-enclosed initializer list](/cpp/language/initialization/), /* range */ is deduced to be a reference to a [std::initializer_list](/cpp/utility/initializer_list/).

It is safe, and in fact, preferable in generic code, to use deduction to forwarding reference, for (auto&& var : sequence).

The member interpretation is used if the range type has a member named “begin” and a member named “end”. This is done regardless of whether the member is a type, data member, function, or enumerator, and regardless of its accessibility. Thus a class like class meow { enum { begin = 1, end = 2 }; /* rest of class */ }; cannot be used with the range-based for loop even if the namespace-scope “begin”/“end” functions are present.

While the variable declared in the item-declaration is usually used in the statement, doing so is not required.

As of C++17, the types of the /* begin-expr */ and the /* end-expr */ do not have to be the same, and in fact the type of the /* end-expr */ does not have to be an iterator: it just needs to be able to be compared for inequality with one. This makes it possible to delimit a range by a predicate (e.g. "the iterator points at a null character").

When used with a (non-const) object that has copy-on-write semantics, the range-based for loop may trigger a deep copy by (implicitly) calling the non-const begin() member function.

If that is undesirable (for instance because the loop is not actually modifying the object), it can be avoided by using [std::as_const](/cpp/utility/as_const/):

## Example
```cpp
#include <iostream>
#include <vector>
 
int main()
{
    std::vector<int> v = {0, 1, 2, 3, 4, 5};
 
    for (const int& i : v) // access by const reference
        std::cout << i << ' ';
    std::cout << '\n';
 
    for (auto i : v) // access by value, the type of i is int
        std::cout << i << ' ';
    std::cout << '\n';
 
    for (auto&& i : v) // access by forwarding reference, the type of i is int&
        std::cout << i << ' ';
    std::cout << '\n';
 
    const auto& cv = v;
 
    for (auto&& i : cv) // access by f-d reference, the type of i is const int&
        std::cout << i << ' ';
    std::cout << '\n';
 
    for (int n : {0, 1, 2, 3, 4, 5}) // the initializer may be a
                                     // braced-enclosed initializer list
        std::cout << n << ' ';
    std::cout << '\n';
 
    int a[] = {0, 1, 2, 3, 4, 5};
    for (int n : a) // the initializer may be an array
        std::cout << n << ' ';
    std::cout << '\n';
 
    for ([[maybe_unused]] int n : a)  
        std::cout << 1 << ' '; // the loop variable need not be used
    std::cout << '\n';
 
    for (auto n = v.size(); auto i : v) // the init-statement (C++20)
        std::cout << --n + i << ' ';
    std::cout << '\n';
 
    for (typedef decltype(v)::value_type elem_t; elem_t i : v)
    // typedef declaration as init-statement (C++20)
        std::cout << i << ' ';
    std::cout << '\n';
 
    for (using elem_t = decltype(v)::value_type; elem_t i : v)
    // alias declaration as init-statement (C++23)
        std::cout << i << ' ';
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1442 | C++11 | it was unspecified whether the lookup of non-member“begin” and “end” includes usual unqualified lookup | no usual unqualified lookup |
| CWG 2220 | C++11 | the names introduced in init-statement could be redeclared | the program is ill-formed in this case |
| CWG 2825 | C++11 | if range-initializer is a brace-enclosed initializer list,the non-member “begin” and “end” will be looked up | will lookup member “begin”and “end” in this case |
| P0962R1 | C++11 | member interpretation was used if eithermember “begin” and “end” is present | only used if both are present |

## See also
- [for_each](/cpp/algorithm/for_each/)
