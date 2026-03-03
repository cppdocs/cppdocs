---
title: "static_assert declaration (since C++11)"
source_path: "cpp/language/static_assert"
category: "language"
since: "C++11"
---

Performs compile-time assertion checking.

## Notes
The standard does not require a compiler to print the verbatim text of [error message](#error_message), though compilers generally do so as much as possible.

Since the error message has to be a string literal, it cannot contain dynamic information or even a [constant expression](/cpp/language/constant_expression/) that is not a string literal itself. In particular, it cannot contain the [name](/cpp/language/name/) of the [template type argument](/cpp/language/template_parameters/).

## Example
```cpp
#include <format>
#include <type_traits>
 
static_assert(03301 == 1729); // since C++17 the message string is optional
 
template<class T>
void swap(T& a, T& b) noexcept
{
    static_assert(std::is_copy_constructible_v<T>,
                  "Swap requires copying");
    static_assert(std::is_nothrow_copy_constructible_v<T> &&
                  std::is_nothrow_copy_assignable_v<T>,
                  "Swap requires nothrow copy/assign");
    auto c = b;
    b = a;
    a = c;
}
 
template<class T>
struct data_structure
{
    static_assert(std::is_default_constructible_v<T>,
                  "Data structure requires default-constructible elements");
};
 
template<class>
constexpr bool dependent_false = false; // workaround before CWG2518/P2593R1
 
template<class T>
struct bad_type
{
    static_assert(dependent_false<T>, "error on instantiation, workaround");
    static_assert(false, "error on instantiation"); // OK because of CWG2518/P2593R1
};
 
struct no_copy
{
    no_copy(const no_copy&) = delete;
    no_copy() = default;
};
 
struct no_default
{
    no_default() = delete;
};
 
#if __cpp_static_assert >= 202306L
// Not real C++ yet (std::format should be constexpr to work):
static_assert(sizeof(int) == 4, std::format("Expected 4, got {}", sizeof(int)));
#endif
 
int main()
{
    int a, b;
    swap(a, b);
 
    no_copy nc_a, nc_b;
    swap(nc_a, nc_b); // 1
 
    [[maybe_unused]] data_structure<int> ds_ok;
    [[maybe_unused]] data_structure<no_default> ds_error; // 2
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| CWG 2039 | C++11 | only the expression before conversion is required to be constant | the conversion must also bevalid in a constant expression |
| CWG 2518(P2593R1) | C++11 | uninstantiated static_assert(false, ""); was ill-formed | made well-formed |

## See also
- [#error](/cpp/preprocessor/error/)
- [assert](/cpp/error/assert/)
- [enable_if](/cpp/types/enable_if/)
- [removes](/cpp/language/sfinae/)
- [Type traits](/cpp/meta/#Type_traits)
- [C documentation](/c/language/static_assert/)
