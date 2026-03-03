---
title: "std::is_rvalue_reference"
source_path: "cpp/types/is_rvalue_reference"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_rvalue_reference is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_rvalue_reference;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <type_traits>
 
class A {};
 
static_assert
(
    std::is_rvalue_reference_v<A> == false and
    std::is_rvalue_reference_v<A&> == false and
    std::is_rvalue_reference_v<A&&> != false and
    std::is_rvalue_reference_v<char> == false and
    std::is_rvalue_reference_v<char&> == false and
    std::is_rvalue_reference_v<char&&> != false
);
 
template <typename T>
void test(T&& x)
{
    static_assert(std::is_same_v<T&&, decltype(x)>);
    std::cout << "T\t" << std::is_rvalue_reference<T>::value << '\n';
    std::cout << "T&&\t" << std::is_rvalue_reference<T&&>::value << '\n';
    std::cout << "decltype(x)\t" << std::is_rvalue_reference<decltype(x)>::value << '\n';
}
 
int main()
{
    std::cout << std::boolalpha;
    std::cout << "A\t" << std::is_rvalue_reference<A>::value << '\n';
    std::cout << "A&\t" << std::is_rvalue_reference<A&>::value << '\n';
    std::cout << "A&&\t" << std::is_rvalue_reference<A&&>::value << '\n';
    std::cout << "char\t" << std::is_rvalue_reference<char>::value << '\n';
    std::cout << "char&\t" << std::is_rvalue_reference<char&>::value << '\n';
    std::cout << "char&&\t" << std::is_rvalue_reference<char&&>::value << '\n';
 
    std::cout << "\ntest(42)\n";
    test(42);
 
    std::cout << "\ntest(x)\n";
    int x = 42;
    test(x);
}
```

## See also
- [is_lvalue_reference](/cpp/types/is_lvalue_reference/)
- [is_reference](/cpp/types/is_reference/)
