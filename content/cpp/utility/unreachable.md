---
title: "std::unreachable"
source_path: "cpp/utility/unreachable"
header: "<utility>"
category: "utility"
since: "C++23"
---

Invokes [undefined behavior](/cpp/language/ub/) at a given point.

## Declarations
```cpp
[[noreturn]] void unreachable();
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_unreachable
202202L
(C++23)
std::unreachable

## Example
```cpp
#include <cassert>
#include <cstddef>
#include <cstdint>
#include <utility>
#include <vector>
 
struct Color { std::uint8_t r, g, b, a; };
 
// Assume that only restricted set of texture caps is supported.
void generate_texture(std::vector<Color>& tex, std::size_t xy)
{
    switch (xy)
    {
    case 128: [[fallthrough]];
    case 256: [[fallthrough]];
    case 512: /* ... */
        tex.clear();
        tex.resize(xy * xy, Color{0, 0, 0, 0});
        break;
    default:
        std::unreachable();
    }
}
 
int main()
{
    std::vector<Color> tex;
    generate_texture(tex, 128); // OK
    assert(tex.size() == 128 * 128);
    generate_texture(tex, 32);  // Results in undefined behavior
}
```

## See also
- [assume](/cpp/language/attributes/assume/)
- [assume_aligned](/cpp/memory/assume_aligned/)
- [C documentation](/c/program/unreachable/)
