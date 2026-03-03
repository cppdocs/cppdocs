---
title: "std::ranges::generate"
source_path: "cpp/algorithm/ranges/generate"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

1) Assigns the result of successive invocations of the function object gen to each element in the range [first,last).

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_or_output_iterator O, std::sentinel_for<O> S,
std::copy_constructible F >
requires std::invocable<F&> && std::indirectly_writable<O, std::invoke_result_t<F&>>
constexpr O
generate( O first, S last, F gen );
```
_(since C++20)_

```cpp
template< class R, std::copy_constructible F >
requires std::invocable<F&> && ranges::output_range<R, std::invoke_result_t<F&>>
constexpr ranges::borrowed_iterator_t<R>
generate( R&& r, F gen );
```
_(since C++20)_

## Parameters
- `first, last`: the range of elements to modify
- `r`: the range of elements to modify
- `gen`: the generator function object

## Return value
An output iterator that compares equal to last.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <random>
#include <string_view>
 
auto dice()
{
    static std::uniform_int_distribution<int> distr{1, 6};
    static std::random_device device;
    static std::mt19937 engine {device()};
    return distr(engine);
}
 
void iota(auto& r, int init)
{
    std::ranges::generate(r, [init] mutable { return init++; });
}
 
void print(std::string_view comment, const auto& v)
{
    for (std::cout << comment; int i : v)
        std::cout << i << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::array<int, 8> v;
 
    std::ranges::generate(v.begin(), v.end(), dice);
    print("dice: ", v);
    std::ranges::generate(v, dice);
    print("dice: ", v);
 
    iota(v, 1);
    print("iota: ", v);
}
```

## See also
- [ranges::generate_n](/cpp/algorithm/ranges/generate_n/)
- [ranges::fill](/cpp/algorithm/ranges/fill/)
- [ranges::fill_n](/cpp/algorithm/ranges/fill_n/)
- [ranges::transform](/cpp/algorithm/ranges/transform/)
- [ranges::generate_random](/cpp/algorithm/ranges/generate_random/)
- [generate](/cpp/algorithm/generate/)
