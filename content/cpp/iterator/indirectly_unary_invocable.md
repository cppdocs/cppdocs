---
title: "std::indirectly_unary_invocable, std::indirectly_regular_unary_invocable"
source_path: "cpp/iterator/indirectly_unary_invocable"
header: "<iterator>"
category: "iterator"
since: "C++20"
---

The concepts indirectly_unary_invocable and indirectly_regular_unary_invocable specify requirements for algorithms that call (regular) unary invocables as their arguments. The key difference between these concepts and [std::invocable](/cpp/concepts/invocable/) is that they are applied to the type the I references, rather than I itself.

## Declarations
```cpp
std::indirectly_unary_invocable
```

```cpp
template< class F, class I >
concept indirectly_unary_invocable =
std::indirectly_readable<I> &&
std::copy_constructible<F> &&
std::invocable<F&, /*indirect-value-t*/<I>> &&
std::invocable<F&, std::iter_reference_t<I>> &&
std::common_reference_with<
std::invoke_result_t<F&, /*indirect-value-t*/<I>>,
std::invoke_result_t<F&, std::iter_reference_t<I>>>;
```
_(since C++20)_

```cpp
std::indirectly_regular_unary_invocable
```

```cpp
template< class F, class I >
concept indirectly_regular_unary_invocable =
std::indirectly_readable<I> &&
std::copy_constructible<F> &&
std::regular_invocable<F&, /*indirect-value-t*/<I>> &&
std::regular_invocable<F&, std::iter_reference_t<I>> &&
std::common_reference_with<
std::invoke_result_t<F&, /*indirect-value-t*/<I>>,
std::invoke_result_t<F&, std::iter_reference_t<I>>>;
```
_(since C++20)_

## Notes
The distinction between indirectly_unary_invocable and indirectly_regular_unary_invocable is purely semantic.

## Example
```cpp
#include <algorithm>
#include <iterator>
#include <print>
#include <ranges>
 
struct IntWrapper
{
    int i;
 
    explicit IntWrapper(int i) : i(i) {}
    IntWrapper(IntWrapper&&) = default;
    IntWrapper& operator=(IntWrapper&&) = default;
};
 
int main()
{
    auto ints  = std::views::iota(1, 10);
    auto print = [] (IntWrapper w) { std::print("{} ", w.i); };
    auto wrap  = [] (int i) { return IntWrapper{i}; };
 
    using Proj = std::projected<decltype(ints.begin()), decltype(wrap)>;
 
    // error (evaluated to false) until P2609R3:
    // this was because 'std::iter_value_t<Proj> &' is the same as 'IntWrapper&'
    // which is not convertible to 'IntWrapper' (implicitly deleted copy ctor)
    static_assert(std::indirectly_unary_invocable<decltype(print), Proj>);
 
    // if the compile-time check above evaluates to true, then this is well-formed:
    std::ranges::for_each(ints, print, wrap);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2609R3 | C++20 | some requirements were defined in terms of std::iter_value_t<I>&which mishandled projections resulting in incompatibility with invocable F& | defined in terms of /*indirect-value-t*/<I>to correctly handle such projections |
| P2997R1 | C++20 | corresponding concepts required F& to satisfy invocable andregular_invocable, respectively, with std::iter_common_reference_t<I> | does not require |
