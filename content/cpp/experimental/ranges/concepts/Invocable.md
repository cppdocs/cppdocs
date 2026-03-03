---
title: "std::experimental::ranges::Invocable, std::experimental::ranges::RegularInvocable"
source_path: "cpp/experimental/ranges/concepts/Invocable"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The Invocable concept specifies that a callable type F can be called with a set of argument types Args... using the function template ranges::invoke.

## Declarations
```cpp
template< class F, class... Args >
concept bool Invocable =
requires(F&& f, Args&&... args) {
ranges::invoke(std::forward<F>(f), std::forward<Args>(args)...);
/* not required to be equality preserving */
};
```
_(ranges TS)_

```cpp
template< class F, class... Args >
concept bool RegularInvocable = Invocable<F, Args...>;
```
_(ranges TS)_

## Notes
The distinction between Invocable and RegularInvocable is purely semantic.

A random number generator may satisfy Invocable but cannot satisfy RegularInvocable ([comical](https://xkcd.com/221/) [ones](http://dilbert.com/strip/2001-10-25) excluded).
