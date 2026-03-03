---
title: "Fold expressions (since C++17)"
source_path: "cpp/language/fold"
category: "language"
since: "C++17"
---

Reduces ([folds](https://en.wikipedia.org/wiki/Fold_(higher-order_function))) a [pack](/cpp/language/parameter_pack/) over a binary operator.

## Notes
If the expression used as init or as pack has an operator with [precedence](/cpp/language/operator_precedence/) below cast at the top level, it must be parenthesized:

## Example
```cpp
#include <climits>
#include <concepts>
#include <cstdint>
#include <iostream>
#include <limits>
#include <type_traits>
#include <utility>
#include <vector>
 
// Basic usage, folding variadic arguments over operator<< 
template<typename... Args>
void printer(Args&&... args)
{
    (std::cout << ... << args) << '\n';
}
 
// Folding an expression that uses the pack directly over operator,
template<typename... Ts>
void print_limits()
{
    ((std::cout << +std::numeric_limits<Ts>::max() << ' '), ...) << '\n';
}
 
// Both a fold over operator&& using the pack
// and over operator, using the variadic arguments
template<typename T, typename... Args>
void push_back_vec(std::vector<T>& v, Args&&... args)
{
    static_assert((std::is_constructible_v<T, Args&&> && ...));
    (v.push_back(std::forward<Args>(args)), ...);
}
 
// Using an integer sequence to execute an expression
// N times by folding a lambda over operator,
template<class T, std::size_t... dummy_pack>
constexpr T bswap_impl(T i, std::index_sequence<dummy_pack...>)
{
    T low_byte_mask = static_cast<unsigned char>(-1);
    T ret{};
    ([&]
    {
        (void)dummy_pack;
        ret <<= CHAR_BIT;
        ret |= i & low_byte_mask;
        i >>= CHAR_BIT;
    }(), ...);
    return ret;
}
 
constexpr auto bswap(std::unsigned_integral auto i)
{
    return bswap_impl(i, std::make_index_sequence<sizeof(i)>{});
}
 
int main()
{
    printer(1, 2, 3, "abc");
    print_limits<uint8_t, uint16_t, uint32_t>();
 
    std::vector<int> v;
    push_back_vec(v, 6, 2, 45, 12);
    push_back_vec(v, 1, 2, 9);
    for (int i : v)
        std::cout << i << ' ';
    std::cout << '\n';
 
    static_assert(bswap<std::uint16_t>(0x1234u) == 0x3412u);
    static_assert(bswap<std::uint64_t>(0x0123456789abcdefull) == 0xefcdab8967452301ULL);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2611 | C++17 | the expansion results of fold expressions were not enclosed with parentheses | enclosed with parentheses |
