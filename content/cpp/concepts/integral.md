---
title: "std::integral"
source_path: "cpp/concepts/integral"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept integral<T> is satisfied if and only if T is an integral type.

## Declarations
```cpp
template< class T >
concept integral = std::is_integral_v<T>;
```
_(since C++20)_

## Example
```cpp
#include <concepts>
#include <iostream>
 
void print(std::integral auto i)
{
    std::cout << "Integral: " << i << '\n';
}
 
void print(auto x)
{
    std::cout << "Non-integral: " << x << '\n';
}
 
int main()
{
    std::cout << std::boolalpha;
 
    static_assert(std::integral<bool>);
    print(true);
 
    static_assert(std::integral<char>);
    print('o');
 
    static_assert(std::integral<int>);
    print(007);
 
    static_assert( ! std::integral<double> );
    print(2e2);
 
    static_assert( ! std::integral<decltype("")> );
    print("∫∫∫");
}
```

## See also
- [is_integral](/cpp/types/is_integral/)
