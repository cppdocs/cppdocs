---
title: "std::any"
source_path: "cpp/utility/any"
header: "<any>"
---

The class `std::any` is a type-erased container for one value of any copy-constructible type.

## Semantics
- An `any` object either contains one value of some concrete type or is empty.
- The concrete type is hidden behind the interface and recovered dynamically with [any_cast](/cpp/utility/any/any_cast/) or inspected with [type](/cpp/utility/any/type/).
- Unlike [std::variant](/cpp/utility/variant/), the set of allowed payload types is not fixed at compile time.
- Unlike [std::optional](/cpp/utility/optional/), `any` does not model presence or absence of one known value type; it models runtime-selected type erasure.

If the caller already knows the finite set of alternatives, `variant` is usually clearer. `any` is the escape hatch for interfaces that truly need "some value, type known later".

## Declarations
```cpp
class any;
```
_(since C++17)_

## Example
```cpp
#include <any>
#include <iostream>
#include <string>
 
int main()
{
    std::any value = std::string{"hello"};
 
    if (const auto* text = std::any_cast<std::string>(&value))
        std::cout << *text << '\n';
 
    value = 42;
 
    if (const auto* n = std::any_cast<int>(&value))
        std::cout << *n << '\n';
}
```

This is the core usage pattern: store a value without exposing its concrete type at the boundary, then probe or recover the type at the point that actually knows what to expect.

## Operational notes
- [has_value](/cpp/utility/any/has_value/) reports whether the object currently stores a value.
- [reset](/cpp/utility/any/reset/) clears the object back to the empty state.
- Checked extraction with `std::any_cast<T>(obj)` throws [bad_any_cast](/cpp/utility/any/bad_any_cast/) on type mismatch.
- Pointer-form `std::any_cast<T>(&obj)` returns `nullptr` on mismatch and is often the most practical probing API.
- Implementations are encouraged to avoid dynamic allocation for small objects when that can be done safely, but that is an optimization detail rather than part of the semantic contract.

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and lifetime | [any::any](/cpp/utility/any/any/), [any::~any](/cpp/utility/any/~any/), [any::operator=](/cpp/utility/any/operator=/), [emplace](/cpp/utility/any/emplace/), [reset](/cpp/utility/any/reset/), [swap](/cpp/utility/any/swap/) |
| Observation and extraction | [has_value](/cpp/utility/any/has_value/), [type](/cpp/utility/any/type/), [any_cast](/cpp/utility/any/any_cast/) |
| Helpers | [make_any](/cpp/utility/any/make_any/), [`std::swap(std::any)`](/cpp/utility/any/swap2/), [bad_any_cast](/cpp/utility/any/bad_any_cast/) |

## Notes
| Feature-test macro | Value | Standard | Meaning |
| --- | --- | --- | --- |
| `__cpp_lib_any` | `201606L` | C++17 | `std::any` |

## See also
- [std::variant](/cpp/utility/variant/)
- [std::optional](/cpp/utility/optional/)
- [std::expected](/cpp/utility/expected/)
- [std::function](/cpp/utility/functional/function/)
