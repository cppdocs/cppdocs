---
title: "std::expected"
source_path: "cpp/utility/expected"
header: "<expected>"
category: "utility"
since: "C++23"
---

The class template std::expected provides a way to represent either of two values: an expected value of type T, or an unexpected value of type E. std::expected is never valueless.

## Declarations
```cpp
template< class T, class E >
class expected;
```
_(since C++23)_

```cpp
template< class T, class E >
requires std::is_void_v<T>
class expected<T, E>;
```
_(since C++23)_

## Template parameters
- `T`: the type of the expected value. It may be `void`, or any type that satisfies the Destructible requirements.
- `E`: the type of the unexpected value. It must satisfy the Destructible requirements and be usable as the payload type of [std::unexpected](/cpp/utility/expected/unexpected/).

The program is ill-formed if it instantiates `std::expected` with:
- a reference type
- a function type
- a specialization of `std::unexpected`
- `T = std::in_place_t`
- `T = std::unexpect_t`

Additionally, `E` cannot be:
- an array type
- a cv-qualified type
- a non-object type

## Semantics
`std::expected` models operations that may either produce a value or report a domain-specific error without forcing exception-based control flow. Unlike [std::optional](/cpp/utility/optional/), the disengaged state carries a typed error payload.

## Representation model
1. The main template stores either an expected value of type `T` or an unexpected value of type `E` within its own storage. The active object is nested within the `expected` object itself.
2. The partial specialization `expected<void, E>` represents either successful completion with no value payload or an unexpected value of type `E`. When it contains an unexpected value, that value is nested within the `expected` object itself.

## State model
- A non-void `expected<T, E>` contains either one `T` object or one unexpected `E` object.
- `expected<void, E>` contains either a success state with no value payload or one unexpected `E` object.
- `std::expected` is never valueless.

## Nested types
| Type | Definition |
| --- | --- |
| `value_type` | `T` |
| `error_type` | `E` |
| `unexpected_type` | `std::unexpected<E>` |
| `template<class U> using rebind` | `std::expected<U, error_type>` |

## Example
```cpp
#include <cmath>
#include <expected>
#include <iomanip>
#include <iostream>
#include <string_view>
 
enum class parse_error
{
    invalid_input,
    overflow
};
 
auto parse_number(std::string_view& str) -> std::expected<double, parse_error>
{
    const char* begin = str.data();
    char* end;
    double retval = std::strtod(begin, &end);
 
    if (begin == end)
        return std::unexpected(parse_error::invalid_input);
    else if (std::isinf(retval))
        return std::unexpected(parse_error::overflow);
 
    str.remove_prefix(end - begin);
    return retval;
}
 
int main()
{
    auto process = [](std::string_view str)
    {
        std::cout << "str: " << std::quoted(str) << ", ";
        if (const auto num = parse_number(str); num.has_value())
            std::cout << "value: " << *num << '\n';
            // If num did not have a value, dereferencing num
            // would cause an undefined behavior, and
            // num.value() would throw std::bad_expected_access.
            // num.value_or(123) uses specified default value 123.
        else if (num.error() == parse_error::invalid_input)
            std::cout << "error: invalid input\n";
        else if (num.error() == parse_error::overflow)
            std::cout << "error: overflow\n";
        else
            std::cout << "unexpected!\n"; // or invoke std::unreachable();
    };
 
    for (auto src : {"42", "42abc", "meow", "inf"})
        process(src);
}
```

## Notes
Types with the same functionality are called [Result](https://doc.rust-lang.org/std/result/enum.Result.html) in Rust and [Either](https://hackage.haskell.org/package/base-4.17.0.0/docs/Data-Either.html) in Haskell.

### Feature-test macro
| Macro | Value | Standard | Meaning |
| --- | --- | --- | --- |
| `__cpp_lib_expected` | `202202L` | C++23 | `std::expected` and its helper types |
| `__cpp_lib_expected` | `202211L` | C++23 | Monadic operations such as `and_then` and `transform` |

## Reference map
| Area | Primary references |
| --- | --- |
| Nested types | `value_type`, `error_type`, `unexpected_type`, `rebind` |
| Construction and assignment | [expected::expected](/cpp/utility/expected/expected/), [expected::~expected](/cpp/utility/expected/~expected/), [expected::operator=](/cpp/utility/expected/operator=/) |
| Observers | [operator->, operator*](/cpp/utility/expected/operator*/), [operator bool, has_value](/cpp/utility/expected/operator_bool/), [value](/cpp/utility/expected/value/), [error](/cpp/utility/expected/error/), [value_or](/cpp/utility/expected/value_or/), [error_or](/cpp/utility/expected/error_or/) |
| Monadic operations | [and_then](/cpp/utility/expected/and_then/), [transform](/cpp/utility/expected/transform/), [or_else](/cpp/utility/expected/or_else/), [transform_error](/cpp/utility/expected/transform_error/) |
| Modifiers | [emplace](/cpp/utility/expected/emplace/), [swap](/cpp/utility/expected/swap/) |
| Non-member functions | [operator==](/cpp/utility/expected/operator_cmp/), [swap](/cpp/utility/expected/swap2/) |
| Helpers | [unexpected](/cpp/utility/expected/unexpected/), [bad_expected_access](/cpp/utility/expected/bad_expected_access/), [unexpect, unexpect_t](/cpp/utility/expected/unexpect_t/) |

## References
- C++23 standard (ISO/IEC 14882:2024): 22.8 Expected objects `[expected]`

## See also
- [variant](/cpp/utility/variant/)
- [optional](/cpp/utility/optional/)
