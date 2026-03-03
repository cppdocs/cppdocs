---
title: "std::assignable_from"
source_path: "cpp/concepts/assignable_from"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept assignable_from<LHS, RHS> specifies that an expression of the type and value category specified by RHS can be assigned to an lvalue expression whose type is specified by LHS.

## Declarations
```cpp
template< class LHS, class RHS >
concept assignable_from =
std::is_lvalue_reference_v<LHS> &&
std::common_reference_with<
const std::remove_reference_t<LHS>&,
const std::remove_reference_t<RHS>&> &&
requires(LHS lhs, RHS&& rhs) {
{ lhs = std::forward<RHS>(rhs) } -> std::same_as<LHS>;
};
```
_(since C++20)_

## Notes
Assignment need not be a total function. In particular, if assigning to some object x can cause some other object y to be modified, then x = y is likely not in the domain of =. This typically happens if the right operand is owned directly or indirectly by the left operand (e.g., with smart pointers to nodes in a node-based data structure, or with something like [std::vector](/cpp/container/vector/)<[std::any](/cpp/utility/any/)>).

## Example
```cpp
#include <atomic>
#include <concepts>
#include <string>
 
int main()
{
    // Normal basic usage, checks lvalue reference assignment
    static_assert(std::is_assignable_v<int&, int>);
    static_assert(std::assignable_from<int&, int>);
 
    static_assert(std::is_assignable_v<std::string&, std::string>);
    static_assert(std::assignable_from<std::string&, std::string>);
 
    // Fundamental types don't support assignment to an rvalue
    static_assert(!std::is_assignable_v<int, int>);
    static_assert(!std::assignable_from<int, int>);
 
    // std::assignable_from doesn't accept all valid assignment expressions:
 
    // rvalue reference assignment
    static_assert(std::is_assignable_v<std::string&&, std::string>);
    static_assert(!std::assignable_from<std::string&&, std::string>);
 
    // rvalue assignment
    static_assert(std::is_assignable_v<std::string, std::string>);
    static_assert(!std::assignable_from<std::string, std::string>);
 
    // std::atomic::operator= returns by value
    static_assert(std::is_assignable_v<std::atomic<int>&, int>);
    static_assert(!std::assignable_from<std::atomic<int>&, int>);
}
```

## See also
- [is_assignableis_trivially_assignableis_nothrow_assignable](/cpp/types/is_assignable/)
