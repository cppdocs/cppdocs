---
title: "std::variant"
source_path: "cpp/utility/variant"
header: "<variant>"
---

The class template `std::variant` represents a type-safe [union](/cpp/language/union/): one object that can hold exactly one value from a fixed set of alternative types. At any moment it either contains one alternative, or it is temporarily in the invalid `valueless_by_exception` state after an exception during a type-changing operation.

Unlike many dynamic sum-type wrappers, a `variant` stores its active object directly inside the `variant` itself and does not perform separate dynamic allocation. The alternatives must therefore be object types that satisfy the usual destruction requirements.

`std::variant` is a good fit when the set of possible result types is known at compile time and callers should be forced to handle each alternative explicitly.

## Declarations
```cpp
template< class... Types >
class variant;
```
_(since C++17)_

## Template parameters
- `Types...`: the alternative types that may be stored in the `variant`. Every alternative must satisfy the [Destructible](/cpp/named_req/Destructible/) requirements. References, arrays, and `void` are not allowed as alternatives.

## Semantics
- A `variant` always has at most one active alternative.
- A default-constructed `variant` initializes its first alternative. If the first alternative is not default-constructible, the `variant` is not default-constructible either.
- [std::monostate](/cpp/utility/variant/monostate/) is commonly used as the first alternative when a meaningful empty/default state is needed.
- The same type may appear more than once in `Types...`; index-based access remains valid, but type-based access requires the type to be unique.
- Instantiating `std::variant<>` with no alternatives is ill-formed.

## Member functions
### Special members
- [`variant::variant`](/cpp/utility/variant/variant/): constructs the `variant` and initializes the selected alternative
- [`variant::~variant`](/cpp/utility/variant/~variant/): destroys the active alternative
- [`variant::operator=`](/cpp/utility/variant/operator=/): replaces or assigns the active alternative

### Observers
- [`variant::index`](/cpp/utility/variant/index_fn/): returns the zero-based index of the active alternative, or [`variant_npos`](/cpp/utility/variant/variant_npos/) when valueless
- [`variant::valueless_by_exception`](/cpp/utility/variant/valueless_by_exception/): reports whether the object is currently in the invalid state

### Modifiers
- [`variant::emplace`](/cpp/utility/variant/emplace/): constructs a new alternative in place
- [`variant::swap`](/cpp/utility/variant/swap/): swaps the active states and contained values of two `variant` objects

### Visitation
- [`variant::visit`](/cpp/utility/variant/visit/): C++26 member visitation for invoking a callable with the active alternative

## Non-member functions
- [`visit`](/cpp/utility/variant/visit2/): applies a callable to the active alternatives from one or more `variant` objects
- [`holds_alternative`](/cpp/utility/variant/holds_alternative/): checks whether a `variant` currently holds a given unique type
- [`get`](/cpp/utility/variant/get/): accesses the contained value by index or by unique type and throws on mismatch
- [`get_if`](/cpp/utility/variant/get_if/): returns a pointer to the contained value by index or unique type, or `nullptr` on mismatch
- [`operator==`, `!=`, `<`, `<=`, `>`, `>=`, `<=>`](/cpp/utility/variant/operator_cmp/): compares `variant` objects through their active alternatives
- [`std::swap`](/cpp/utility/variant/swap2/): specialization for swapping `variant` objects

## Helper classes
- [`monostate`](/cpp/utility/variant/monostate/): placeholder type typically used to make a `variant` default-constructible
- [`bad_variant_access`](/cpp/utility/variant/bad_variant_access/): exception thrown when checked access fails
- [`variant_size`, `variant_size_v`](/cpp/utility/variant/variant_size/): compile-time number of alternatives
- [`variant_alternative`, `variant_alternative_t`](/cpp/utility/variant/variant_alternative/): compile-time type lookup by alternative index
- [`std::hash<std::variant>`](/cpp/utility/variant/hash/): hash support for `variant`

## Helper objects
- [`variant_npos`](/cpp/utility/variant/variant_npos/): sentinel index used when a `variant` is valueless

## Notes
| Feature-test macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_variant` | `201606L` | C++17 | `std::variant`: type-safe union |
| `__cpp_lib_variant` | `202102L` | C++23 (DR17) | `std::visit` supports classes derived from `std::variant` |
| `__cpp_lib_variant` | `202106L` | C++23 (DR20) | fully `constexpr` `std::variant` |
| `__cpp_lib_variant` | `202306L` | C++26 | member `visit` |

## Example
```cpp
#include <cassert>
#include <iostream>
#include <string>
#include <variant>

int main()
{
    std::variant<int, float> v, w;
    v = 42; // v contains int
    int i = std::get<int>(v);
    assert(42 == i);

    w = std::get<int>(v);
    w = std::get<0>(v); // same effect as the previous line
    w = v;

//  std::get<double>(v); // error: no double in [int, float]
//  std::get<3>(v);      // error: valid index values are 0 and 1

    try
    {
        std::get<float>(w); // w contains int, not float
    }
    catch (const std::bad_variant_access& ex)
    {
        std::cout << ex.what() << '\n';
    }

    using namespace std::literals;

    std::variant<std::string> x("abc");
    x = "def"; // converting assignment works when unambiguous

    std::variant<std::string, void const*> y("abc");
    assert(std::holds_alternative<void const*>(y));
    y = "xyz"s;
    assert(std::holds_alternative<std::string>(y));
}
```

Possible output:

```text
std::get: wrong index for variant
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2901 | C++17 | `std::uses_allocator` specialization was provided even though `std::variant` cannot properly support allocators | specialization removed |
| LWG 3990 | C++17 | a program could declare an explicit or partial specialization of `std::variant` | the program is ill-formed in that case, with no diagnostic required |

## See also
- [`in_place`, `in_place_type`, `in_place_index`, `in_place_t`, `in_place_type_t`, `in_place_index_t`](/cpp/utility/in_place/): in-place construction tags
- [`optional`](/cpp/utility/optional/): value wrapper for a possibly-absent single type
- [`any`](/cpp/utility/any/): type-erased holder for one copyable value
- [`expected`](/cpp/utility/expected/): value-or-error vocabulary type
- [`CopyConstructible`](/cpp/named_req/CopyConstructible/): named requirement often relevant when choosing alternative types
