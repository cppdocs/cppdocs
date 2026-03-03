---
title: "std::ranges::transform_view<V,F>::transform_view"
source_path: "cpp/ranges/transform_view/transform_view"
category: "ranges"
since: "C++20"
---

Constructs a transform_view.

## Declarations
```cpp
transform_view() requires std::default_initializable<V> &&
std::default_initializable<F> = default;
```
_(since C++20)_

```cpp
constexpr explicit transform_view( V base, F fun );
```
_(since C++20)_

## Parameters
- `base`: view
- `fun`: transformation function

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <numbers>
#include <numeric>
#include <ranges>
 
int main()
{
    std::cout << std::setprecision(15) << std::fixed;
    auto atan1term = std::ranges::views::transform(
        [](int n) { return ((n % 2) ? -1 : 1) * 1.0 / (2 * n + 1); }
    );
    for (const int iterations : {1, 2, 3, 4, 5, 10, 100, 1000, 1'000'000})
    {
        auto seq = std::ranges::views::iota(0, iterations) | atan1term;
        const double accum = std::accumulate(seq.begin(), seq.end(), 0.0);
        std::cout << "π ≈ " << 4 * accum << " (iterations: " << iterations << ")\n";
    }
    std::cout << "π ≈ " << std::numbers::pi << " (std::numbers::pi)\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3714(P2711R1) | C++20 | the multi-parameter constructor was not explicit | made explicit |
| P2325R3 | C++20 | if F is not default_initializable, the default constructorconstructs a transform_view which does not contain an F | the transform_view is alsonot default_initializable |
