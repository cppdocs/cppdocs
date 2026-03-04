---
title: "std::expected"
source_path: "cpp/utility/expected"
header: "<expected>"
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
- `T`: the type of the expected value. It may be `void`, or any type that satisfies the Destructible requirements. Array and reference types are not allowed.
- `E`: the type of the unexpected value. It must satisfy the Destructible requirements and be a valid template argument for [std::unexpected](/cpp/utility/expected/unexpected/). Arrays, cv-qualified types, and non-object types are not allowed.

## Member types
| Member type | Definition |
| --- | --- |
| `value_type` | `T` |
| `error_type` | `E` |
| `unexpected_type` | `std::unexpected<E>` |

## Member alias templates
| Alias template | Definition |
| --- | --- |
| `template<class U> using rebind` | `std::expected<U, error_type>` |

## Data members
These exposition-only members describe the stored state:

| Member | Description |
| --- | --- |
| `bool has_val` | Indicates whether the object currently contains the expected value. |
| `T val` | Stores the expected value in the primary template. |
| `E unex` | Stores the unexpected value when no expected value is present. |

## Member functions
### Construction and assignment
| Member | Description |
| --- | --- |
| [expected::expected](/cpp/utility/expected/expected/) | Constructs an `expected` object. |
| [expected::~expected](/cpp/utility/expected/~expected/) | Destroys the contained value or error state. |
| [expected::operator=](/cpp/utility/expected/operator=/) | Replaces the contained state by assignment. |

### Observers
| Member | Description |
| --- | --- |
| `operator->`, [operator*](/cpp/utility/expected/operator*/) | Access the expected value directly. |
| [operator bool](/cpp/utility/expected/operator_bool/), `has_value` | Check whether the object contains an expected value. |
| [value](/cpp/utility/expected/value/) | Returns the expected value, throwing on error access. |
| [error](/cpp/utility/expected/error/) | Returns the stored unexpected value. |
| [value_or](/cpp/utility/expected/value_or/) | Returns the expected value or a supplied fallback. |
| [error_or](/cpp/utility/expected/error_or/) | Returns the unexpected value or a supplied fallback. |

### Monadic operations
| Member | Description |
| --- | --- |
| [and_then](/cpp/utility/expected/and_then/) | Invokes a function on the expected value and returns its `expected` result. |
| [transform](/cpp/utility/expected/transform/) | Maps the expected value while preserving the error channel. |
| [or_else](/cpp/utility/expected/or_else/) | Invokes a function on the error value and returns the resulting `expected`. |
| [transform_error](/cpp/utility/expected/transform_error/) | Maps the error value while preserving success values. |

### Modifiers
| Member | Description |
| --- | --- |
| [emplace](/cpp/utility/expected/emplace/) | Constructs the expected value in place. |
| [swap](/cpp/utility/expected/swap/) | Exchanges the contained states of two `expected` objects. |

## Non-member functions
| Function | Description |
| --- | --- |
| [operator==](/cpp/utility/expected/operator_cmp/) | Compares two `expected` objects, or an `expected` with a value/error-like counterpart. |
| [swap](/cpp/utility/expected/swap2/) | Specializes `std::swap` for `std::expected`. |

## Helper classes
| Helper | Description |
| --- | --- |
| [unexpected](/cpp/utility/expected/unexpected/) | Wraps an unexpected value explicitly. |
| [bad_expected_access](/cpp/utility/expected/bad_expected_access/) | Exception type thrown by checked accessors when no expected value is present. |
| [unexpect, unexpect_t](/cpp/utility/expected/unexpect_t/) | Tag type and tag object used for in-place construction of the unexpected state. |

## Notes
`std::expected` models operations that may either produce a value or report a domain-specific error without forcing exception-based control flow. Unlike [std::optional](/cpp/utility/optional/), the disengaged state carries a typed error payload.

The `void` specialization represents operations that succeed without producing a value. In that form, the object still records success versus failure, but only the error branch stores user data.

Types with the same functionality are called [Result](https://doc.rust-lang.org/std/result/enum.Result.html) in Rust and [Either](https://hackage.haskell.org/package/base-4.17.0.0/docs/Data-Either.html) in Haskell.

### Feature-test macro
| Macro | Value | Standard | Meaning |
| --- | --- | --- | --- |
| `__cpp_lib_expected` | `202202L` | C++23 | `std::expected` and its helper types |
| `__cpp_lib_expected` | `202211L` | C++23 | Monadic operations such as `and_then` and `transform` |

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

## References
- C++23 standard (ISO/IEC 14882:2024): 22.8 Expected objects `[expected]`

## See also
- [variant](/cpp/utility/variant/)
- [optional](/cpp/utility/optional/)
