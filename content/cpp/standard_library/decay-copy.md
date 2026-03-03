---
title: "decay-copy"
source_path: "cpp/standard_library/decay-copy"
category: "standard_library"
---

Returns [std::forward](/cpp/utility/forward/)<T>(value) (implicitly converted to the decayed type), a decayed prvalue copy of value.

## Declarations
```cpp
template< class T >
typename std::decay<T>::type decay-copy( T&& value );
```
_(since C++11) (until C++20) (exposition only*)_

```cpp
template< class T >
requires std::convertible_to<T, std::decay_t<T>>
constexpr std::decay_t<T> decay-copy( T&& value )
noexcept(std::is_nothrow_convertible_v<T, std::decay_t<T>>);
```
_(since C++20) (exposition only*)_

## Parameters
- `value`: the value to be copied

## Return value
A decayed copy of value as a prvalue.

## Notes
decay-copy was introduced by the resolution of [LWG issue 929](https://cplusplus.github.io/LWG/issue929). It is initially used in the [concurrency support library](/cpp/atomic/) to ensure that arguments are decayed when passing-by-value, and is later used in the [ranges library](/cpp/ranges/).

The language feature [auto](/cpp/language/explicit_cast/)(x) introduced in C++23 also allows decayed copies to be created as prvalues. The only difference is that decay-copy always [materializes](/cpp/language/implicit_cast/#Temporary_materialization) value and produces a copy, while auto(expr) is a no-op if expr is a prvalue.

All usages of decay-copy in the standard library (see below) except [views::all](/cpp/ranges/all_view/), [ranges::take_view](/cpp/ranges/take_view/) and [ranges::drop_view](/cpp/ranges/drop_view/) are replaced with auto(x) since C++23.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3724 | C++20 | decay-copy was not constrained | constrained |

## See also
- [(constructor)](/cpp/thread/thread/thread/)
- [(constructor)](/cpp/thread/jthread/jthread/)
- [async](/cpp/thread/async/)
- [std::future](/cpp/thread/future/)
- [ranges::begin](/cpp/ranges/begin/)
- [ranges::end](/cpp/ranges/end/)
- [ranges::rbegin](/cpp/ranges/rbegin/)
- [ranges::rend](/cpp/ranges/rend/)
- [ranges::size](/cpp/ranges/size/)
- [ranges::data](/cpp/ranges/data/)
- [views::all_tviews::all](/cpp/ranges/all_view/)
- [view](/cpp/ranges/view/)
- [range](/cpp/ranges/range/)
- [ranges::take_viewviews::take](/cpp/ranges/take_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
- [ranges::drop_viewviews::drop](/cpp/ranges/drop_view/)
- [view](/cpp/ranges/view/)
- [view](/cpp/ranges/view/)
