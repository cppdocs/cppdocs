---
title: "std::conjunction"
source_path: "cpp/types/conjunction"
header: "<type_traits>"
category: "types"
since: "C++17"
---

Forms the [logical conjunction](https://en.wikipedia.org/wiki/logical_conjunction) of the type traits B..., effectively performing a logical AND on the sequence of traits.

## Declarations
```cpp
template< class... B >
struct conjunction;
```
_(since C++17)_

## Notes
A specialization of conjunction does not necessarily inherit from either [std::true_type](/cpp/types/integral_constant/) or [std::false_type](/cpp/types/integral_constant/): it simply inherits from the first B whose ::value, explicitly converted to bool, is false, or from the very last B when all of them convert to true. For example, std::conjunction<[std::integral_constant](/cpp/types/integral_constant/)<int, 2>, [std::integral_constant](/cpp/types/integral_constant/)<int, 4>>::value is 4.

The short-circuit instantiation differentiates conjunction from [fold expressions](/cpp/language/fold/): a fold expression, like (... && Bs::value), instantiates every B in Bs, while std::conjunction_v<Bs...> stops instantiation once the value can be determined. This is particularly useful if the later type is expensive to instantiate or can cause a hard error when instantiated with the wrong type.

## Example
```cpp
#include <iostream>
#include <type_traits>
 
// func is enabled if all Ts... have the same type as T
template<typename T, typename... Ts>
std::enable_if_t<std::conjunction_v<std::is_same<T, Ts>...>>
func(T, Ts...)
{
    std::cout << "All types in pack are the same.\n";
}
 
// otherwise
template<typename T, typename... Ts>
std::enable_if_t<!std::conjunction_v<std::is_same<T, Ts>...>>
func(T, Ts...)
{
    std::cout << "Not all types in pack are the same.\n";
}
 
template<typename T, typename... Ts>
constexpr bool all_types_are_same = std::conjunction_v<std::is_same<T, Ts>...>;
 
static_assert(all_types_are_same<int, int, int>);
static_assert(not all_types_are_same<int, int&, int>);
 
int main()
{
    func(1, 2, 3);
    func(1, 2, "hello!");
}
```

## See also
- [negation](/cpp/types/negation/)
- [disjunction](/cpp/types/disjunction/)
