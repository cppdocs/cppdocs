---
title: "std::atomic_ref<T>::atomic_ref"
source_path: "cpp/atomic/atomic_ref/atomic_ref"
category: "atomic"
---

Constructs a new atomic_ref object.

## Declarations
```cpp
explicit atomic_ref( T& obj );
```
_(constexpr since C++26)_

```cpp
atomic_ref( const atomic_ref& ref ) noexcept;
```
_(constexpr since C++26)_

## Parameters
- `obj`: object to reference
- `ref`: another atomic_ref object to copy from

## Example
```cpp
#include <atomic>
#include <iostream>
#include <numeric>
#include <thread>
#include <vector>
 
int main()
{
    using Data = std::vector<char>;
 
    auto inc_atomically = [](Data& data)
    {
        for (Data::value_type& x : data)
        {
            auto xx = std::atomic_ref<Data::value_type>(x);
            ++xx; // atomic read-modify-write
        }
    };
 
    auto inc_directly = [](Data& data)
    {
        for (Data::value_type& x : data)
            ++x;
    };
 
    auto test_run = [](const auto Fun)
    {
        Data data(10'000'000);
        {
            std::jthread j1{Fun, std::ref(data)};
            std::jthread j2{Fun, std::ref(data)};
            std::jthread j3{Fun, std::ref(data)};
            std::jthread j4{Fun, std::ref(data)};
        }
        std::cout << "sum = " << std::accumulate(cbegin(data), cend(data), 0) << '\n';
    };
 
    test_run(inc_atomically);
    test_run(inc_directly);
}
```
