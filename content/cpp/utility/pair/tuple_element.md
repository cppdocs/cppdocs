---
title: "std::tuple_element<std::pair>"
source_path: "cpp/utility/pair/tuple_element"
header: "<utility>"
category: "utility"
since: "C++11"
---

The partial specializations of [std::tuple_element](/cpp/utility/tuple_element/) for pairs provide compile-time access to the types of the pair's elements, using tuple-like syntax. The program is ill-formed if I >= 2.

## Declarations
```cpp
template< std::size_t I, class T1, class T2 >
struct tuple_element<I, std::pair<T1, T2>>;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <string>
#include <tuple>
 
namespace detail
{
    template<std::size_t>
    struct index_tag { constexpr explicit index_tag() = default; };
 
    template<class T, class U>
    constexpr T get_val_dispatch(std::pair<T, U> const& pair, index_tag<0>)
    {
        return pair.first;
    }
 
    template<class T, class U>
    constexpr U get_val_dispatch(std::pair<T, U> const& pair, index_tag<1>)
    {
        return pair.second;
    }
} // namespace detail
 
template<std::size_t N, class T, class U>
auto constexpr get_val(std::pair<T, U> const& pair)
    -> typename std::tuple_element<N, std::pair<T, U>>::type
{
    return detail::get_val_dispatch(pair, detail::index_tag<N>{});
}
 
int main()
{
    auto var = std::make_pair(1, std::string{"one"});
 
    std::cout << get_val<0>(var) << " = " << get_val<1>(var);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2974 | C++11 | out-of-bounds index referred the undefined primary template | made ill-formed (hard error) |

## See also
- [Structured binding](/cpp/language/structured_binding/)
- [std::tuple_element<std::tuple>](/cpp/utility/tuple/tuple_element/)
- [std::tuple_element<std::array>](/cpp/container/array/tuple_element/)
- [std::tuple_element<std::ranges::subrange>](/cpp/ranges/subrange/tuple_element/)
- [std::ranges::subrange](/cpp/ranges/subrange/)
- [std::tuple_size<std::pair>](/cpp/utility/pair/tuple_size/)
