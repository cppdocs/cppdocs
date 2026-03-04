---
title: "std::optional"
source_path: "cpp/utility/optional"
header: "<optional>"
---

The class template `std::optional` manages an optional contained value: an object that is either engaged and stores a `T`, or disengaged and stores no value.

`std::optional` is primarily used to model "maybe a value" without falling back to sentinel values, out-parameters, or heap allocation. A successful result is stored directly inside the optional object, so the type behaves like an object wrapper rather than a smart pointer.

## Declarations
```cpp
template< class T >
class optional;
```
_(since C++17)_

## Semantic model
- An engaged `optional<T>` contains a `T` nested inside the optional object itself.
- A disengaged `optional<T>` contains no `T`; `operator bool()` and `has_value()` report that state.
- `reset()` destroys the contained object and returns the optional to the empty state.
- Checked access goes through [value()](/cpp/utility/optional/value/) and throws [bad_optional_access](/cpp/utility/optional/bad_optional_access/) if no value is present.
- Unchecked access goes through [operator-> and operator*](/cpp/utility/optional/operator/); these require that a value is already present.
- Since C++26, `optional` also models a zero-or-one-element view with [begin()](/cpp/utility/optional/begin/) and [end()](/cpp/utility/optional/end/).

## Template parameters
| Parameter | Description |
| --- | --- |
| `T` | The stored value type. `T` must be destructible. Reference types, array types, function types, `void`, `std::nullopt_t`, and `std::in_place_t` are not valid optional element types. |

## Member types
| Member type | Definition |
| --- | --- |
| `value_type` | `T` |
| `iterator` | C++26 iterator type for the zero-or-one-element range view returned by `begin()` |
| `const_iterator` | C++26 const iterator type for the range view |

The iterator aliases exist to make `optional` participate in range-based code as a tiny view, not to turn it into a general-purpose container.

## Member functions
### Special members
| Member | Purpose |
| --- | --- |
| [optional::optional](/cpp/utility/optional/optional/) | Constructs an empty optional, copies or moves another optional, or constructs the contained value in place |
| [optional::~optional](/cpp/utility/optional/~optional/) | Destroys the contained value if one is present |
| [optional::operator=](/cpp/utility/optional/operator=/) | Replaces the state or contained value |

### Iterators
| Member | Purpose |
| --- | --- |
| [begin](/cpp/utility/optional/begin/) | Returns an iterator to the contained element when engaged, otherwise the past-the-end iterator |
| [end](/cpp/utility/optional/end/) | Returns the end iterator for the zero-or-one-element range |

### Observers
| Member | Purpose |
| --- | --- |
| [operator->, operator*](/cpp/utility/optional/operator/) | Access the contained value without an emptiness check |
| [operator bool, has_value](/cpp/utility/optional/operator_bool/) | Report whether a value is present |
| [value](/cpp/utility/optional/value/) | Return the contained value with checked access |
| [value_or](/cpp/utility/optional/value_or/) | Return the contained value or a fallback |

### Monadic operations
| Member | Purpose |
| --- | --- |
| [and_then](/cpp/utility/optional/and_then/) | Chains another optional-producing operation when a value is present |
| [transform](/cpp/utility/optional/transform/) | Applies a transformation to the contained value and wraps the result |
| [or_else](/cpp/utility/optional/or_else/) | Produces an alternative optional when the current one is empty |

These C++23 operations let `optional` pipelines stay explicit about success and absence without repeated `if (opt)` scaffolding.

### Modifiers
| Member | Purpose |
| --- | --- |
| [swap](/cpp/utility/optional/swap/) | Exchanges the states and contained values of two optionals |
| [reset](/cpp/utility/optional/reset/) | Destroys any contained value and leaves the optional disengaged |
| [emplace](/cpp/utility/optional/emplace/) | Constructs the contained value directly inside the optional |

## Non-member functions
| Function | Purpose |
| --- | --- |
| [comparison operators](/cpp/utility/optional/operator_cmp/) | Compare optionals with other optionals, `nullopt`, or values |
| [make_optional](/cpp/utility/optional/make_optional/) | Constructs an optional while deducing `T` |
| [`std::swap(std::optional)`](/cpp/utility/optional/swap2/) | Specialized swap overload for optional |

## Helper classes and objects
| Helper | Purpose |
| --- | --- |
| [std::hash&lt;std::optional&gt;](/cpp/utility/optional/hash/) | Hash support for optional |
| [nullopt_t](/cpp/utility/optional/nullopt_t/) | Tag type representing an empty optional |
| [bad_optional_access](/cpp/utility/optional/bad_optional_access/) | Exception thrown by checked access on an empty optional |
| [nullopt](/cpp/utility/optional/nullopt/) | Constant used to create or compare against the disengaged state |
| [in_place and related tags](/cpp/utility/in_place/) | Tags used for direct in-place construction |

## Helper specializations
- `ranges::enable_view<std::optional<T>> = true` makes `optional` model a view in C++26.
- `format_kind<std::optional<T>> = range_format::disabled` disables generic range formatting for `optional` in C++26.

## Deduction guides
The class has [deduction guides](/cpp/utility/optional/deduction_guides/) so direct construction such as `std::optional o(std::string{"x"});` can infer the stored type without spelling `T` explicitly.

## Notes
| Feature-test macro | Value | Standard | Meaning |
| --- | --- | --- | --- |
| `__cpp_lib_optional` | `201606L` | C++17 | `std::optional` |
| `__cpp_lib_optional` | `202106L` | C++23 (DR20) | fully `constexpr` optional |
| `__cpp_lib_optional` | `202110L` | C++23 | monadic operations |
| `__cpp_lib_optional_range_support` | `202406L` | C++26 | range support for `std::optional` |

`optional` expresses absence, but not the reason for absence. If the caller needs structured error information rather than a simple engaged/disengaged state, [std::expected](/cpp/utility/expected/) is usually a better fit.

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

## See also
- [std::expected](/cpp/utility/expected/)
- [std::variant](/cpp/utility/variant/)
- [std::any](/cpp/utility/any/)
- [CopyConstructible](/cpp/named_req/copyconstructible/)
- [ranges::single_view](/cpp/ranges/single_view/)
- [ranges::empty_view](/cpp/ranges/empty_view/)
