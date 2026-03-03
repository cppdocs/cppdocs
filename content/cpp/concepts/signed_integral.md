---
title: "std::signed_integral"
source_path: "cpp/concepts/signed_integral"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept signed_integral<T> is satisfied if and only if T is an integral type and [std::is_signed_v](/cpp/types/is_signed/)<T> is true.

## Declarations
```cpp
template< class T >
concept signed_integral = std::integral<T> && std::is_signed_v<T>;
```
_(since C++20)_

## Notes
signed_integral<T> may be satisfied by a type that is not a [signed integer type](/cpp/language/type-id/#Type_classification), for example, char (on a system where char is signed).

## Example
```cpp
#include <concepts>
#include <iostream>
#include <string_view>
 
void test(std::signed_integral auto x, std::string_view text = "")
{
    std::cout << text << " (" + (text == "") << x << ") is a signed integral\n";
}
 
void test(std::unsigned_integral auto x, std::string_view text = "")
{
    std::cout << text << " (" + (text == "") << x << ") is an unsigned integral\n";
}
 
void test(auto x, std::string_view text = "")
{
    std::cout << text << " (" + (text == "") << x << ") is non-integral\n";
}
 
int main()
{
    test(42);               // signed
    test(0xFULL, "0xFULL"); // unsigned
    test('A');              // platform-dependent
    test(true, "true");     // unsigned
    test(4e-2, "4e-2");     // non-integral (hex-float)
    test("∫∫");             // non-integral
}
```

## See also
- [is_integral](/cpp/types/is_integral/)
- [is_signed](/cpp/types/is_signed/)
