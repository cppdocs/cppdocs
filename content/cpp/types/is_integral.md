---
title: "std::is_integral"
source_path: "cpp/types/is_integral"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_integral is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_integral;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
 
static_assert
(
    std::is_integral_v<float> == false &&
    std::is_integral_v<int*> == false &&
    std::is_integral_v<int> == true &&
    std::is_integral_v<const int> == true &&
    std::is_integral_v<bool> == true &&
    std::is_integral_v<char> == true
);
 
class A {};
static_assert(std::is_integral_v<A> == false);
 
struct B { int x:4; };
static_assert(std::is_integral_v<B> == false);
using BF = decltype(B::x); // bit-field's type
static_assert(std::is_integral_v<BF> == true);
 
enum E : int {};
static_assert(std::is_integral_v<E> == false);
 
template <class T>
constexpr T same(T i)
{
    static_assert(std::is_integral<T>::value, "Integral required.");
    return i;
}
static_assert(same('"') == 042);
 
int main() {}
```

## See also
- [integral](/cpp/concepts/integral/)
- [is_integer](/cpp/types/numeric_limits/is_integer/)
- [is_floating_point](/cpp/types/is_floating_point/)
- [is_arithmetic](/cpp/types/is_arithmetic/)
- [is_enum](/cpp/types/is_enum/)
