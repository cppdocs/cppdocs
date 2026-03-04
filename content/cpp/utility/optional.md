---
title: "std::optional"
source_path: "cpp/utility/optional"
header: "<optional>"
category: "utility"
since: "C++17"
---

The class template `std::optional` manages an optional contained value, i.e. a value that may or may not be present.

A common use case for `optional` is the return value of a function that may fail to produce a meaningful result. Compared with ad hoc approaches such as `std::pair<T, bool>`, it keeps the intent explicit and avoids forcing construction of a separate “dummy” value.

## Declarations
```cpp
template< class T >
class optional;
```
_(since C++17)_

## Template parameters
- `T`: the type of the contained value. It must satisfy the [Destructible](/cpp/named_req/Destructible/) requirements.

The program is ill-formed if `T` is:
- an array type
- a reference type
- a function type
- `void` or cv-qualified `void`
- `std::nullopt_t` or `std::in_place_t`, including cv-qualified forms

## Semantics
- An `optional<T>` either contains one `T` object or contains no value at all.
- The contained object, when present, is stored directly inside the `optional`; no separate dynamic allocation is required by the abstraction itself.
- An empty `optional` is often used to model “no result”, “not initialized yet”, or “value intentionally absent”.
- Unlike [std::expected](/cpp/utility/expected/), the disengaged state does not carry an error object. Unlike [std::variant](/cpp/utility/variant/), there is at most one payload type.

### State model
An `optional` contains a value after:
- initialization from a value of type `T`
- assignment from a value of type `T`
- copy or move construction from another engaged `optional`
- copy or move assignment from another engaged `optional`

An `optional` does not contain a value after:
- default initialization
- initialization from `std::nullopt`
- assignment from `std::nullopt`
- copy or move construction from a disengaged `optional`
- copy or move assignment from a disengaged `optional`
- a call to [`reset`](/cpp/utility/optional/reset/)

### Storage and access model
If an `optional` contains a value, that value is nested inside the `optional` object itself. In that sense `optional` models an object, not a pointer, even though [`operator*`](/cpp/utility/optional/operator*/) and [`operator->`](/cpp/utility/optional/operator*/) provide pointer-like access syntax.

When an `optional<T>` is contextually converted to `bool`, the conversion returns `true` if the object contains a value and `false` otherwise.

### Range/view model
Since C++26, `optional` also acts as a view with either one element when engaged or zero elements when disengaged. The lifetime of that element remains bound to the `optional` object.

## Nested types
| Type | Definition |
| --- | --- |
| `value_type` | `T` |
| `iterator` | _(since C++26)_ implementation-defined contiguous iterator over the contained element when a value is present |
| `const_iterator` | _(since C++26)_ implementation-defined contiguous iterator over the contained element for const access |

All standard iterator requirements that apply to the iterator types of a standard container also apply to the iterator types of `optional`.

## Example
```cpp
#include <iostream>
#include <optional>
#include <string>
 
// optional can be used as the return type of a factory that may fail
std::optional<std::string> create(bool b)
{
    if (b)
        return "Godzilla";
    return {};
}
 
// std::nullopt can be used to create any (empty) std::optional
auto create2(bool b)
{
    return b ? std::optional<std::string>{"Godzilla"} : std::nullopt;
}
 
int main()
{
    std::cout << "create(false) returned "
              << create(false).value_or("empty") << '\n';
 
    // optional-returning factory functions are usable as conditions of while and if
    if (auto str = create2(true))
        std::cout << "create2(true) returned " << *str << '\n';
}
```

## Notes
`std::optional` is the vocabulary type for “a value may or may not be present” when absence itself is enough information. It is often a better fit than sentinels, null pointers, or ad hoc boolean-plus-value pairs.

Because the value lives directly inside the `optional`, lifetimes remain simple: destroying or resetting the `optional` destroys the contained object, and moving the `optional` moves the contained object when one exists.

For richer failure reporting, use [std::expected](/cpp/utility/expected/) instead. For selecting among several possible payload types, use [std::variant](/cpp/utility/variant/).

### Feature-test macro
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_optional` | `201606L` | C++17 | `std::optional` |
| `__cpp_lib_optional` | `202106L` | C++23 (DR20) | fully `constexpr` `std::optional` |
| `__cpp_lib_optional` | `202110L` | C++23 | monadic operations |
| `__cpp_lib_optional_range_support` | `202406L` | C++26 | range support for `std::optional` |

## Reference map
| Area | Primary references |
| --- | --- |
| Nested types | `value_type`, `iterator` _(since C++26)_, `const_iterator` _(since C++26)_ |
| Construction and assignment | [optional::optional](/cpp/utility/optional/optional/), [optional::~optional](/cpp/utility/optional/~optional/), [optional::operator=](/cpp/utility/optional/operator=/) |
| Observers | [operator->, operator*](/cpp/utility/optional/operator*/), [operator bool, has_value](/cpp/utility/optional/operator_bool/), [value](/cpp/utility/optional/value/), [value_or](/cpp/utility/optional/value_or/) |
| Modifiers | [reset](/cpp/utility/optional/reset/), [emplace](/cpp/utility/optional/emplace/), [swap](/cpp/utility/optional/swap/) |
| Monadic operations | [and_then](/cpp/utility/optional/and_then/), [transform](/cpp/utility/optional/transform/), [or_else](/cpp/utility/optional/or_else/) |
| Non-member functions | [make_optional](/cpp/utility/optional/make_optional/), [operator==, !=, <, <=, >, >=, <=>](/cpp/utility/optional/operator_cmp/), [swap](/cpp/utility/optional/swap2/) |
| Helpers | [bad_optional_access](/cpp/utility/optional/bad_optional_access/), [hash](/cpp/utility/optional/hash/), [nullopt, nullopt_t](/cpp/utility/optional/nullopt_t/) |

## References
- C++17 standard (ISO/IEC 14882:2017): 23.6.3 Optional objects `[optional]`
- C++23 standard (ISO/IEC 14882:2024): 22.5 Optional objects `[optional]`

## See also
- [variant](/cpp/utility/variant/): type-safe union for one of several known alternatives
- [any](/cpp/utility/any/): type-erased holder for one copyable value of arbitrary type
- [expected](/cpp/utility/expected/): vocabulary type for either a value or a typed error
- [CopyConstructible](/cpp/named_req/CopyConstructible/): named requirement relevant to many optional payload types
- [ranges::single_view, views::single](/cpp/ranges/single_view/): a range that always contains exactly one element
- [ranges::empty_view, views::empty](/cpp/ranges/empty_view/): a range that contains no elements
