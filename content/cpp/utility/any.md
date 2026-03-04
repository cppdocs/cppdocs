---
title: "std::any"
source_path: "cpp/utility/any"
header: "<any>"
category: "utility"
since: "C++17"
---

The class template `std::any` describes a type-safe container for a single value of any [copy constructible](/cpp/types/is_copy_constructible/) type.

## Declarations
```cpp
class any;
```
_(since C++17)_

## Semantics
- An `any` object either contains one value of some concrete type or contains no value.
- The contained type is erased at the interface boundary: users can query it dynamically with [`type`](/cpp/utility/any/type/) and recover it through [`any_cast`](/cpp/utility/any/any_cast/).
- Unlike [std::variant](/cpp/utility/variant/), the possible payload types are not fixed at compile time.
- Unlike [std::optional](/cpp/utility/optional/), the engaged state is not tied to one known payload type.

## Member functions
### Special members
| Member | Description |
| --- | --- |
| [any::any](/cpp/utility/any/any/) | Constructs an empty `any` or initializes it from a value. |
| [any::~any](/cpp/utility/any/~any/) | Destroys the currently contained value, if any. |
| [any::operator=](/cpp/utility/any/operator=/) | Replaces the contained state by assignment. |

### Observers
| Member | Description |
| --- | --- |
| [has_value](/cpp/utility/any/has_value/) | Checks whether the object currently contains a value. |
| [type](/cpp/utility/any/type/) | Returns the `type_info` for the contained type, or `typeid(void)` when empty. |

### Modifiers
| Member | Description |
| --- | --- |
| [reset](/cpp/utility/any/reset/) | Destroys the contained value and leaves the object empty. |
| [emplace](/cpp/utility/any/emplace/) | Constructs a new contained value in place. |
| [swap](/cpp/utility/any/swap/) | Exchanges the states of two `any` objects. |

## Non-member functions
| Function | Description |
| --- | --- |
| [any_cast](/cpp/utility/any/any_cast/) | Retrieves the contained value by type, throwing or returning `nullptr` on mismatch. |
| [swap](/cpp/utility/any/swap2/) | Specializes `std::swap` for `any`. |
| [`make_any`](/cpp/utility/any/make_any/) | Creates an `any` object directly from constructor arguments. |

## Helper classes
| Helper | Description |
| --- | --- |
| [bad_any_cast](/cpp/utility/any/bad_any_cast/) | Exception type thrown when checked `any_cast` fails. |

## Notes
`std::any` is useful when the program needs to move one arbitrary value through an interface but does not know the concrete type until runtime.

The tradeoff is that type safety becomes dynamic rather than static: successful extraction requires the caller to know or test the contained type. When the set of alternatives is known up front, [std::variant](/cpp/utility/variant/) usually provides clearer and more strongly typed code.

### Feature-test macro
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_any` | `201606L` | C++17 | `std::any` |

## Example
```cpp
#include <any>
#include <iostream>
 
int main()
{
    std::cout << std::boolalpha;
 
    // any type
    std::any a = 1;
    std::cout << a.type().name() << ": " << std::any_cast<int>(a) << '\n';
    a = 3.14;
    std::cout << a.type().name() << ": " << std::any_cast<double>(a) << '\n';
    a = true;
    std::cout << a.type().name() << ": " << std::any_cast<bool>(a) << '\n';
 
    // bad cast
    try
    {
        a = 1;
        std::cout << std::any_cast<float>(a) << '\n';
    }
    catch (const std::bad_any_cast& e)
    {
        std::cout << e.what() << '\n';
    }
 
    // has value
    a = 2;
    if (a.has_value())
        std::cout << a.type().name() << ": " << std::any_cast<int>(a) << '\n';
 
    // reset
    a.reset();
    if (!a.has_value())
        std::cout << "no value\n";
 
    // pointer to contained data
    a = 3;
    int* i = std::any_cast<int>(&a);
    std::cout << *i << '\n';
}
```

## References
- C++17 standard (ISO/IEC 14882:2017): 23.3.3 Any class `[any.class]`
- C++23 standard (ISO/IEC 14882:2024): 22.7.4 Any class `[any.class]`

## See also
- [function](/cpp/utility/functional/function/): type-erased wrapper for one callable target
- [move_only_function](/cpp/utility/functional/move_only_function/): move-only callable wrapper
- [variant](/cpp/utility/variant/): type-safe union for one of several known alternatives
- [optional](/cpp/utility/optional/): wrapper for an optional value of one known type
- [expected](/cpp/utility/expected/): value-or-error vocabulary type
