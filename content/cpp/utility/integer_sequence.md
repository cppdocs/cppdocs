---
title: "std::integer_sequence"
source_path: "cpp/utility/integer_sequence"
header: "<utility>"
category: "utility"
since: "C++14"
---

The class template std::integer_sequence represents a compile-time sequence of integers. When used as an argument to a [function template](/cpp/language/function_template/), the [parameter pack](/cpp/language/parameter_pack/) Ints can be deduced and used in pack expansion.

## Declarations
```cpp
template< class T, T... Ints >
class integer_sequence;
```
_(since C++14)_

## Return value
The number of elements in Ints.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_integer_sequence
201304L
(C++14)
Compile-time integer sequences

## Example
```cpp
#include <array>
#include <cstddef>
#include <iostream>
#include <tuple>
#include <utility>
 
namespace details {
template <typename Array, std::size_t... I>
constexpr auto array_to_tuple_impl(const Array& a, std::index_sequence<I...>)
{
    return std::make_tuple(a[I]...);
}
 
template <class Ch, class Tr, class Tuple, std::size_t... Is>
void print_tuple_impl(std::basic_ostream<Ch, Tr>& os,
                      const Tuple& t,
                      std::index_sequence<Is...>)
{
    ((os << (Is ? ", " : "") << std::get<Is>(t)), ...);
}
}
 
template <typename T, T... ints>
void print_sequence(int id, std::integer_sequence<T, ints...> int_seq)
{
    std::cout << id << ") The sequence of size " << int_seq.size() << ": ";
    ((std::cout << ints << ' '), ...);
    std::cout << '\n';
}
 
template <typename T, std::size_t N, typename Indx = std::make_index_sequence<N>>
constexpr auto array_to_tuple(const std::array<T, N>& a)
{
    return details::array_to_tuple_impl(a, Indx{});
}
 
template <class Ch, class Tr, class... Args>
auto& operator<<(std::basic_ostream<Ch, Tr>& os, const std::tuple<Args...>& t)
{
    os << '(';
    details::print_tuple_impl(os, t, std::index_sequence_for<Args...>{});
    return os << ')';
}
 
int main()
{
    print_sequence(1, std::integer_sequence<unsigned, 9, 2, 5, 1, 9, 1, 6>{});
    print_sequence(2, std::make_integer_sequence<int, 12>{});
    print_sequence(3, std::make_index_sequence<10>{});
    print_sequence(4, std::index_sequence_for<std::ios, float, signed>{});
 
    constexpr std::array<int, 4> array{1, 2, 3, 4};
 
    auto tuple1 = array_to_tuple(array);
    static_assert(std::is_same_v<decltype(tuple1),
                                 std::tuple<int, int, int, int>>, "");
    std::cout << "5) tuple1: " << tuple1 << '\n';
 
    constexpr auto tuple2 = array_to_tuple<int, 4,
        std::integer_sequence<std::size_t, 1, 0, 3, 2>>(array);
    std::cout << "6) tuple2: " << tuple2 << '\n';
}
```

## See also
- [to_array](/cpp/container/array/to_array/)
- [integral_constantbool_constant](/cpp/types/integral_constant/)
