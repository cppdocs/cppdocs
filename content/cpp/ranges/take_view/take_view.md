---
title: "std::ranges::take_view<V>::take_view"
source_path: "cpp/ranges/take_view/take_view"
category: "ranges"
since: "C++20"
---

Constructs a take_view.

## Declarations
```cpp
take_view() requires std::default_initializable<V> = default;
```
_(since C++20)_

```cpp
constexpr explicit take_view( V base, ranges::range_difference_t<V> count );
```
_(since C++20)_

## Parameters
- `base`: the underlying view
- `count`: number of elements to take

## Example
```cpp
#include <bit>
#include <bitset>
#include <iomanip>
#include <iostream>
#include <limits>
#include <ranges>
 
constexpr unsigned clog2(auto x) // ≈ ⌈ log₂(x) ⌉
{
    return std::numeric_limits<decltype(x)>::digits - std::countl_zero(x);
}
 
template<unsigned Count>
struct FirstPrimes
{
    static constexpr int count = Count;
 
    constexpr bool operator()(int n) // is prime?
    {
        return n < 2 ? false :
               n == 2 ? true :
               n % 2 == 0 or bits_.test(n / 2) ? false : true;
    }
private:
    consteval static auto init()
    {
        std::bitset<size_ / 2 + 1> bits;
        for (int n{3}; n < size_; n += 2)
            for (int i{n}, j{3}, k{}; (k = i * j) < size_; j += 2)
                bits.set(k / 2);
        return bits;
    }
 
    // Keep only odd numbers; 0 means it is a prime
    constexpr static auto bits_ { init() };
 
    // a(n) <= n * (log(n) + log(log(n)))
    static constexpr int size_ = Count * (clog2(Count) + clog2(clog2(Count)));
};
 
int main()
{
    constexpr FirstPrimes<42> primes;
 
    auto primes_view = std::ranges::take_view{ std::views::iota(1)
                                             | std::views::filter(primes)
                                             , primes.count };
 
    std::cout << "First " << primes.count << " prime numbers are:\n";
    for (int new_line{1}; const int prime : primes_view)
        std::cout << std::setw(3) << prime << (new_line++ % 7 ? ' ' : '\n');
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3714(P2711R1) | C++20 | the multi-parameter constructor was not explicit | made explicit |
