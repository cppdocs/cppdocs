---
title: "std::construct_at"
source_path: "cpp/memory/construct_at"
header: "<memory>"
category: "memory"
since: "C++20"
---

Creates a T object initialized with the arguments in args at given address location.

## Declarations
```cpp
template< class T, class... Args >
constexpr T* construct_at( T* location, Args&&... args );
```
_(since C++20)_

## Parameters
- `location`: pointer to the uninitialized storage on which a T object will be constructed
- `args...`: arguments used for initialization

## Return value
location

## Example
```cpp
#include <bit>
#include <memory>
 
class S
{
    int x_;
    float y_;
    double z_;
public:
    constexpr S(int x, float y, double z) : x_{x}, y_{y}, z_{z} {}
    [[nodiscard("no side-effects!")]]
    constexpr bool operator==(const S&) const noexcept = default;
};
 
consteval bool test()
{
    alignas(S) unsigned char storage[sizeof(S)]{};
    S uninitialized = std::bit_cast<S>(storage);
    std::destroy_at(&uninitialized);
    S* ptr = std::construct_at(std::addressof(uninitialized), 42, 2.71f, 3.14);
    const bool res{*ptr == S{42, 2.71f, 3.14}};
    std::destroy_at(ptr);
    return res;
}
static_assert(test());
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3436 | C++20 | construct_at could not create objects of array types | can value-initialize bounded arrays |
| LWG 3870 | C++20 | construct_at could create objects of cv-qualified types | only cv-unqualified types are permitted |

## See also
- [allocate](/cpp/memory/allocator/allocate/)
- [construct](/cpp/memory/allocator_traits/construct/)
- [destroy_at](/cpp/memory/destroy_at/)
- [ranges::construct_at](/cpp/memory/ranges/construct_at/)
