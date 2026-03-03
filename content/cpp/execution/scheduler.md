---
title: "std::execution::scheduler"
source_path: "cpp/execution/scheduler"
header: "<execution>"
category: "execution"
since: "C++26"
---

The concept scheduler is modeled by types that are schedulers, that is, lightweight handlers to execution resources such as thread pools that work with the C++ execution library.

## Declarations
```cpp
template< class Sch >
concept scheduler =
std::derived_from<
typename std::remove_cvref_t<Sch>::scheduler_concept,
scheduler_t> &&
/*queryable*/<Sch> &&
requires(Sch&& sch)
{
{
std::execution::schedule(std::forward<Sch>(sch))
} -> std::execution::sender;
{
auto(
std::execution::get_completion_scheduler<
std::execution::set_value_t>(
std::execution::get_env(
std::execution::schedule(
std::forward<Sch>(sch)))))
} -> std::same_as<std::remove_cvref_t<Sch>>;
} &&
std::equality_comparable<std::remove_cvref_t<Sch>> &&
std::copy_constructible<std::remove_cvref_t<Sch>>;
};
```
_(since C++26)_

```cpp
Helper tag type
```

```cpp
struct scheduler_t {};
```
_(since C++26)_

## See also
- [execution::schedule](/cpp/execution/schedule/)
