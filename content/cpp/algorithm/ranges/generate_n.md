---
title: "std::ranges::generate_n"
source_path: "cpp/algorithm/ranges/generate_n"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Assigns the result of successive invocations of the function object gen to each element in the range [first,first + n), if 0 < n. Does nothing otherwise.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_or_output_iterator O, std::copy_constructible F >
requires std::invocable<F&> && std::indirectly_writable<O, std::invoke_result_t<F&>>
constexpr O
generate_n( O first, std::iter_difference_t<O> n, F gen );
```
_(since C++20)_

## Parameters
- `first`: the beginning of the range of elements to modify
- `n`: number of elements to modify
- `gen`: the generator function object.

## Return value
Iterator one past the last element assigned if 0 < count, first otherwise.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <random>
#include <string_view>
 
auto dice()
{
    static std::uniform_int_distribution<int> distr {1, 6};
    static std::random_device engine;
    static std::mt19937 noise {engine()};
    return distr(noise);
}
 
void print(const auto& v, std::string_view comment)
{
    for (int i : v)
        std::cout << i << ' ';
    std::cout << '(' << comment << ")\n";
}
 
int main()
{
    std::array<int, 8> v;
 
    std::ranges::generate_n(v.begin(), v.size(), dice);
    print(v, "dice");
 
    std::ranges::generate_n(v.begin(), v.size(), [n {0}] mutable { return n++; });
    // same effect as std::iota(v.begin(), v.end(), 0);
    print(v, "iota");
}
```

## See also
- [ranges::generate](/cpp/algorithm/ranges/generate/)
- [ranges::generate_random](/cpp/algorithm/ranges/generate_random/)
- [ranges::fill](/cpp/algorithm/ranges/fill/)
- [ranges::fill_n](/cpp/algorithm/ranges/fill_n/)
- [ranges::transform](/cpp/algorithm/ranges/transform/)
- [generate_n](/cpp/algorithm/generate_n/)
