---
title: "Structured binding declaration (since C++17)"
source_path: "cpp/language/structured_binding"
category: "language"
since: "C++17"
---

Binds the specified names to subobjects or elements of the initializer.

## Notes
Structured bindings cannot be [constrained](/cpp/language/constraints/):

The lookup for member get ignores accessibility as usual and also ignores the exact type of the non-type template parameter. A private template<char*> void get(); member will cause the member interpretation to be used, even though it is ill-formed.

The portion of the declaration preceding [ applies to the hidden variable e, not to the introduced structured bindings:

The tuple-like interpretation is always used if [std::tuple_size](/cpp/utility/tuple_size/)<E> is a complete type with a member named value, even if that would cause the program to be ill-formed:

The usual rules for reference-binding to temporaries (including lifetime-extension) apply if a ref-qualifier is present and the expression is a prvalue. In those cases the hidden variable e is a reference that binds to the temporary variable [materialized](/cpp/language/implicit_cast/#Temporary_materialization) from the prvalue expression, extending its lifetime. As usual, the binding will fail if e is a non-const lvalue reference:

decltype(x), where x denotes a structured binding, names the referenced type of that structured binding. In the tuple-like case, this is the type returned by std::tuple_element, which may not be a reference even though a hidden reference is always introduced in this case. This effectively emulates the behavior of binding to a struct whose non-static data members have the types returned by std::tuple_element, with the referenceness of the binding itself being a mere implementation detail.

Structured bindings cannot be captured by [lambda expressions](/cpp/language/lambda/):

A structured binding size is allowed to be 0 as long as the sb-identifier-list contains exactly one identifier that can only introduce an empty structured binding pack.

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <set>
#include <string>
 
int main()
{
    std::set<std::string> myset{"hello"};
 
    for (int i{2}; i; --i)
    {
        if (auto [iter, success] = myset.insert("Hello"); success) 
            std::cout << "Insert is successful. The value is "
                      << std::quoted(*iter) << ".\n";
        else
            std::cout << "The value " << std::quoted(*iter)
                      << " already exists in the set.\n";
    }
 
    struct BitFields
    {
        // C++20: default member initializer for bit-fields
        int b : 4 {1}, d : 4 {2}, p : 4 {3}, q : 4 {4};
    };
 
    {
        const auto [b, d, p, q] = BitFields{};
        std::cout << b << ' ' << d << ' ' << p << ' ' << q << '\n';
    }
 
    {
        const auto [b, d, p, q] = []{ return BitFields{4, 3, 2, 1}; }();
        std::cout << b << ' ' << d << ' ' << p << ' ' << q << '\n';
    }
 
    {
        BitFields s;
 
        auto& [b, d, p, q] = s;
        std::cout << b << ' ' << d << ' ' << p << ' ' << q << '\n';
 
        b = 4, d = 3, p = 2, q = 1;
        std::cout << s.b << ' ' << s.d << ' ' << s.p << ' ' << s.q << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2285 | C++17 | expression could refer to the names from identifier-list | the declaration isill-formed in this case |
| CWG 2312 | C++17 | the meaning of mutable was lost in case 3 | its meaning is still kept |
| CWG 2313 | C++17 | in case 2, the structure binding variables could be redeclared | cannot be redeclared |
| CWG 2339 | C++17 | in case 2, the definition of I was missing | added the definition |
| CWG 2341(P1091R3) | C++17 | structured bindings could not bedeclared with static storage duration | allowed |
| CWG 2386 | C++17 | the “tuple-like” binding protocol was usedwhenever std::tuple_size<E> is a complete type | used only when std::tuple_size<E>has a member value |
| CWG 2506 | C++17 | if expression is of a cv-qualified array type,the cv-qualification was carried over to E | discards that cv-qualification |
| CWG 2635 | C++20 | structured bindings could be constrained | prohibited |
| CWG 2867 | C++17 | the initialization order was unclear | made clear |
| P0961R1 | C++17 | in case 2, member get was usedif lookup finds a get of any kind | only if lookup finds a functiontemplate with a non-type parameter |
| P0969R0 | C++17 | in case 3, the members were required to be public | only required to be accessiblein the context of the declaration |

## See also
- [tie](/cpp/utility/tuple/tie/)
- [tuple](/cpp/utility/tuple/)
