---
title: "List-initialization (since C++11)"
source_path: "cpp/language/list_initialization"
category: "language"
since: "C++11"
---

Initializes an object from a [brace-enclosed initializer list](/cpp/language/initialization/).

## Notes
Every initializer clause is [sequenced before](/cpp/language/eval_order/) any initializer clause that follows it in the brace-enclosed initializer list. This is in contrast with the arguments of a [function call expression](/cpp/language/operator_other/#Built-in_function_call_operator), which are [unsequenced](/cpp/language/eval_order/)(until C++17)[indeterminately sequenced](/cpp/language/eval_order/)(since C++17).

A brace-enclosed initializer list is not an expression and therefore has no type, e.g. decltype({1, 2}) is ill-formed. Having no type implies that template type deduction cannot deduce a type that matches a brace-enclosed initializer list, so given the declaration template<class T> void f(T); the expression f({1, 2, 3}) is ill-formed. However, the template parameter can otherwise be deduced, as is the case for [std::vector](/cpp/container/vector/)<int> v([std::istream_iterator](/cpp/iterator/istream_iterator/)<int>([std::cin](/cpp/io/cin/)), {}), where the iterator type is deduced by the first argument but also used in the second parameter position. A special exception is made for [type deduction using the keyword auto](/cpp/language/template_argument_deduction/#Other_contexts), which deduces any brace-enclosed initializer list as [std::initializer_list](/cpp/utility/initializer_list/) in copy-list-initialization.

Also because a brace-enclosed initializer list has no type, [special rules for overload resolution](/cpp/language/overload_resolution/#Implicit_conversion_sequence_in_list-initialization) apply when it is used as an argument to an overloaded function call.

Aggregates copy/move initialize directly from brace-enclosed initializer list of a single initializer clause of the same type, but non-aggregates consider [std::initializer_list](/cpp/utility/initializer_list/) constructors first:

Some compilers (e.g., gcc 10) only consider conversion from a pointer or a pointer-to-member to bool narrowing in C++20 mode.

## Example
```cpp
#include <iostream>
#include <map>
#include <string>
#include <vector>
 
struct Foo
{
    std::vector<int> mem = {1, 2, 3}; // list-initialization of a non-static member
    std::vector<int> mem2;
 
    Foo() : mem2{-1, -2, -3} {} // list-initialization of a member in constructor
};
 
std::pair<std::string, std::string> f(std::pair<std::string, std::string> p)
{
    return {p.second, p.first}; // list-initialization in return statement
}
 
int main()
{
    int n0{};  // value-initialization (to zero)
    int n1{1}; // direct-list-initialization
 
    std::string s1{'a', 'b', 'c', 'd'}; // initializer-list constructor call
    std::string s2{s1, 2, 2};           // regular constructor call
    std::string s3{0x61, 'a'}; // initializer-list ctor is preferred to (int, char)
 
    int n2 = {1}; // copy-list-initialization
    double d = double{1.2}; // list-initialization of a prvalue, then copy-init
    auto s4 = std::string{"HelloWorld"}; // same as above, no temporary
                                         // created since C++17
 
    std::map<int, std::string> m = // nested list-initialization
    {
        {1, "a"},
        {2, {'a', 'b', 'c'}},
        {3, s1}
    };
 
    std::cout << f({"hello", "world"}).first // list-initialization in function call
              << '\n';
 
    const int (&ar)[2] = {1, 2}; // binds an lvalue reference to a temporary array
    int&& r1 = {1}; // binds an rvalue reference to a temporary int
//  int& r2 = {2}; // error: cannot bind rvalue to a non-const lvalue ref
 
//  int bad{1.0}; // error: narrowing conversion
    unsigned char uc1{10}; // okay
//  unsigned char uc2{-1}; // error: narrowing conversion
 
    Foo f;
 
    std::cout << n0 << ' ' << n1 << ' ' << n2 << '\n'
              << s1 << ' ' << s2 << ' ' << s3 << '\n';
    for (auto p : m)
        std::cout << p.first << ' ' << p.second << '\n';
    for (auto n : f.mem)
        std::cout << n << ' ';
    for (auto n : f.mem2)
        std::cout << n << ' ';
    std::cout << '\n';
 
    [](...){}(d, ar, r1, uc1); // has effect of [[maybe_unused]]
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 1288 | C++11 | list-initializing a reference with a brace-enclosed initializer list of asingle initializer clause always bound the reference to a temporary | bind to that initializerclause if valid |
| CWG 1290 | C++11 | the lifetime of the backing array was not correctly specified | specified same as othertemporary objects |
| CWG 1324 | C++11 | initialization considered first for initialization from {} | aggregate initializationconsidered first |
| CWG 1418 | C++11 | the type of the backing array lacked const | const added |
| CWG 1467 | C++11 | same-type initialization of aggregates and characterarrays was prohibited; initializer-list constructors hadpriority over copy constructors for single-clause lists | same-type initializationallowed; single-clauselists initialize directly |
| CWG 1494 | C++11 | when list-initializing a reference with an initializer clause of anincompatible type, it was unspecified whether the temporarycreated is direct-list-initialized or copy-list-initialized | it depends on thekind of initializationfor the reference |
| CWG 2137 | C++11 | initializer-list constructors lost to copyconstructors when list-initializing X from {X} | non-aggregates considerinitializer-lists first |
| CWG 2252 | C++17 | enumerations could be list-initialized from non-scalar values | prohibited |
| CWG 2267 | C++11 | the resolution of CWG issue 1494 made clearthat temporaries could be direct-list-initialized | they are copy-list-initializedwhen list-initializing references |
| CWG 2374 | C++17 | direct-list-initialization of an enum allowed too many source types | restricted |
| CWG 2627 | C++11 | a narrow bit-field of a larger integer type can be promoted toa smaller integer type, but it was still a narrowing conversion | it is not anarrowing conversion |
| CWG 2713 | C++20 | references to aggregate classes could notbe initialized by designated initializer lists | allowed |
| CWG 2830 | C++11 | list-initialization did not ignore the top-level cv-qualification | ignores |
| CWG 2864 | C++11 | floating-point conversions that overflow were not narrowing | they are narrowing |
| P1957R2 | C++11 | conversion from a pointer/pointer-to-memberto bool was not narrowing | considered narrowing |
| P2752R3 | C++11 | backing arrays with overlapping lifetime could not overlap | they may overlap |

## See also
- [constructor](/cpp/language/initializer_list/)
- [converting constructor](/cpp/language/converting_constructor/)
- [copy assignment](/cpp/language/as_operator/)
- [copy constructor](/cpp/language/copy_constructor/)
- [copy elision](/cpp/language/copy_elision/)
- [default constructor](/cpp/language/default_constructor/)
- [explicit](/cpp/language/explicit/)
- [initialization](/cpp/language/initialization/)
- [aggregate initialization](/cpp/language/aggregate_initialization/)
- [constant initialization](/cpp/language/constant_initialization/)
- [copy initialization](/cpp/language/copy_initialization/)
- [direct initialization](/cpp/language/direct_initialization/)
- [reference initialization](/cpp/language/reference_initialization/)
- [value initialization](/cpp/language/value_initialization/)
- [zero initialization](/cpp/language/zero_initialization/)
- [move assignment](/cpp/language/move_operator/)
- [move constructor](/cpp/language/move_constructor/)
- [new](/cpp/language/new/)
