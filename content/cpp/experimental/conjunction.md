---
title: "std::experimental::conjunction"
source_path: "cpp/experimental/conjunction"
header: "<experimental/type_traits>"
category: "experimental"
---

Forms the [logical conjunction](https://en.wikipedia.org/wiki/Logical_conjunction) of the type traits B..., effectively performing a logical AND on the sequence of traits.

## Declarations
```cpp
template< class... B >
struct conjunction;
```
_(library fundamentals TS v2)_

## Notes
A specialization of conjunction does not necessarily inherit from either [std::true_type](/cpp/types/integral_constant/) or [std::false_type](/cpp/types/integral_constant/): it simply inherits from the first B whose ::value, converted to bool, is false, or from the very last B when all of them convert to true. For example, conjunction<[std::integral_constant](/cpp/types/integral_constant/)<int, 2>, [std::integral_constant](/cpp/types/integral_constant/)<int, 4>>::value is 4.

## Example
```cpp
#include <experimental/type_traits>
#include <iostream>
 
// func is enabled if all Ts... have the same type
template<typename T, typename... Ts>
constexpr std::enable_if_t<std::experimental::conjunction_v<std::is_same<T, Ts>...>>
func(T, Ts...)
{
    std::cout << "All types are the same.\n";
}
 
template<typename T, typename... Ts>
constexpr std::enable_if_t<!std::experimental::conjunction_v<std::is_same<T, Ts>...>>
func(T, Ts...)
{
    std::cout << "Types differ.\n";
}
 
int main()
{
    func(1, 2'7, 3'1);    
    func(1, 2.7, '3');    
}
```

## See also
- [conjunction](/cpp/types/conjunction/)
